"use client"
import GiftSection from "./GiftSection";
import giftcards from "./data";
// import giftcards from "../../../data/giftCards";
const GiftCardsContainer = () => {
  return (
    <div
      id='gift_cards_page'
      className='flex flex-col gap-[30px]   mx-0 py-[30px]'
    >
      <div className=' text-[35px]  md:text-[45px] px-2 text-center font-bold text-goldenOrange font-tangerine'>
        A Gift That Speaks Style – Nour Miason Gift Cards"{" "}
      </div>
      <div className='flex flex-col gap-10 '>
        {giftcards.map((category, index) => (
          <GiftSection category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GiftCardsContainer;








