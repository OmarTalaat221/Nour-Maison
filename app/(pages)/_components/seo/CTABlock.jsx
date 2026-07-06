import Link from "next/link";

const CTABlock = ({
  eyebrow,
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "gold",
}) => {
  const cardClass = `${variant}-glass-card`;

  const textStyles = {
    mint: {
      eyebrow: "text-dairyCream",
      heading: "text-white",
      desc: "text-white",
      dividerColor: "text-dairyCream",
      primary:
        "bg-white/95 hover:bg-logoGold text-softMintGreen hover:!text-white",
      secondary: "border-white text-white hover:bg-logoGold hover:!text-white",
    },
    gold: {
      eyebrow: "text-dairyCream",
      heading: "text-white",
      desc: "text-dairyCream",
      dividerColor: "text-white",
      primary: "bg-white/95 hover:bg-white text-goldenOrange",
      secondary:
        "border-white text-white hover:bg-white hover:text-goldenOrange",
    },
    cream: {
      eyebrow: "text-goldenOrange",
      heading: "text-softMintGreen",
      desc: "text-logoGold",
      dividerColor: "text-goldenOrange",
      primary: "bg-softMintGreen hover:bg-sageGreen text-white",
      secondary:
        "border-goldenOrange text-goldenOrange hover:bg-goldenOrange hover:text-white",
    },
  };

  const styles = textStyles[variant];

  return (
    <section
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-20 relative z-10"
      aria-label="Call to action"
    >
      <div
        className={`${cardClass} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 text-center`}
      >
        <div className="relative z-10">
          {eyebrow && (
            <p
              className={`font-pacifico ${styles.eyebrow} text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 drop-shadow-md`}
            >
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2
              className={`font-seasons ${styles.heading} text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight tracking-wide drop-shadow-md`}
            >
              {heading}
            </h2>
          )}

          {description && (
            <div
              className={`font-playfair ${styles.desc} text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose max-w-3xl mx-auto mb-6 sm:mb-8 drop-shadow-sm`}
            >
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                aria-label={primaryCTA.text}
                className={`shimmer-btn inline-block ${styles.primary} font-oswald uppercase tracking-wider text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <span className="relative z-10">{primaryCTA.text}</span>
              </Link>
            )}

            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                aria-label={secondaryCTA.text}
                className={`inline-block border-2 ${styles.secondary} font-oswald uppercase tracking-wider text-sm sm:text-base md:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105`}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
