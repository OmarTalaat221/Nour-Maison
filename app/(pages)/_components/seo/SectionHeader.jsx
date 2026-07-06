const SectionHeader = ({ eyebrow, heading, highlight, description }) => {
  return (
    <div className="text-center mb-8 sm:mb-10 md:mb-14">
      {eyebrow && (
        <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
          {eyebrow}
        </p>
      )}

      {heading && (
        <h2 className="font-seasons text-softMintGreen text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-wide">
          {heading}
          {highlight && (
            <>
              {" "}
              <span className="text-goldenOrange">{highlight}</span>
            </>
          )}
        </h2>
      )}

      {description && (
        <p className="font-playfair text-logoGold text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
