import Link from "next/link";
import SectionHeader from "./SectionHeader";

const VARIANT_STYLES = {
  mint: {
    title: "text-dairyCream",
    desc: "text-white",
    cta: "text-dairyCream",
  },
  gold: {
    title: "text-white",
    desc: "text-dairyCream",
    cta: "text-white",
  },
  cream: {
    title: "text-softMintGreen group-hover:text-goldenOrange",
    desc: "text-logoGold",
    cta: "text-goldenOrange group-hover:text-softMintGreen",
  },
};

const InternalLinksGrid = ({
  eyebrow = "Discover",
  heading = "Explore More at Nour Maison",
  links = [],
  defaultVariant = "cream",
}) => {
  return (
    <section
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20 relative z-10"
      aria-label="Related pages"
    >
      <SectionHeader eyebrow={eyebrow} heading={heading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        {links.map((link, index) => {
          const variant = link.variant || defaultVariant;
          const styles = VARIANT_STYLES[variant];
          const cardClass = `${variant}-glass-card`;

          return (
            <Link
              key={index}
              href={link.href}
              className={`${cardClass} group rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 block`}
            >
              <div className="relative z-10">
                <h3
                  className={`font-pacifico ${styles.title} text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 drop-shadow-md transition-colors duration-300`}
                >
                  {link.label}
                </h3>

                {link.description && (
                  <p
                    className={`font-playfair ${styles.desc} text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-sm`}
                  >
                    {link.description}
                  </p>
                )}

                <div
                  className={`mt-3 sm:mt-4 flex items-center gap-2 ${styles.cta} font-oswald uppercase tracking-wider text-xs sm:text-sm transition-colors duration-300`}
                >
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default InternalLinksGrid;
