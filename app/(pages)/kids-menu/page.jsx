import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import NourKidsMenuHero from "../../../components/pages/Home/KidsSection";

// ✅ SEO Metadata for Nour Maison Kids Menu
const OG_IMAGE = "/images/kids menu .jpeg"
// لو عندك صورة kids فعلًا على Cloudinary حطها بدل اللي فوق بنفس التحويلة

export const metadata = {
  metadataBase: new URL("https://www.nourmaison.co.uk"),

  title: "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
  description: `Nour Maison’s Kids Menu: fresh, healthy, and fun meals for children, with kid-sized portions and a family-friendly café atmosphere.`,
  keywords: [
    "Nour Maison kids menu",
    "kids menu",
    "family friendly cafe",
    "healthy kids meals",
    "kid friendly cafe",
    "children meals",
    "Milton Keynes kids menu",
    "halal kids menu",
  ],

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
    title: "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
    description:
      "A playful, healthy and delicious kids menu at Nour Maison Café – mini mains, pancakes, waffles, nuggets, juices and more for little foodies.",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE, // ✅ absolute + 1200x630
        width: 1200,
        height: 630,
        alt: "Nour Maison Kids Menu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kids Menu | Nour Maison Café – Healthy & Fun Meals for Little Foodies",
    description:
      "Discover Nour Maison’s Kids Menu with fun, balanced meals and drinks crafted especially for kids.",
    images: [OG_IMAGE],
  },

  category: "Menu",
};

const KidsMenu = () => {
  const data = [
    {
      item: "On Toast",
      description:
        "Pick your toppings—eggs, beans, sausage, or bacon! It’s like a breakfast bash on toast, and you’re the boss!",
    },
    {
      item: "Nuggets",
      description:
        "Golden bites of crispy, juicy fun! Perfect for dunking, crunching, and loving!",
    },
    {
      item: "Mini Chicken Milanese",
      description:
        "Crispy chicken made just for little foodies. It’s fancy but oh-so-fun!",
    },
    {
      item: "Falafel Bites",
      description:
        "Crunchy, munchy bites of yum! A flavor party in every bite—no disguises, just fun!",
    },
    {
      item: "Pancakes",
      description:
        "Fluffy little clouds of joy! Stack ’em, snack ’em, and lick the plate clean!",
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

  // ✅ Basic structured data for SEO (Restaurant + Menu)
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
      {/* 🔹 Banner with strong visual and SEO-friendly title */}
      <PagesBanner
        images={[
          "/images/kids.png",
          "/images/Whisk_e0617739cbe1b4385fb4a9b9cca15b6fdr.jpeg",
          "/images/Whisk_qjy0qwmhftm4edz20soxktotemn5qtl0kjm40sy.jpeg",
        ]}
        slogan={"Where every little bite brings a big smile!"}
        title={"Kids Corner – Nour Maison Kids Menu"}
        scrollTo={"kids-menu"}
      />

      {/* 🎥 Hero kids animation section */}
      <NourKidsMenuHero
        src="/images/Kids_Menu_Animation_Generation.mp4"
        poster="/images/kids menu .jpeg"
      />

      {/* 🖼 Main hero image with descriptive alt for SEO */}
      <div className="w-full px-10">
        <img
          src="/images/2241974483.png"
          className="w-full mx-auto mt-5 rounded-3xl shadow-2xl"
          alt="Nour Maison kids menu board with playful food illustrations"
          loading="lazy"
        />
      </div>

      {/* ✅ Main content – visible on all screens for better SEO */}
      <main
        id="kids-menu"
        className="container hidden mx-auto px-4 sm:px-6 lg:px-4 relative py-10"
      >
        {/* Primary H1 for the page (SEO) */}
        <h1 className="sr-only">
          Nour Maison Kids Menu – Healthy and Fun Food for Children in Egypt
        </h1>

        <section aria-labelledby="kids-menu-heading">
          <div className="relative mb-5 md:mb-10 text-center">
            <img
              src="/images/image-priece-arrow.png"
              alt="Decorative arrow pointing to kids menu title"
              className="absolute top-3 md:top-32 left-0"
              loading="lazy"
            />
            <img
              className="w-[100px] md:w-[200px] ms-auto md:mx-auto"
              src="https://res.cloudinary.com/dhebgz7qh/image/upload/v1767452496/y3replc9wmlnvwb7kjvo_hyo3u3.png"
              alt="Nour Maison kids menu badge"
              loading="lazy"
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

          {/* Grid of kids items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.map((item) => (
              <article
                key={item.item}
                className="relative rounded-3xl overflow-hidden shadow-lg"
                itemScope
                itemType="https://schema.org/MenuItem"
              >
                <img
                  src="/images/Whisk_3ec94f4af6fee939e944ae5f75649288dr.jpg"
                  alt={`Nour Maison kids menu item: ${item.item}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
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

        {/* 🔹 JSON-LD structured data */}
        <script
          type="application/ld+json"
          // لمنع مشاكل الـ hydration
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
