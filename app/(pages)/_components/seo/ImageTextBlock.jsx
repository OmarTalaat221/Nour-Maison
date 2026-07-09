import Image from "next/image";

const ImageTextBlock = ({
  eyebrow,
  heading,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
  id,
  imagePosition = "center center",
}) => {
  return (
    <section
      id={id}
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-4 py-10 sm:py-14 md:py-20 relative z-10"
    >
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center`}
      >
        <div className="w-full lg:w-1/2">
          <div className="nm-image-frame relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              loading="lazy"
              sizes="(max-width: 1024px) 95vw, 50vw"
              quality={80}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {eyebrow && (
            <p className="font-pacifico text-goldenOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">
              {eyebrow}
            </p>
          )}

          {heading && (
            <h2 className="font-seasons text-softMintGreen text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6 leading-tight tracking-wide">
              {heading}
            </h2>
          )}

          <div
            className={`decorative-line mb-4 sm:mb-5 ${
              reverse ? "lg:ml-0 lg:mr-auto" : "lg:mr-0 lg:ml-0"
            }`}
            style={{ margin: "0 auto 1.25rem" }}
          />

          <div className="font-playfair text-logoGold text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
            {typeof text === "string" ? <p>{text}</p> : text}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextBlock;
