import Link from "next/link";

const BreadcrumbTrail = ({ items = [] }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-4 mb-8 relative z-10"
    >
      <ol className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-nour">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-logoGold/60" aria-hidden="true">
                ✦
              </span>
            )}
            {index === items.length - 1 ? (
              <span
                className="text-softMintGreen font-semibold"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-goldenOrange hover:text-softMintGreen transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbTrail;
