import { getPageKeywords } from "../../lib/seo/keywords";
import BannerSwiper from "../../components/pages/Home/BannerSwiper/BannerSwiper";
import HomeLazySections from "../../components/pages/Home/HomeLazySections";

export const metadata = {
  title:
    "Reserve Now and Enjoy Halal French and Middle Eastern Dining in Milton Keynes",
  description:
    "Enjoy a unique halal dining experience with French and Middle Eastern flavours in Milton Keynes. Book now for breakfast, dining and afternoon tea.",
  keywords: getPageKeywords("home"),
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header>
        <BannerSwiper />
      </header>

      <HomeLazySections />
    </div>
  );
}
