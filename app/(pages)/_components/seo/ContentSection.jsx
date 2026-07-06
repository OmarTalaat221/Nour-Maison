const ContentSection = ({
  heading,
  children,
  id,
  centered = true,
  headingColor = "text-softMintGreen",
}) => {
  return (
    <section
      id={id}
      className={`w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-14 ${centered ? "text-center" : ""}`}
    >
      {heading && (
        <h2
          className={`font-seasons ${headingColor} text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 leading-snug`}
        >
          {heading}
        </h2>
      )}
      <div className="font-playfair text-whiteGray text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
