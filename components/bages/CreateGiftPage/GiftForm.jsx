import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import SolidCheckbox from "./../../../utils/SolidCheckbox/SolidCheckbox";

// ─── Input Component (inline for cleanliness) ────────────────────────────────
const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative">
    {Icon && (
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-softMintGreen/60 text-lg pointer-events-none" />
    )}
    <input
      {...props}
      className={`w-full ${Icon ? "pl-12" : "pl-4"} pr-4 py-3.5 bg-white border border-gray-200 rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-softMintGreen focus:border-transparent 
                    placeholder:text-gray-400 font-oswald text-gray-700 transition-all duration-200`}
    />
  </div>
);

const GiftForm = ({ setNewGift, newGift, data }) => {
  const router = useRouter();

  // ─── Derived ────────────────────────────────────────────────────────────────
  const unitAmount = Number(data?.price || newGift.amount || 0);
  const quantity = Number(newGift.quantity || 1);
  const totalAmount = unitAmount * quantity;

  // ─── Handlers ───────────────────────────────────────────────────────────────
  const onAmountChange = (value) => {
    if (value === "" || Number(value) >= 0) {
      setNewGift((prev) => ({ ...prev, amount: value }));
    }
  };

  const onQuantityChange = (type) => {
    setNewGift((prev) => {
      const current = Number(prev.quantity || 1);
      return {
        ...prev,
        quantity: type === "minus" ? Math.max(1, current - 1) : current + 1,
      };
    });
  };

  // ─── Validation ─────────────────────────────────────────────────────────────
  const validateForm = () => {
    if (!data?.price && (!newGift.amount || Number(newGift.amount) <= 0)) {
      toast.error("Please enter a valid gift amount");
      return false;
    }
    if (!newGift.senderName?.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!newGift.senderEmail?.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    return true;
  };

  // ─── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const params = new URLSearchParams({
      unitAmount: String(unitAmount),
      quantity: String(quantity),
      totalAmount: String(totalAmount),
      amount: String(totalAmount),
      senderName: newGift.senderName.trim(),
      senderEmail: newGift.senderEmail.trim(),
      senderWhats: newGift.senderWhats?.trim() || "",
      hideName: String(!!newGift.hideName),
      cardType: data?.category || "Gift Card",
      cardId: String(data?.id || ""),
      type: "gift-card",
    });

    router.push(`/checkout?${params.toString()}`);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div id="gift_form" className="w-full lg:ml-10 max-w-xl mx-auto lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* ── Amount Section ─────────────────────────────────────────────── */}
        <section className="space-y-3">
          <h3 className="font-oswald text-softMintGreen text-xl uppercase tracking-wider">
            Gift Amount
          </h3>

          {!data?.price ? (
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-logoGold font-bold text-xl pointer-events-none">
                £
              </span>
              <input
                type="number"
                min="1"
                value={newGift.amount}
                onWheel={(e) => e.target.blur()}
                onChange={(e) => onAmountChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-softMintGreen focus:border-transparent
                           placeholder:text-gray-400 font-oswald text-gray-700 transition-all duration-200"
                placeholder="Enter amount"
              />
            </div>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="font-oswald text-5xl font-bold text-logoGold">
                £{data.price}
              </span>
              <span className="text-whiteGray text-sm font-oswald">/ card</span>
            </div>
          )}
        </section>

        {/* ── Quantity Section ───────────────────────────────────────────── */}
        <section className="space-y-3">
          <h3 className="font-oswald text-softMintGreen text-xl uppercase tracking-wider">
            Quantity
          </h3>

          <div className="flex items-center gap-5 flex-wrap">
            {/* Counter */}
            <div className="inline-flex items-center rounded-full overflow-hidden bg-white border-2 border-softMintGreen shadow-sm">
              <button
                type="button"
                onClick={() => onQuantityChange("minus")}
                disabled={quantity <= 1}
                className="w-11 h-11 flex items-center justify-center text-softMintGreen text-2xl font-bold
                           hover:bg-softMintGreen hover:text-white transition-colors
                           disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent
                           disabled:hover:text-softMintGreen"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <div className="w-14 h-11 flex items-center justify-center font-oswald font-bold text-xl text-softMintGreen select-none">
                {quantity}
              </div>

              <button
                type="button"
                onClick={() => onQuantityChange("plus")}
                className="w-11 h-11 flex items-center justify-center text-softMintGreen text-2xl font-bold
                           hover:bg-softMintGreen hover:text-white transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Total inline */}
            {unitAmount > 0 && (
              <div className="flex items-baseline gap-2">
                <span className="font-oswald text-whiteGray text-sm">
                  Total:
                </span>
                <span className="font-oswald font-bold text-2xl text-logoGold">
                  £{totalAmount.toFixed(2)}
                </span>
                {quantity > 1 && (
                  <span className="font-oswald text-whiteGray text-xs">
                    (£{unitAmount.toFixed(2)} × {quantity})
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div className="h-px bg-gradient-to-r from-transparent via-softMintGreen/30 to-transparent" />

        {/* ── Customer Details ───────────────────────────────────────────── */}
        <section className="space-y-4">
          <div>
            <h3 className="font-oswald text-softMintGreen text-xl uppercase tracking-wider">
              Customer Details
            </h3>
            <p className="text-whiteGray text-sm font-oswald mt-1">
              We&apos;ll send the confirmation to your email
            </p>
          </div>

          <InputField
            icon={HiOutlineUser}
            type="text"
            value={newGift.senderName}
            onChange={(e) =>
              setNewGift((p) => ({ ...p, senderName: e.target.value }))
            }
            placeholder="Full Name *"
          />

          <InputField
            icon={HiOutlineMail}
            type="email"
            value={newGift.senderEmail}
            onChange={(e) =>
              setNewGift((p) => ({ ...p, senderEmail: e.target.value }))
            }
            placeholder="Email Address *"
          />

          <InputField
            icon={FaWhatsapp}
            type="tel"
            value={newGift.senderWhats}
            onChange={(e) =>
              setNewGift((p) => ({ ...p, senderWhats: e.target.value }))
            }
            placeholder="WhatsApp Number (optional)"
          />

          {/* Hide Name */}
          <label className="flex items-center gap-3 cursor-pointer group pt-1">
            <SolidCheckbox
              checked={newGift.hideName}
              onChange={(e) =>
                setNewGift((p) => ({ ...p, hideName: e.target.checked }))
              }
            />
            <span className="text-base font-oswald text-gray-700 group-hover:text-softMintGreen transition-colors">
              Hide my name on the gift card
            </span>
          </label>
        </section>

        {/* ── Submit ─────────────────────────────────────────────────────── */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-softMintGreen to-sageGreen text-white 
                     py-4 rounded-xl font-oswald font-semibold text-lg tracking-wide
                     hover:shadow-xl hover:shadow-softMintGreen/30 hover:from-sageGreen hover:to-softMintGreen
                     focus:outline-none focus:ring-2 focus:ring-softMintGreen focus:ring-offset-2
                     transition-all duration-300 transform hover:-translate-y-0.5
                     flex items-center justify-center gap-2"
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

        <p className="text-center text-xs text-whiteGray font-oswald flex items-center justify-center gap-1.5">
          <span>🔒</span>
          <span>Secure checkout powered by Dojo Payment Gateway</span>
        </p>
      </form>

      <Toaster />
    </div>
  );
};

export default GiftForm;
