import Link from "next/link";
import SectionHeader from "./SectionHeader";

const CARD_STYLES = {
  mint: {
    labelDefault: "text-dairyCream",
    valueDefault: "text-white",
    ctaBg: "bg-white/95 hover:bg-white text-softMintGreen",
  },
  gold: {
    labelDefault: "text-white",
    valueDefault: "text-dairyCream",
    ctaBg: "bg-white/95 hover:bg-white text-goldenOrange",
  },
  cream: {
    labelDefault: "text-goldenOrange",
    valueDefault: "text-softMintGreen",
    ctaBg: "bg-softMintGreen hover:bg-sageGreen text-white",
  },
};

// item-level color options (independent of card variant)
const ITEM_COLORS = {
  mint: { label: "text-dairyCream", value: "text-white" },
  gold: { label: "text-goldenOrange", value: "text-dairyCream" },
  cream: { label: "text-dairyCream", value: "text-white" },
  softMint: { label: "text-softMintGreen", value: "text-logoGold" },
  goldenOrange: { label: "text-goldenOrange", value: "text-white" },
  white: { label: "text-white", value: "text-white" },
};

const QuickSummary = ({
  eyebrow = "At a Glance",
  heading = "Everything You Need to Know",
  items = [],
  ctaText,
  ctaLink,
  variant = "gold",
}) => {
  const cardClass = `${variant}-glass-card`;
  const styles = CARD_STYLES[variant];

  return (
    <section
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-16 relative z-10"
      aria-label="Quick overview"
    >
      <SectionHeader eyebrow={eyebrow} heading={heading} />

      <div
        className={`${cardClass} rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 lg:p-10`}
      >
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative z-10">
          {items.map((item, index) => {
            // per-item color override
            const itemColors = item.color ? ITEM_COLORS[item.color] : null;
            const labelClass = itemColors?.label || styles.labelDefault;
            const valueClass = itemColors?.value || styles.valueDefault;

            return (
              <div key={index} className="text-center sm:text-left">
                <dt
                  className={`font-pacifico ${labelClass} text-lg sm:text-xl md:text-2xl mb-1 drop-shadow-md`}
                >
                  {item.label}
                </dt>
                <dd
                  className={`font-playfair ${valueClass} text-sm sm:text-base leading-relaxed drop-shadow-sm`}
                >
                  {item.value}
                </dd>
              </div>
            );
          })}
        </dl>

        {ctaText && ctaLink && (
          <div className="flex justify-center mt-7 sm:mt-9 relative z-10">
            <Link
              href={ctaLink}
              aria-label={ctaText}
              className={`shimmer-btn inline-block ${styles.ctaBg} font-oswald uppercase tracking-wider text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              <span className="relative z-10">{ctaText}</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuickSummary;
