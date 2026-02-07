import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import OurServices from "../../../components/pages/Home/OurServices/OurServices";
import HappyMoments from "../../../components/pages/HappyMoments/HappyMoments";
const OG_IMAGE = `https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451823/ga4mdhcqwbr2sqhdc7os_1_eahl9l.webp`
export const metadata = {

  title: "Services And Events | Nour Maison – Private Events, Celebrations & Gatherings",
  description:
    "Host your next event at Nour Maison in Milton Keynes — private celebrations, birthdays, corporate gatherings, and special moments with halal-friendly French & Middle Eastern flavors.",

  keywords: [
    "Nour Maison services",
    "Nour Maison events",
    "private events Milton Keynes",
    "birthday venue Milton Keynes",
    "corporate events Milton Keynes",
    "halal catering Milton Keynes",
    "restaurant events venue MK",
    "celebrations at Nour Maison",
    "family events Milton Keynes",
    "Afternoon Tea",
    "Baby Shower",
    "Gender Reveal",
    "Birthday Party",
    "Anniversaries",
    "Special Events",
    "Private Events",
    "Celebrations",

    // Experience & atmosphere
    "Elegant celebration",
    "Beautifully arranged gathering",
    "Magical moment",
    "Warm atmosphere",
    "Stunning decorations",
    "Exciting atmosphere",
    "Fun-filled party",
    "Elegant ambiance",
    "Cozy celebration",

    // Emotions & messaging
    "Cherish forever",
    "Unforgettable memories",
    "Lasting memories",
    "Special milestone",
    "Love and joy",
    "Delightful memories",
    "Feels like love",
    "Tastes like adventure",

    // Family & social
    "Baby celebration",
    "Family gathering",
    "Friends celebration",
    "Little one arrival",
    "Birthday celebration",
    "Couple anniversaries",

    // SEO-friendly use-cases
    "Afternoon tea experience",
    "Baby shower venue",
    "Gender reveal party venue",
    "Birthday party venue",
    "Anniversary celebration venue",
    "Elegant event space",
    "Celebration cafe",
    "Restaurant events",
  ],

  alternates: {
    canonical: "https://www.nourmaison.co.uk/services", // ✅ عدّل لو مسار الصفحة مختلف
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
    url: "https://www.nourmaison.co.uk/services", // ✅ عدّل لو مسار الصفحة مختلف
    siteName: "Nour Maison",
    locale: "en_GB",
    title: "Services | Nour Maison – Private Events, Celebrations & Gatherings",
    description:
      "Private celebrations, birthdays, corporate gatherings, and special moments at Nour Maison in Milton Keynes.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nour Maison Services and celebrations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Nour Maison",
    description:
      "Plan a private event at Nour Maison in Milton Keynes. Halal-friendly dining and a cozy, elegant atmosphere.",
    images: [OG_IMAGE],
  },

  category: "Services",
};

const page = () => {













  return (
    <div>
      <PagesBanner
        title={"Our Events"}
        slogan={"Not Just Coffee – It’s a Feeling."}
        scrollTo={"services"}
        images={[
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
          "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
        ]}
      />

      <div className="" id="services">
        <OurServices />
        <HappyMoments />
      </div>
    </div>
  );
};

export default page;
