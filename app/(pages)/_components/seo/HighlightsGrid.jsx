import { RenderIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

/* ─── Text styles per variant ─── */
const VARIANT_STYLES = {
  mint: {
    icon: "text-dairyCream",
    title: "text-dairyCream",
    desc: "text-white",
  },
  gold: {
    icon: "text-white",
    title: "text-white",
    desc: "text-dairyCream",
  },
  cream: {
    icon: "text-goldenOrange",
    title: "text-softMintGreen",
    desc: "text-logoGold",
  },
};

const HighlightsGrid = ({
  items = [],
  eyebrow = "Why Nour Maison",
  heading = "What Makes Us Different",
  defaultVariant = "mint", // fallback لو item ما حدّدش variant
}) => {
  return (
    <section
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20 relative z-10"
      aria-label="Key features"
    >
      <SectionHeader eyebrow={eyebrow} heading={heading} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {items.map((item, index) => {
          const variant = item.variant || defaultVariant;
          const styles = VARIANT_STYLES[variant];
          const cardClass = `${variant}-glass-card`;

          return (
            <article
              key={index}
              className={`${cardClass} rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 text-center`}
            >
              <div className="relative z-10">
                {item.icon && (
                  <div
                    className={`flex justify-center mb-3 sm:mb-4 ${styles.icon} drop-shadow-md`}
                    aria-hidden="true"
                  >
                    <RenderIcon
                      name={item.icon}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    />
                  </div>
                )}

                <h3
                  className={`font-pacifico ${styles.title} text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 drop-shadow-md`}
                >
                  {item.title}
                </h3>

                <p
                  className={`font-playfair ${styles.desc} text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-sm`}
                >
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsGrid;
