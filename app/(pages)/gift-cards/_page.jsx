"use client";

import React from "react";
import GiftCardsContainer from "../../../components/pages/GiftCardsPage/GiftCardsContainer";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("../../../components/pages/GiftCardsPage/GiftCardsContainer"),
  {
    ssr: false,
    loading: () => <p style={{ color: "gray" }}>Loading component...</p>,
  }
);
const GiftCardsPage = () => {
  return (
    <div className="gift_cards_page">
      <PagesBanner
        title={"Give the Gift of Luxury with Nour Miason"}
        slogan={"Luxury, Wrapped in a Card"}
        scrollTo={"gift_cards_page"}
      />

      <HeavyComponent />
    </div>
  );
};

export default GiftCardsPage;
