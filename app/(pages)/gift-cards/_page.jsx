import GiftCardsPage from "./GiftCardsPage";
import { getPageKeywords } from "../../../lib/seo/keywords";

export const metadata = {
  title: "Gift Cards | Nour Maison Milton Keynes",
  description:
    "Give the gift of halal French and Middle Eastern dining with Nour Maison gift cards in Milton Keynes. Perfect for birthdays, anniversaries and special occasions.",
  keywords: getPageKeywords("giftCards"),
  alternates: {
    canonical: "https://www.nourmaison.co.uk/gift-cards",
  },
};

export default function Page() {
  return <GiftCardsPage />;
}