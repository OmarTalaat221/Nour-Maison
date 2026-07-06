"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import FlipGiftCard from "../../../components/Cards/FlipGiftCard/FlipGiftCard";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import GiftForm from "../../../components/bages/CreateGiftPage/GiftForm";
import giftcatds from "../data/giftCards";

const CreateGiftPage = () => {
  const searchParams = useSearchParams();

  const giftData = useMemo(() => {
    const cardId = searchParams.get("card_id");
    if (!cardId) return null;
    return (
      giftcatds
        .flatMap((item) => item.cards || [])
        .find((card) => Number(card.id) === Number(cardId)) || null
    );
  }, [searchParams]);

  const [newGift, setNewGift] = useState({
    quantity: 1,
    amount: "",
    senderName: "",
    senderEmail: "",
    senderWhats: "",
    hideName: false,
  });

  return (
    <div className="gift_cards_page">
      <PagesBanner
        title={giftData?.category || "Gift Card"}
        slogan={"Luxury, Wrapped in a Card"}
        scrollTo={"gift_form"}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mx-auto">
          {/* Left: Card Preview */}
          <div className="flex justify-center lg:justify-end">
            <FlipGiftCard data={giftData} />
          </div>

          {/* Right: Form */}
          <div className="flex justify-center lg:justify-start">
            <GiftForm
              setNewGift={setNewGift}
              newGift={newGift}
              data={giftData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGiftPage;
