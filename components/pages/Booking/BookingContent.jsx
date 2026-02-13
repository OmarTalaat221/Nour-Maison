"use client";
import React, { useState } from "react";
import { Col, Grid, Loader, Row, Toggle } from "rsuite";
import CustomSelect from "../../../utils/CustomSelect/CustomSelect";
import CustomInput from "../../../utils/CustomInput/CustomInput";
import Tilt from "react-parallax-tilt";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../../features/bookingSlice";
import toast, { Toaster } from "react-hot-toast";
import PaperPlaneSuccess from "../../PaperPlaneSuccess/PaperPlaneSuccess";
import AlleadyReservedModal from "./AlleadyReservedModal";
import BusyModal from "./BusyModal";
import createChatForBooking from "../../../lib/createChatForBooking";

const BookingConent = ({bg}) => {
  const bookingStateLoading = useSelector((state) => state.booking.loading);
  const [showOverlay, setShowOverlay] = useState(false);
  const [allreadyReservedModal, setAllreadyReservedModal] = useState(false);
  const [busyModal, setBusyModal] = useState(false);
  const [chatId, setChatid] = useState("");
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
  const [type, setType] = useState("normal"); // normal || party
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

  const createBooking = async () => {
    const dataset = { ...bookingData };
    dataset.seats = bookingData.seats.value;
    dataset.time = bookingData.time.value;

    

    // this code is for sunday's party 🥳
    //from 2 pm to 10 pm

    const valentineBlockedTimes = [
      "11:00 AM",
      "11:15 AM",
      "11:30 AM",
      "11:45 AM",
      "12:00 PM",
      "12:15 PM",
      "12:30 PM",
      "12:45 PM",
      "01:00 PM",
      "01:15 PM",
      "01:30 PM",
      "01:45 PM",
      "02:00 PM",
      "02:15 PM",
      "02:30 PM",
      "02:45 PM",
    ];
    
    

    if (
      dataset.date === "2026-02-14" &&
      valentineBlockedTimes.includes(dataset.time)
    ) {
      setBusyModal(true);
      return;
    }

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
      toast.error("Enter the  date", toastStyles);
      return;
    }
    if (!dataset.seats) {
      toast.error("Enter number of seats", toastStyles);
      return;
    }
    if (!dataset.time) {
      toast.error("Enter time of booking", toastStyles);
      return;
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
      }
      // toast.success(res.payload.message);
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
    // make title here
    <main>
      <header>
        <h1 className=" px-2 text-4xl lg:text-5xl font-bold text-center font-tangerine text-goldenOrange my-10">
          <b>Book a Table </b> at <stroug>Nour Maison</stroug> –{" "}
          <strong>Halal French</strong> & Middle Eastern Dining
        </h1>
      </header>

      <div
        id="booking"
        className="relative md:backdrop:mx-5 lg:mx-10 rounded-3xl border-2 border-softMintGreen  md:p-2 mt-6 overflow-hidden shadow-2xl"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
        url(${ bg ||"https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443791/bznj0n2qms9qo0jxjvfc_rrmmu2.webp"})
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
            className={" w-[] top-6 scale-150  "}
          />
        </div>

        <div className="  lg:max-w-[1000px] xl:max-w-[1200px]  relative mx-auto   my-10">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] relative gap-5 lg:gap-0  ">
            <div
              className=" order-1 lg:order-2  mx-4 lg:mx-0  relative z-20 flex flex-col gap-4 
          
          backdrop-blur-md bg-white/20 p-5 lg:p-8 rounded-3xl shadow-lg border-2 border-white/50 text-green-900
        bg-gray-900 bg-clip-padding backdrop-filter  bg-opacity-20  
          bg-gradient-to-br from-white/10 via-white/20 to-white/5
          "
            >
              <div className="relative z-20 flex flex-col h-full">
                <h2
                  style={{
                    textShadow: "white 1px 2px 0px",
                  }}
                  className="text-3xl lg:text-5xl font-bold italic font-seasons text-logoGold  text-shadow-xs text-center mb-6 z-10 relative"
                >
                  Your Table Awaits
                </h2>
                <p className=" mb-3 text-center lg:text-start text-lg lg:text-lg !font-normal leading-tight  text-white font-inter">
                  You can book your table online easily in just a couple of
                  minutes. We take reservations for lunch, just check the
                  availability of your table.
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
                  <CustomInput
                    isGlass
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={getBookingData}
                    min={new Date().toISOString().split("T")[0]}
                    label="Booking Date"
                    required
                  />
                  <CustomSelect
                    isGlass
                    placeholder="Time"
                    data={timeSlots}
                    name="time"
                    value={bookingData?.time}
                    onChange={(e) => {
                      // getBookingData({
                      //   target: { label: e.name, value: e.value },
                      // });
                      setBookingData((prev) => ({
                        ...prev,
                        time: e,
                      }));
                    }}
                    label="Booking Time"
                    required
                  />
                  <CustomSelect
                    isGlass
                    placeholder="Seats"
                    name="seats"
                    onChange={(e) => {
                      // getBookingData({
                      //   target: { label: e.name, value: e.value },
                      // });
                      setBookingData((prev) => ({
                        ...prev,
                        seats: e,
                      }));
                    }}
                    data={type == "normal" ? personsData : partyPersonsData}
                    label="Number of Seats"
                    required
                    value={bookingData?.seats}
                  />
                </div>
                {type != "normal" && (
                  <div className="mt-6">
                    <CustomInput
                      isGlass
                      rows={"auto"}
                      placeholder="Occasion type"
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
                    placeholder="Message"
                    name={
                      isSpecialOrder ? "special_order_notes" : "other_notes"
                    }
                    onChange={getBookingData}
                    value={
                      bookingData[
                        isSpecialOrder ? "special_order_notes" : "other_notes"
                      ]
                    }
                    label={
                      isSpecialOrder
                        ? "Special Order Notes"
                        : "Additional Notes"
                    }
                  />
                </div>
                {type == "normal" ? (
                  <></>
                ) : (
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
                <p className="my-3 text-green-900 ">
                  {type == "normal"
                    ? "More than 8 persons? "
                    : "Less than 8 persons? "}
                  {/* Can't see your party size?{" "} */}
                  <b
                    onClick={() =>
                      setType((prev) => (prev == "normal" ? "party" : "normal"))
                    }
                    className="hover:underline font-bold cursor-pointer"
                  >
                    Make an enquiry
                  </b>
                </p>

                <div className="mt-4 ">
                  {bookingStateLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader color="#CA842C" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      {/* <AnimButton2 text={"Book Now"} /> */}
                      <button
                        onClick={createBooking}
                        className="button-border-anime hover:!bg-[#1a1a1a] !w-44 md:!w-60 h-[3rem] md:!h-[4rem] flex items-center justify-center"
                        aria-label="Book Now"
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
            <div
              className=" order-2 lg:order-1 w-full h-full  relative lg:px-4 "
              style={
                // {
                //   backgroundImage:
                //   backgroundPosition: "center",
                //   backgroundSize: "",
                //   backgroundRepeat: "no-repeat",

                //   zIndex: "-1",
                // }
                {}
              }
            >
              <Tilt
                className="background-stripes parallax-effect-glare-scale h-full w-full"
                perspective={5000}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
              >
                <div
                  className=" mx-4 lg:mx-0 h-full relative flex flex-col gap-4 
          
          backdrop-blur-sm bg-white/20 p-8 rounded-3xl shadow-lg border-2 border-white text-green-900
          bg-gray-900 bg-clip-padding backdrop-filter  bg-opacity-20  
          bg-gradient-to-br from-white/10 via-white/20 to-white/5"
                >
                  <div className="absolute inset-0 rounded-3xl border  opacity-40 pointer-events-none"></div>

                  {/* <h2 className=" lg:text-xl  italic  z-10 relative font-tangerine text-center !text-5xl font-bold  ">
                  Check Availability
                </h2> */}

                  <header
                    style={{
                      textShadow: "white 1px 2px 0px",
                      // textShadow: "#613f00 1px 3px 0px",
                    }}
                    className="text-3xl lg:text-5xl font-bold italic font-seasons text-logoGold  text-shadow-xs text-center mt-2 z-10 relative"
                  >
                    Opening times
                  </header>

                  <p className=" text-2xl lg:text-3xl font-sans text-center text-white   mt-4 z-10 relative">
                    Daily:
                  </p>
                  <p className=" text-2xl lg:text-3xl text-center font-medium text-white mt-1 z-10 relative">
                    09:00 AM – 10:00 PM
                  </p>

                  <strong
                    style={{
                      textShadow: "white 1px 3px 0px",
                      // textShadow: "#613f00 1px 3px 0px",
                    }}
                    className=" text-5xl  mt-6 italic text-logoGold  z-10 relative font-lato text-center lg:text-6xl font-bold  "
                  >
                    Call Us Now
                  </strong>
                  <a
                    href="tel:+441908772177"
                    style={{
                      textShadow: "white 0px 2px 0px",
                      // textShadow: "#613f00 1px 3px 0px",
                    }}
                    className=" text-3xl lg:text-4xl text-center font-lato !text-logoGold hover:!text-logoGold no-underline hover:no-underline hover:scale-105 transition mt-1 z-10 relative"
                  >
                    +44 1908 772177
                  </a>

                  <address
                    onClick={() => handleShowMap()}
                    style={{
                      textShadow: "white 0px 2px 2px",
                      // textShadow: "#613f00 1px 3px 0px",
                    }}
                    className="mt-6 not-italic cursor-pointer hover:scale-110 transition text-center text-logoGold lg:text-3xl font-oswald fobnt-semibold  leading-relaxed z-10 relative"
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
        />
        <AlleadyReservedModal
          open={allreadyReservedModal}
          setOpen={setAllreadyReservedModal}
        />

        <BusyModal
          title="Limited Availability Notice"
          message={
            <>
              <p className="text-lg text-slate-600">
              Due to Valentine’s Day, we’re fully booked between 11:00 AM and 03:00 PM.
              </p>
              <p className="text-lg text-slate-600 mt-5">
              Please choose a time outside this window to continue your booking.
              </p>
              <p className="text-lg text-black">
                Thank you for your patience and understanding.
              </p>
            </>
          }
          open={busyModal}
          setOpen={setBusyModal}
        />
      </div>
    </main>
  );
};

export default BookingConent;
