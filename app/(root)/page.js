import BannerSwiper from "../../components/pages/Home/BannerSwiper/BannerSwiper";
import HomeLazySections from "../../components/pages/Home/HomeLazySections";

export const metadata = {
  title: "Nour Maison | Halal French & middle eastern Café Restaurant",
  description:
    "Enjoy halal French and Middle Eastern brunch at Nour Maison in Milton Keynes. A cozy café offering pancakes, coffee, and elegant breakfast options.",
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
