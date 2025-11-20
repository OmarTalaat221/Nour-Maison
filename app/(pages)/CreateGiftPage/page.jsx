"use client";

import React, { useEffect, useState } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import giftcatds from "../data/giftCards";
import categories from "../data/categories";
import FlipGiftCard from "../../../components/Cards/FlipGiftCard/FlipGiftCard";
import GiftForm from "../../../components/bages/CreateGiftPage/GiftForm";

const CreateGiftPage = () => {
  const [giftData, setGiftData] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const [newGift, setNewGift] = useState({
    amount: "",
    toName: "",
    toEmial: "",
    senderName: "",
    hideName: false,
  });

  useEffect(() => {
    // Check if we're running in the browser
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const urlParams = new URLSearchParams(search);
      const cardId = urlParams.get("card_id");

      if (cardId) {
        // Filter the cards based on the cardId from the URL
        const selectedCard = giftcatds
          .map((item) => item.cards)
          .flat(2)
          .find((card) => Number(card.id) === Number(cardId));
        setGiftData(selectedCard);
      }
    }
  }, []);

  return (
    <div className="gift_cards_page">
      <PagesBanner
        title={giftData?.category}
        slogan={"Luxury, Wrapped in a Card"}
        scrollTo={"gift_form"}
      />
      <div className="flex flex-col lg:flex-row justify-center p-10 mt-10 container mx-auto">
        <FlipGiftCard
          flipped={flipped}
          setFlipped={setFlipped}
          newGiftData={newGift}
          data={giftData}
        />
        <GiftForm
          flipped={flipped}
          setFlipped={setFlipped}
          setNewGift={setNewGift}
          newGift={newGift}
          data={giftData}
        />
      </div>
    </div>
  );
};

export default CreateGiftPage;
