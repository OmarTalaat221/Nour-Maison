import React from "react";
import { useRouter } from "next/navigation";
import SolidCheckbox from "./../../../utils/SolidCheckbox/SolidCheckbox";
import toast, { Toaster } from "react-hot-toast";

const GiftForm = ({ setNewGift, newGift, data, flipped, setFlipped }) => {
  const router = useRouter();

  const onAmountChange = (amount) => {
    if (amount < 0) return;
    setNewGift({ ...newGift, amount: amount });
    setFlipped(true);
  };

  const validateForm = () => {
    if (!newGift.amount && !data?.price) {
      toast.error("Please enter a gift amount");
      return false;
    }
    if (!newGift.toName) {
      toast.error("Please enter recipient name");
      return false;
    }
    if (!newGift.toEmail) {
      toast.error("Please enter recipient email");
      return false;
    }
    if (!newGift.senderName) {
      toast.error("Please enter your name");
      return false;
    }
    if (!newGift.senderEmail) {
      toast.error("Please enter your email");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Build checkout URL with query params
    const params = new URLSearchParams({
      amount: data?.price || newGift.amount,
      toName: newGift.toName,
      toEmail: newGift.toEmail,
      senderName: newGift.senderName,
      senderEmail: newGift.senderEmail,
      senderWhats: newGift.senderWhats || "",
      hideName: newGift.hideName,
      cardType: data?.category || "Gift Card",
    });

    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div id="gift_form" className="lg:mx-14 rounded-xl w-full animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate="">
        {/* Amount Field */}
        {!data?.price ? (
          <div data-aos="fade-left" data-aos-once="true">
            <label className="block text-softMintGreen font-oswald text-2xl mb-2">
              Gift Amount
            </label>
            <input
              type="number"
              value={newGift.amount}
              onWheel={(e) => e.target.blur()}
              onChange={(e) => onAmountChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
              placeholder="Enter amount (£)"
              required
            />
          </div>
        ) : (
          <div>
            <label className="block text-softMintGreen font-oswald text-2xl mb-2">
              Gift Amount
            </label>
            <h4 className="text-4xl text-softMintGreen">£{data?.price}</h4>
          </div>
        )}

        {/* Recipient Name */}
        <div data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
          <label className="block text-softMintGreen font-oswald text-2xl mb-2">
            Who are you gifting to?
          </label>
          <input
            type="text"
            value={newGift.toName}
            onChange={(e) => {
              setNewGift({ ...newGift, toName: e.target.value });
              setFlipped(true);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
            placeholder="Recipient Name (*)"
            required
          />
        </div>

        {/* Recipient Email */}
        <div data-aos="fade-left" data-aos-delay="500" data-aos-once="true">
          <input
            type="email"
            value={newGift.toEmail}
            onChange={(e) => {
              setNewGift({ ...newGift, toEmail: e.target.value });
              setFlipped(true);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
            placeholder="Recipient Email (*)"
            required
          />
        </div>

        {/* Recipient WhatsApp */}
        <div data-aos="fade-left" data-aos-delay="600" data-aos-once="true">
          <input
            type="text"
            value={newGift.senderWhats}
            onChange={(e) => {
              setNewGift({ ...newGift, senderWhats: e.target.value });
              setFlipped(true);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
            placeholder="Recipient WhatsApp Number (optional)"
          />
        </div>

        {/* Sender Name */}
        <div data-aos="fade-left" data-aos-delay="700" data-aos-once="true">
          <label className="block text-softMintGreen font-oswald text-2xl mb-2">
            From
          </label>
          <input
            type="text"
            value={newGift.senderName}
            onChange={(e) => {
              setNewGift({ ...newGift, senderName: e.target.value });
              setFlipped(true);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
            placeholder="Your Name (*)"
            required
          />
        </div>

        {/* Sender Email */}
        <div data-aos="fade-left" data-aos-delay="800" data-aos-once="true">
          <input
            type="email"
            value={newGift.senderEmail}
            onChange={(e) => {
              setNewGift({ ...newGift, senderEmail: e.target.value });
              setFlipped(true);
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300"
            placeholder="Your Email (*)"
            required
          />
        </div>

        {/* Hide Name Checkbox */}
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="flex items-center gap-3"
        >
          <SolidCheckbox
            onChange={(e) => {
              setNewGift({ ...newGift, hideName: e.target.checked });
              setFlipped(true);
            }}
          />
          <div className="text-xl font-oswald text-softMintGreen">
            Hide My Name
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          data-aos="fade-up"
          data-aos-once="true"
          className="w-full bg-gradient-to-r from-softMintGreen to-sageGreen text-white py-4 rounded-xl font-semibold text-lg hover:from-sageGreen hover:to-softMintGreen focus:outline-none focus:ring-2 focus:ring-softMintGreen focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
        >
          <span>Proceed to Checkout</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>

        {/* Security Note */}
        <p className="text-center text-sm text-whiteGray">
          🔒 Secure checkout powered by Dojo Payment Gateway
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default GiftForm;
