import CreateGiftPage from "./CreateGiftPage";
import { getPageKeywords } from "../../../lib/seo/keywords";

export const metadata = {
  title: "Create Gift Card | Nour Maison",
  description:
    "Create and send a personalised Nour Maison gift card for halal dining, brunch, afternoon tea and special occasions in Milton Keynes.",
  keywords: getPageKeywords("createGiftPage"),
};

export default function Page() {
  return <CreateGiftPage />;
}