import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoCheckmarkCircle, IoClose, IoSend, IoStar } from "react-icons/io5";
import { Dropdown } from "rsuite";
import { fetchData } from "../services/apiIntsance";

const FramerModal = ({ open, setOpen, event  , onSuccess = () => null , onFail = () => {} }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    seats: "",
    special_order_notes: "",
    other_notes: "",
    phone: "",
  });


  
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

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

  const closeModal = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    setIsSubmitted(true);

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "date", "time", "seats"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        toast.error(
          `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
          toastStyles
        );
        return;
      }
    }


    const dataset = {
      ...formData,
      inquiry_type: event?.title,
    }
    const data = await fetchData({
      url: "user/make_inquiry.php",
      body: dataset,
      method: "POST",
    });
    console.log("data with fetch", data);


    if (data.status === "success") {
      toast.success("Inquiry sent successfully", toastStyles);
      setOpen(false);
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        seats: "",
        special_order_notes: "",
        other_notes: "",
        phone: "",
      });
      toast.success("Inquiry sent successfully", toastStyles);
      onSuccess();
    } else {
      toast.error(data.message, toastStyles);
      onFail();
    }








  };

  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const partyPersonsData = Array.from({ length: 100 })
    .fill(0)
    .map((item, index) => ({
      label: index + 1 + " Persons",
      value: parseInt(index + 1),
    }));

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

  return (
    <div>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" z-[9999999999] fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 "
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${event?.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={closeModal}
                  className="fixed top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <IoClose className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-white text-3xl font-bold mb-2">
                    {event?.title}
                  </h2>
                  <p className="text-white text-xl">Make inquiry</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-8">
                <div className="relative">
                  <div className="bg-white/80 h-full backdrop-blur-xl rounded-xl md:rounded-3xl shadow-2xl border border-white/20 p-4 md:p-8 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>

                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="space-y-6 relative z-10"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData?.name}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField("")}
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                                focusedField === "name"
                                  ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                  : "border-gray-200 hover:border-gray-300"
                              } focus:outline-none`}
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              focusedField === "email"
                                ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                : "border-gray-200 hover:border-gray-300"
                            } focus:outline-none`}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              focusedField === "phone"
                                ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                : "border-gray-200 hover:border-gray-300"
                            } focus:outline-none`}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Event Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("date")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              focusedField === "date"
                                ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                : "border-gray-200 hover:border-gray-300"
                            } focus:outline-none`}
                            placeholder="Select event date"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Time <span className="text-red-500">*</span>
                          </label>
                          <Dropdown
                            className="!w-full "
                            renderToggle={(props, ref) => (
                              <div {...props} ref={ref} className="!w-full">
                                <input
                                  readOnly
                                  type="text"
                                  name="time"
                                  value={formData.time}
                                  onChange={handleInputChange}
                                  onFocus={() => setFocusedField("time")}
                                  onBlur={() => setFocusedField("")}
                                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                                    focusedField === "time"
                                      ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                      : "border-gray-200 hover:border-gray-300"
                                  } focus:outline-none`}
                                  placeholder="Select event time"
                                />
                              </div>
                            )}
                          >
                            <div className="flex flex-col gap-2 h-[300px] overflow-y-auto">
                              {timeSlots.map((item) => (
                                <Dropdown.Item
                                  active={formData.time === item.value}
                                  key={item.id}
                                  onClick={() =>
                                    handleInputChange({
                                      target: {
                                        name: "time",
                                        value: item.value,
                                      },
                                    })
                                  }
                                >
                                  {item.label}
                                </Dropdown.Item>
                              ))}
                            </div>
                          </Dropdown>
                          {/* <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("time")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              focusedField === "time"
                                ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                : "border-gray-200 hover:border-gray-300"
                            } focus:outline-none`}
                            placeholder="Select event time"
                          /> */}
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">
                            Party Persons{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <Dropdown
                            className="!w-full "
                            renderToggle={(props, ref) => (
                              <div {...props} ref={ref} className="!w-full">
                                <input
                                  readOnly
                                  type="text"
                                  name="seats"
                                  value={formData.seats +  (formData.seats && " Persons")}
                                  onChange={handleInputChange}
                                  onFocus={() => setFocusedField("seats")}
                                  onBlur={() => setFocusedField("")}
                                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                                    focusedField === "seats"
                                      ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                      : "border-gray-200 hover:border-gray-300"
                                  } focus:outline-none`}
                                  placeholder="Select party persons"
                                />
                              </div>
                            )}
                          >
                            <div className="flex flex-col gap-2 h-[300px] overflow-y-auto">
                              {partyPersonsData.map((item) => (
                                <Dropdown.Item
                                  key={item.value}
                                  onClick={() =>
                                    handleInputChange({
                                      target: {
                                        name: "seats",
                                        value: item.value,
                                      },
                                    })
                                  }
                                >
                                  {item.label}  
                                </Dropdown.Item>
                              ))}
                            </div>
                          </Dropdown>
                          {/* <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("time")}
                            onBlur={() => setFocusedField("")}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                              focusedField === "time"
                                ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                                : "border-gray-200 hover:border-gray-300"
                            } focus:outline-none`}
                            placeholder="Select event time"
                          /> */}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="other_notes"
                          rows="4"
                          value={formData.other_notes}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("other_notes")}
                          onBlur={() => setFocusedField("")}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                            focusedField === "other_notes"
                              ? "border-softMintGreen shadow-lg shadow-blue-500/25 scale-[1.02]"
                              : "border-gray-200 hover:border-gray-300"
                          } focus:outline-none`}
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        onClick={() => console.log(formData)}
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.date ||
                          !formData.time ||
                          !formData.seats
                        }
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                          formData.name &&
                          formData.email &&
                          formData.phone &&
                          formData.date &&
                          formData.time &&
                          formData.seats
                            ? "bg-gradient-to-r from-softMintGreen to-sageGreen hover:from-softMintGreen/80 hover:to-green-500/80 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {isSubmitted ? (
                          <>
                            <IoCheckmarkCircle size={20} />
                            <span>Message Sent!</span>
                          </>
                        ) : (
                          <>
                            <span>SUBMIT NOW</span>
                            <IoSend size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default FramerModal;
