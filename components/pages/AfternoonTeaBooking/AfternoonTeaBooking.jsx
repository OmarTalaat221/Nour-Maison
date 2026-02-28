// components/pages/AfternoonTeaBooking/AfternoonTeaBookingContent.jsx
"use client";
import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader, Toggle } from "rsuite";
import CustomSelect from "../../../utils/CustomSelect/CustomSelect";
import CustomInput from "../../../utils/CustomInput/CustomInput";
import Tilt from "react-parallax-tilt";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../../features/bookingSlice";
import toast, { Toaster } from "react-hot-toast";
import PaperPlaneSuccess from "../../PaperPlaneSuccess/PaperPlaneSuccess";
import AlleadyReservedModal from "../Booking/AlleadyReservedModal";
import BusyModal from "../Booking/BusyModal";
import createChatForBooking from "../../../lib/createChatForBooking";
import axios from "axios";
import { conifgs } from "../../../config";

// Separate component that uses useSearchParams
const BookingForm = ({ bg }) => {
  const bookingStateLoading = useSelector((state) => state.booking.loading);
  const [showOverlay, setShowOverlay] = useState(false);
  const [allreadyReservedModal, setAllreadyReservedModal] = useState(false);
  const [busyModal, setBusyModal] = useState(false);
  const [busyModalContent, setBusyModalContent] = useState({
    title: "",
    message: "",
  });
  const [chatId, setChatid] = useState("");
  const [dateLoading, setDateLoading] = useState(false);
  const [lockedTimesData, setLockedTimesData] = useState(null);

  // ✅ Get source from URL params
  const searchParams = useSearchParams();
  const source = searchParams.get("source") || "website";

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    time: "",
    seats: "",
    special_order_notes: "",
    other_notes: "",
    date: "",
    phone: "",
  });

  const personsData = [
    "1 Person",
    "2 Persons",
    "3 Persons",
    "4 Persons",
    "5 Persons",
    "6 Persons",
    "7 Persons",
    "8 Persons",
  ].map((item) => ({ label: item, value: parseInt(item) }));

  const partyPersonsData = Array.from({ length: 92 })
    .fill(0)
    .map((item, index) => ({
      label: index + 9 + " Persons",
      value: parseInt(index + 9),
    }));

  const [type, setType] = useState("normal");
  const [isSpecialOrder, setIsSpecialOrder] = useState(false);

  const timeSlots = Array.from({ length: 12.5 * 4 + 1 }, (_, i) => {
    const hours = Math.floor(i / 4) + 9;
    const minutes = (i % 4) * 15;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours > 12 ? hours - 12 : hours;

    return {
      id: i + 1,
      label: `${formattedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`,
      value: `${formattedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`,
    };
  });

  const dispatch = useDispatch();

  const toastStyles = {
    position: "bottom-right",
    style: {
      backgroundColor: "#000",
      color: "#14532D",
      fontSize: "1rem",
      fontWeight: "bold",
      background: "rgba( 255, 255, 255, 0.25 )",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 5px )",
      WebkitBackdropFilter: "blur( 1.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  };

  const convertTo12Hour = (time24) => {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${hours12.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`;
  };

  const checkBookingDateTime = async (selectedDate) => {
    setDateLoading(true);
    setLockedTimesData(null);

    try {
      const response = await axios.post(
        `${conifgs.BASE_URL}/user/check_booking_date_time.php`,
        {
          date: selectedDate,
        }
      );

      if (response?.data?.status === "success" && response?.data?.message) {
        setLockedTimesData(response?.data?.message);
      } else {
        setLockedTimesData(null);
      }
    } catch (error) {
      console.error("Error checking booking date:", error);
      setLockedTimesData(null);
    } finally {
      setDateLoading(false);
    }
  };

  const isTimeLocked = (timeValue) => {
    if (!lockedTimesData || !lockedTimesData.times_locked) return false;

    const lockedTimes = lockedTimesData.times_locked.map((t) =>
      convertTo12Hour(t.time)
    );

    return lockedTimes.includes(timeValue);
  };

  const handleTimeSelect = (selectedTime) => {
    setBookingData((prev) => ({
      ...prev,
      time: selectedTime,
    }));
  };

  const handleDateChange = async (e) => {
    const { name, value } = e.target;

    setBookingData((prev) => ({
      ...prev,
      [name]: value,
      time: "",
    }));

    if (value) {
      await checkBookingDateTime(value);
    } else {
      setLockedTimesData(null);
    }
  };

  const createBooking = async () => {
    const dataset = { ...bookingData };
    dataset.seats = bookingData?.seats?.value;
    dataset.time = bookingData?.time?.value;

    // ✅ إضافة الـ source للـ request
    dataset.source = source;

    // Validation
    if (!dataset.name) {
      toast.error("Enter the name", toastStyles);
      return;
    }

    if (!dataset.email) {
      toast.error("Enter the email", toastStyles);
      return;
    }

    if (!dataset.phone) {
      toast.error("Enter the phone", toastStyles);
      return;
    }
    if (!dataset.date) {
      toast.error("Enter the date", toastStyles);
      return;
    }
    if (!dataset.seats) {
      toast.error("Enter number of guests", toastStyles);
      return;
    }
    if (!dataset.time) {
      toast.error("Enter time of booking", toastStyles);
      return;
    }

    if (isTimeLocked(dataset.time)) {
      setBusyModalContent({
        title: "Time Not Available",
        message: (
          <div dangerouslySetInnerHTML={{ __html: lockedTimesData.message }} />
        ),
      });
      setBusyModal(true);
      return;
    }

    // ✅ إضافة Afternoon Tea prefix للرسالة
    const afternoonTeaPrefix = "(Afternoon Tea) - ";

    if (dataset.other_notes) {
      dataset.other_notes = afternoonTeaPrefix + dataset.other_notes;
    } else {
      dataset.other_notes = afternoonTeaPrefix + "Afternoon Tea Booking";
    }

    if (dataset.special_order_notes) {
      dataset.special_order_notes =
        afternoonTeaPrefix + dataset.special_order_notes;
    }

    dispatch(addBooking(dataset)).then(async (res) => {
      if (res.payload.message == "You have a reservation in this time") {
        console.log(res.payload.id);
        setAllreadyReservedModal(true);
        return;
      }

      if (res.payload.status == "success") {
        setChatid(res.payload.id);
        try {
          await createChatForBooking(res.payload.id, dataset);
        } catch (err) {
          console.error("Failed to create chat in Firestore:", err);
        }
        setShowOverlay(true);
        setBookingData({
          name: "",
          email: "",
          time: "",
          seats: "",
          special_order_notes: "",
          other_notes: "",
          date: "",
          phone: "",
        });
        setLockedTimesData(null);
      }
    });
  };

  const getBookingData = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleShowMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=149+Grafton+Gate,+Milton+Keynes+MK9+1AE",
      "_blank"
    );
  };

  return (
    <main>
      <header>
        <h1 className="px-2 text-4xl lg:text-5xl font-bold text-center font-tangerine text-goldenOrange my-10">
          <b>Book Afternoon Tea</b> at <strong>Nour Maison</strong> –{" "}
          <strong>£29.95</strong> per person
        </h1>
      </header>

      <div
        id="booking"
        className="relative md:backdrop:mx-5 lg:mx-10 rounded-3xl border-2 border-softMintGreen md:p-2 mt-6 overflow-hidden shadow-2xl"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
            url(${bg || "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bxalmi3bmvqrkry8htpq_vw0vmi.jpg"})
          `,
        }}
      >
        <div
          className="sticky top-14"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <BranchesImage
            variant={"top-right"}
            width={700}
            className={" opacity-65 right-[-30px] scale-150 origin-right "}
          />
        </div>
        <div className="" data-aos="fade-right" data-aos-delay="500">
          <BranchesImage
            variant={"top-left"}
            className={" w-[] top-6 scale-150 "}
          />
        </div>

        <div className="lg:max-w-[1000px] xl:max-w-[1200px] relative mx-auto my-10">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] relative gap-5 lg:gap-0">
            {/* Right Side - Form */}
            <div
              className="order-1 lg:order-2 mx-4 lg:mx-0 relative z-20 flex flex-col gap-4 
                backdrop-blur-md bg-white/20 p-5 lg:p-8 rounded-3xl shadow-lg border-2 border-white/50 text-green-900
                bg-gray-900 bg-clip-padding backdrop-filter bg-opacity-20  
                bg-gradient-to-br from-white/10 via-white/20 to-white/5"
            >
              <div className="relative z-20 flex flex-col h-full">
                <h2
                  style={{
                    textShadow: "white 1px 2px 0px",
                  }}
                  className="text-3xl lg:text-5xl font-bold italic font-seasons text-logoGold text-shadow-xs text-center mb-4 z-10 relative"
                >
                  Reserve Your Afternoon Tea
                </h2>

                <p className="mb-3 text-center lg:text-start text-lg lg:text-lg !font-normal leading-tight text-white font-inter">
                  Book your Afternoon Tea experience at Nour Maison. Enjoy a
                  unique fusion of French pâtisserie elegance and Middle Eastern
                  flavors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CustomInput
                    isGlass
                    placeholder="Name"
                    name="name"
                    value={bookingData.name}
                    onChange={getBookingData}
                    label="Full Name"
                    required
                  />
                  <CustomInput
                    isGlass
                    placeholder="Email"
                    name="email"
                    value={bookingData.email}
                    onChange={getBookingData}
                    label="Email Address"
                    required
                  />
                  <CustomInput
                    isGlass
                    placeholder="Phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={getBookingData}
                    label="Phone Number"
                    required
                  />
                  <div className="relative">
                    <CustomInput
                      isGlass
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleDateChange}
                      min={new Date().toISOString().split("T")[0]}
                      label="Booking Date"
                      required
                    />
                    {dateLoading && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Loader size="xs" />
                      </div>
                    )}
                  </div>
                  <CustomSelect
                    isGlass
                    placeholder="Time"
                    data={timeSlots}
                    name="time"
                    value={bookingData?.time}
                    onChange={handleTimeSelect}
                    label="Booking Time"
                    required
                    disabled={dateLoading}
                  />
                  <CustomSelect
                    isGlass
                    placeholder="Guests"
                    name="seats"
                    onChange={(e) => {
                      setBookingData((prev) => ({
                        ...prev,
                        seats: e,
                      }));
                    }}
                    data={type == "normal" ? personsData : partyPersonsData}
                    label="Number of Guests"
                    required
                    value={bookingData?.seats}
                  />
                </div>

                {type != "normal" && (
                  <div className="mt-6">
                    <CustomInput
                      isGlass
                      rows={"auto"}
                      placeholder="Occasion type (Birthday, Anniversary, etc.)"
                      name="type"
                      value={bookingData.type}
                      onChange={getBookingData}
                      label="Occasion Type"
                    />
                  </div>
                )}

                <div className="mt-6">
                  <CustomInput
                    isGlass
                    textarea={true}
                    rows={"5"}
                    placeholder="Any dietary requirements or special requests..."
                    name={
                      isSpecialOrder ? "special_order_notes" : "other_notes"
                    }
                    onChange={getBookingData}
                    value={
                      bookingData[
                        isSpecialOrder ? "special_order_notes" : "other_notes"
                      ]
                    }
                    label="Special Requests / Dietary Requirements"
                  />
                </div>

                {type != "normal" && (
                  <div className="mt-4 flex items-center">
                    <label htmlFor="specialOrderToggle" className="mr-4">
                      Is Special Order?
                    </label>
                    <Toggle
                      id="specialOrderToggle"
                      checked={isSpecialOrder}
                      onChange={(e) => setIsSpecialOrder(e)}
                      className="!bg-[#D3DED5] border border-softMintGreen p-2 px-4 rounded-full shadow-lg"
                      defaultChecked
                      color="green"
                      aria-label="Toggle special order"
                    />
                  </div>
                )}

                <p className="my-3 text-green-900">
                  {type == "normal"
                    ? "More than 8 guests? "
                    : "Less than 8 guests? "}
                  <b
                    onClick={() =>
                      setType((prev) => (prev == "normal" ? "party" : "normal"))
                    }
                    className="hover:underline font-bold cursor-pointer"
                  >
                    Make an enquiry
                  </b>
                </p>

                <div className="mt-4">
                  {bookingStateLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader color="#CA842C" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <button
                        onClick={createBooking}
                        className="button-border-anime hover:!bg-[#1a1a1a] !w-44 md:!w-60 h-[3rem] md:!h-[4rem] flex items-center justify-center"
                        aria-label="Book Afternoon Tea"
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="!h-[4rem]"
                          aria-hidden="true"
                        >
                          <rect
                            className="border-anime !w-44 md:!w-60 !h-[4rem] !stroke-[4px] !stroke-[#c16d2d]"
                            pathLength={100}
                          />
                        </svg>
                        <strong className="txt-upload font-tangerine text-4xl md:text-5xl font-bold !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
                          Book Now
                        </strong>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Left Side - Info Card */}
            <div className="order-2 lg:order-1 w-full h-full relative lg:px-4">
              <Tilt
                className="background-stripes parallax-effect-glare-scale h-full w-full"
                perspective={5000}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div
                  className="mx-4 lg:mx-0 h-full relative flex flex-col gap-4 
                    backdrop-blur-sm bg-white/20 p-8 rounded-3xl shadow-lg border-2 border-white text-green-900
                    bg-gray-900 bg-clip-padding backdrop-filter bg-opacity-20  
                    bg-gradient-to-br from-white/10 via-white/20 to-white/5"
                >
                  <div className="absolute inset-0 rounded-3xl border opacity-40 pointer-events-none"></div>

                  <header
                    style={{
                      textShadow: "white 1px 2px 0px",
                    }}
                    className="text-3xl lg:text-5xl font-bold italic font-seasons text-logoGold text-shadow-xs text-center mt-2 z-10 relative"
                  >
                    Afternoon Tea
                  </header>

                  <p className="text-2xl lg:text-3xl font-sans text-center text-white mt-2 z-10 relative">
                    £29.95 per person
                  </p>
                  <p className="text-lg lg:text-xl text-center text-white/80 mt-1 z-10 relative">
                    Unlimited Tea Included
                  </p>

                  <div className="mt-4 z-10 relative px-4">
                    <p className="text-white text-center text-sm lg:text-base leading-relaxed">
                      A unique fusion of French pâtisserie elegance and the
                      soulful, time-honored flavors of the Middle East. Each
                      bite is a celebration of two worlds.
                    </p>
                  </div>

                  <div className="border-t border-white/30 my-4 z-10 relative"></div>

                  <strong
                    style={{
                      textShadow: "white 1px 3px 0px",
                    }}
                    className="text-4xl lg:text-5xl italic text-logoGold z-10 relative font-lato text-center font-bold"
                  >
                    Call Us Now
                  </strong>
                  <a
                    href="tel:+441908772177"
                    style={{
                      textShadow: "white 0px 2px 0px",
                    }}
                    className="text-2xl lg:text-3xl text-center font-lato !text-logoGold hover:!text-logoGold no-underline hover:no-underline hover:scale-105 transition mt-1 z-10 relative"
                  >
                    +44 1908 772177
                  </a>

                  <address
                    onClick={() => handleShowMap()}
                    style={{
                      textShadow: "white 0px 2px 2px",
                    }}
                    className="mt-4 not-italic cursor-pointer hover:scale-110 transition text-center text-logoGold text-base lg:text-lg font-oswald leading-relaxed z-10 relative"
                  >
                    149 Grafton Gate, Milton Keynes
                    <br />
                    MK9 1AE, United Kingdom
                  </address>
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        <Toaster />
        <PaperPlaneSuccess
          chatLink={chatId}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          text="Afternoon Tea booking confirmed!"
        />
        <AlleadyReservedModal
          open={allreadyReservedModal}
          setOpen={setAllreadyReservedModal}
        />
        <BusyModal
          title={busyModalContent.title || "Limited Availability Notice"}
          message={busyModalContent.message}
          open={busyModal}
          setOpen={setBusyModal}
        />
      </div>
    </main>
  );
};

// Main component wrapped in Suspense
const AfternoonTeaBookingContent = ({ bg }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader size="lg" />
        </div>
      }
    >
      <BookingForm bg={bg} />
    </Suspense>
  );
};

export default AfternoonTeaBookingContent;
