import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import NourKidsMenuHero from "../../../components/pages/Home/KidsSection";
import { getPageKeywords } from "../../../lib/seo/keywords";

// ✅ استخدم الصورة الجديدة المحسّنة
const OG_IMAGE = "/images/kids-menu-poster.webp";

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk"),

  title: "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
  description: `Nour Maison's Kids Menu: fresh, healthy, and fun meals for children, with kid-sized portions and a family-friendly café atmosphere.`,
  keywords: getPageKeywords("kidsMenu"),

  alternates: {
    canonical: "https://www.nourmaison.co.uk/kids-menu",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.nourmaison.co.uk/kids-menu",
    siteName: "Nour Maison Café",
    title:
      "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
    description:
      "A playful, healthy and delicious kids menu at Nour Maison Café – mini mains, pancakes, waffles, nuggets, juices and more for little foodies.",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Kids Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
    description:
      "Discover Nour Maison's Kids Menu with fun, balanced meals and drinks crafted especially for kids.",
    images: [OG_IMAGE],
  },

  category: "Menu",
};

const KidsMenu = () => {
  const data = [
    {
      item: "On Toast",
      description:
        "Pick your toppings—eggs, beans, sausage, or bacon! It's like a breakfast bash on toast, and you're the boss!",
    },
    {
      item: "Nuggets",
      description:
        "Golden bites of crispy, juicy fun! Perfect for dunking, crunching, and loving!",
    },
    {
      item: "Mini Chicken Milanese",
      description:
        "Crispy chicken made just for little foodies. It's fancy but oh-so-fun!",
    },
    {
      item: "Falafel Bites",
      description:
        "Crunchy, munchy bites of yum! A flavor party in every bite—no disguises, just fun!",
    },
    {
      item: "Pancakes",
      description:
        "Fluffy little clouds of joy! Stack 'em, snack 'em, and lick the plate clean!",
    },
    {
      item: "Waffle",
      description:
        "Crispy, crisscrossed fun with all the sticky, sweet toppings you can handle. Warning: may cause happy dances!",
    },
    {
      item: "Pick Your Fave Juices",
      description: (
        <>
          Apple, Orange, Mango, Pineapple
          <br />
          <span className="text-base md:text-xl text-softMintGreen font-bold">
            Or
          </span>
          <br />
          <span className="bg-black text-white px-4 text-center whitespace-nowrap rounded-full py-1">
            Baby-chino kids hot chocolate topped with cream
          </span>
        </>
      ),
    },
  ];

  const kidsMenuStructuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Nour Maison Kids Menu",
    description:
      "Kids menu at Nour Maison Café featuring fun, healthy, and kid-friendly meals and drinks.",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Kids Mains & Treats",
        hasMenuItem: data.map((item) => ({
          "@type": "MenuItem",
          name: item.item,
          description:
            typeof item.description === "string" ? item.description : undefined,
        })),
      },
    ],
    inLanguage: "en",
  };

  return (
    <div>
      {/* ✅ Banner - الصور المحسّنة */}
      <PagesBanner
        images={[
          "/images/kids-banner.webp",
          "/images/kids-banner-2.webp",
          "/images/kids-banner-3.webp",
        ]}
        slogan={"Where every little bite brings a big smile!"}
        title={"Kids Corner – Nour Maison Kids Menu"}
        scrollTo={"kids-menu"}
      />

      {/* ✅ Hero animation - الفيديو المحسّن */}
      <NourKidsMenuHero
        src="/images/kids-menu-animation.mp4"
        poster="/images/kids-menu-video-poster.webp"
      />

      {/* ✅ Main hero image */}
      <div className="w-full px-10">
        <img
          src="/images/kids-menu-board.webp"
          className="w-full mx-auto mt-5 rounded-3xl shadow-2xl"
          alt="Nour Maison kids menu board with playful food illustrations"
          loading="lazy"
          decoding="async"
        />
      </div>

      <main
        id="kids-menu"
        className="container hidden mx-auto px-4 sm:px-6 lg:px-4 relative py-10"
      >
        <h1 className="sr-only">
          Nour Maison Kids Menu – Healthy and Fun Food for Children in UK
        </h1>

        <section aria-labelledby="kids-menu-heading">
          <div className="relative mb-5 md:mb-10 text-center">
            <img
              src="/images/kids-arrow.webp"
              alt="Decorative arrow pointing to kids menu title"
              className="absolute top-3 md:top-32 left-0"
              loading="lazy"
              decoding="async"
            />
            <img
              className="w-[100px] md:w-[200px] ms-auto md:mx-auto"
              src="/images/nour-gold-logo.webp"
              alt="Nour Maison kids menu badge"
              loading="lazy"
              decoding="async"
            />
            <div
              id="kids-menu-heading"
              className="mx-auto relative z-20 text-center text-3xl md:text-7xl font-pacifico text-softMintGreen font-black my-4"
            >
              Kids Menu
            </div>
            <p className="text-center relative z-20 text-xl font-oswald text-goldenOrange max-w-3xl mx-auto">
              Delicious food and refreshing drinks crafted especially for little
              ones at Nour Maison Café – a cozy, kid-friendly spot for families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.map((item) => (
              <article
                key={item.item}
                className="relative rounded-3xl overflow-hidden shadow-lg"
                itemScope
                itemType="https://schema.org/MenuItem"
              >
                <img
                  src="/images/kids-card-bg.webp"
                  alt={`Nour Maison kids menu item: ${item.item}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col items-center text-center px-[40px] md:px-[80px] lg:px-[130px] py-[60px] md:py-[120px] lg:py-[110px]">
                  <h2
                    className="font-oswald font-bold text-2xl md:text-4xl text-softMintGreen drop-shadow-lg"
                    itemProp="name"
                  >
                    {item.item}
                  </h2>
                  <p
                    className="mt-2 md:mt-4 font-oswald text-sm md:text-lg text-white"
                    itemProp="description"
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(kidsMenuStructuredData),
          }}
        />
      </main>
    </div>
  );
};

export default KidsMenu;