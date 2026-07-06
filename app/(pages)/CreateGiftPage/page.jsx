import { Suspense } from "react";
import CreateGiftPageClient from "./_CreateGiftPageClient";

export const metadata = {
  title: "Create Gift Card | Nour Maison",
  description:
    "Create a Nour Maison gift card and send a thoughtful dining experience to someone special.",
};

const CreateGiftPageFallback = () => {
  return (
    <div className="gift_cards_page">
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-4 border-logoGold/30 border-t-logoGold animate-spin" />
      </div>
    </div>
  );
};

export default function CreateGiftPage() {
  return (
    <Suspense fallback={<CreateGiftPageFallback />}>
      <CreateGiftPageClient />
    </Suspense>
  );
}
