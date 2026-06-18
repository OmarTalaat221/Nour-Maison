import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import OurServices from "../../../components/pages/Home/OurServices/OurServices";
import HappyMoments from "../../../components/pages/HappyMoments/HappyMoments";
import { getPageKeywords } from "../../../lib/seo/keywords";
const OG_IMAGE = `https://res.cloudinary.com/dhebgz7qh/image/upload/v1767451823/ga4mdhcqwbr2sqhdc7os_1_eahl9l.webp`;
export const metadata = {
  title: "Services for Private Events & Gatherings | Nour Maison",
  description: `Host birthdays or corporate events at Nour Maison Milton Keynes—halal-friendly French & Middle Eastern flavours.`,
  keywords: getPageKeywords("services"),

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
        // images={[

        //   "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/t9noktexya7m7o2dtum4_hbidy9.jpg",
        //   "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443801/sdw9jufkrx0onoo2vwfp_wnzcjx.jpg",
        //   "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767443802/kgkdwtofzolvzkb6oyh5_p6m5cg.jpg",
        // ]}

        images={[
          "/videos/booking-home-about.webm",
        ]}
      />

      <div className="" id="services">
        <OurServices />
        {/* <HappyMoments /> */}
      </div>
    </div>
  );
};

export default page;
