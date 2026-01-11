"use client";
import styled, { css, keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";
import cx from "classnames";
const Portfolio2 = () => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (isCardOpened && selectedCardIndex !== null) {
      document.body.style.overflow = "hidden";
      const cardElement = cardsRef.current[selectedCardIndex];
      if (cardElement) {
        const isScrollable =
          cardElement.scrollHeight > cardElement.clientHeight;
        setHasVerticalScroll(isScrollable);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCardOpened, selectedCardIndex]);

  // const cardData = [
  //   {
  //     title: "Explore Nature",
  //     subtitle: "Discover the beauty of the natural world",
  //     image:
  //       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     title: "Tasty Food",
  //     subtitle: "Delicious meals to try",
  //     image:
  //       "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description:
  //       "Try out our latest gourmet dishes. Fresh, healthy, and made with love.",
  //   },
  //   {
  //     title: "Tech Innovations",
  //     subtitle: "Future is now",
  //     image:
  //       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description:
  //       "Explore the latest in technology and digital transformation.",
  //   },
  //   {
  //     title: "Travel Adventures",
  //     subtitle: "Pack your bags",
  //     image:
  //       "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description:
  //       "See the world. Get lost in the most beautiful destinations.",
  //   },
  //   {
  //     title: "Artistic Expressions",
  //     subtitle: "Creativity unleashed",
  //     image:
  //       "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description: "Art that touches your soul and sparks your imagination.",
  //   },
  //   {
  //     title: "Swimming",
  //     subtitle: "Dive into fun",
  //     image:
  //       "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description: "Feel the freshness of water and the joy of motion.",
  //   },
  //   {
  //     title: "Chess",
  //     subtitle: "Game of strategy",
  //     image:
  //       "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description: "Train your brain and outsmart your opponents.",
  //   },
  //   {
  //     title: "Football",
  //     subtitle: "World's game",
  //     image:
  //       "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description: "Experience the thrill, speed, and emotion of football.",
  //   },
  //   {
  //     title: "Cricket",
  //     subtitle: "Gentleman's sport",
  //     image:
  //       "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //     description: "Celebrate tradition, technique, and teamwork.",
  //   },
  // ];

  const cardData = [
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448117/maqykxobznkum8ygukbv_htaziu.jpg",
      title: "Elegant Dining Table",
      subtitle:
        "A beautifully set table ready to host an unforgettable dining experience.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448110/em1myinhecewatd7a5ih_hecxyp.jpg",
      title: "Cozy Restaurant Ambiance",
      subtitle:
        "A warm, inviting atmosphere perfect for enjoying great food and company.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg",
      title: "Artful Cuisine",
      subtitle:
        "Creative and colorful dishes that are as beautiful as they are delicious.",
    },
    
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg",
      title: "Chef's Special",
      subtitle: "Signature dishes crafted with love by our expert chefs.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "Fresh Ingredients",
      subtitle: "Handpicked, fresh ingredients for every meal we prepare.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
      title: "Perfect Dessert",
      subtitle: "End your meal with a touch of sweetness and style.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
      title: "Refreshing Beverages",
      subtitle: "Chilled drinks to complement your meal on a sunny day.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448117/maqykxobznkum8ygukbv_htaziu.jpg",
      title: "Fine Dining Setup",
      subtitle:
        "Sophistication meets comfort with this elegant table arrangement.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448110/em1myinhecewatd7a5ih_hecxyp.jpg",
      title: "Evening Ambiance",
      subtitle: "Soft lighting and comfortable seating for a relaxed evening.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/xmx5t5xm3uxrjf6ihcdt_upfix4.jpg",
      title: "Culinary Artistry",
      subtitle:
        "Every plate is a masterpiece, crafted with passion and precision.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449920/download_ep8ymt_vpf8jk.jpg",
      title: "Tasting Platter",
      subtitle:
        "A variety of flavors served together to delight your taste buds.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "Garden Fresh Salad",
      subtitle: "Healthy and colorful, made with the freshest ingredients.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
      title: "Delicious Cakes",
      subtitle: "Indulge in our range of handcrafted cakes and pastries.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
      title: "Seasonal Drinks",
      subtitle: "Refreshing beverages perfect for any season.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767448132/zivckxpxoj7eoz3k0fbg_asox1j.jpg",
      title: "Signature Cocktails",
      subtitle: "Sip on our unique cocktails crafted to perfection.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "Vibrant Cuisine",
      subtitle: "Explore flavors that excite and delight in every bite.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "Flavor Explosion",
      subtitle: "A fusion of flavors that brings excitement to the table.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "Farm-to-Table Freshness",
      subtitle: "Locally sourced ingredients brought straight to your plate.",
    },
    {
      url: "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767449936/download_g78upd_vqipj1.jpg",
      title: "The Chef's Touch",
      subtitle: "Every dish reflects the passion and skill of our chefs.",
    },
  ];

  return (
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
      >
        <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-4xl font-bold text-center mb-8">
        The Art of Flavorful Creations

        </h1> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {cardData.map((item, index) => (
              <Fragment key={index}>
                <CardParent
                  ref={(el) => (cardsRef.current[index] = el)}
                  isCardOpened={isCardOpened && selectedCardIndex === index}
                  hasVerticalScroll={hasVerticalScroll}
                  layout
                  className={cx(
                    `relative overflow-hidden rounded-2xl shadow-lg group `,
                    `z-[${index}]`
                  )}
                  onClick={() => {
                    setIsCardOpened(true);
                    setSelectedCardIndex(index);
                    const el = cardsRef.current[index];
                    if (el) {
                      setCardDimensions({
                        width: el.clientWidth,
                        height: el.clientHeight,
                      });
                    }
                  }}
                >
                  <CardImage
                    layout="scale"
                    isCardOpened={isCardOpened && selectedCardIndex === index}
                    draggable={"false"}
                    loading="lazy"
                    src={item.url}
                    alt={item.title}
                    className="!w-full !h-full !object-cover"
                  />
                  <MasonryData
                    isCardOpened={isCardOpened && selectedCardIndex === index}
                    className="rounded-[8px]"
                  >
                    <div className="mt-auto">
                      <CardHeader
                        isCardOpened={
                          isCardOpened && selectedCardIndex === index
                        }
                        layout="position"
                        className=""
                      >
                        {item.title}
                      </CardHeader>
                      <CardSubtitle
                        isCardOpened={
                          isCardOpened && selectedCardIndex === index
                        }
                        layout="position"
                        className="text-white !text-sm"
                      >
                        {item.subtitle}
                      </CardSubtitle>
                    </div>
                    {isCardOpened && selectedCardIndex === index && (
                      <CardDescription
                        isCardOpened
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {/* {item.description} */}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsum suscipit libero beatae officia culpa quam
                        aliquid. Vel, nemo tempore! Iste, dolor labore? Maxime
                        est, animi accusantium quas asperiores error odio?
                      </CardDescription>
                    )}
                  </MasonryData>
                </CardParent>
                {isCardOpened && selectedCardIndex === index && (
                  <Fragment>
                    <div
                      style={{
                        width: cardDimensions.width,
                        height: cardDimensions.height,
                      }}
                    ></div>
                    <CardBackground
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => setIsCardOpened(false)}
                    />
                  </Fragment>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
  );
};

export default Portfolio2;

const slideInBottom = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const CardParent = styled(motion.div)`
  height: 250px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.isCardOpened &&
    css`
      border-radius: ${props.hasVerticalScroll ? "10px 0 0 10px" : "10px"};
      height: calc(100vh - 50px);
      cursor: default;
      width: min(40rem, 95%);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      background: #fff;
      color: #000;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 999999999;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    `};
`;

const CardHeader = styled(motion.h2)`
  font-size: 30px;

  color: white;
  ${(props) =>
    props.isCardOpened &&
    css`
      color: white;
      font-size: 60px;
      font-family: "Tangerine", serif;
      text-shadow: 1px 1px 0px #efefef;
      !text-7xl font-tangerine !text-white;
      font-weight:bold
    `};
`;

const CardSubtitle = styled(motion.p)`
  ${(props) =>
    props.isCardOpened &&
    css`
      color: #white;
      font-size: 14px;
    `};
`;

const CardDescription = styled(motion.p)`
  ${(props) =>
    props.isCardOpened &&
    css`
      color: white;
      font-size: 17.5px;
      line-height: 30px;
    `};
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: auto;
  user-select: none;

  ${(props) =>
    props.isCardOpened &&
    css`
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      width: 90% !important;
      margin: 10px auto;
      box-shadow: 10px 10px 5px 0px rgb(53 53 53 / 75%);
    `};
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9999999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const MasonryData = styled.div`
  &:hover {
    animation: ${slideInBottom} 0.3s both;
  }
  position: absolute;
  bottom: 0;
  height: 100% ;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fff;
  width: 100%;
  opacity: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.337) 3.5%, rgba(0, 0, 0, 0.325) 7%,
    rgba(0, 0, 0, 0.306) 10.35%, rgba(0, 0, 0, 0.286) 13.85%, rgba(0, 0, 0, 0.263) 17.35%,
    rgba(0, 0, 0, 0.235) 20.85%, rgba(0, 0, 0, 0.21) 24.35%, rgba(0, 0, 0, 0.19) 27.85%,
    rgba(0, 0, 0, 0.165) 31.35%, rgba(0, 0, 0, 0.145) 34.85%, rgba(0, 0, 0, 0.125) 38.35%,
    rgba(0, 0, 0, 0.114) 41.85%, rgba(0, 0, 0, 0.1) 45.35%, rgba(0, 0, 0, 0.1) 48.85%,
    rgba(0, 0, 0, 0.114) 55.85%, rgba(0, 0, 0, 0.125) 59.35%, rgba(0, 0, 0, 0.145) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%, rgba(0, 0, 0, 0.19) 69.85%, rgba(0, 0, 0, 0.21) 73.35%,
    rgba(0, 0, 0, 0.235) 76.85%, rgba(0, 0, 0, 0.263) 80.35%, rgba(0, 0, 0, 0.286) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%, rgba(0, 0, 0, 0.325) 90.85%, rgba(0, 0, 0, 0.337) 94.35%,
    rgba(0, 0, 0, 0.345) 97.85%, rgba(0, 0, 0, 0.35) 100%
  );
  ${(props) =>
    props.isCardOpened &&
    css`
      &:hover {
        animation: none !important;
      }
      height: fit-content;
      opacity: 1 !important;
      background-image: none;
      position: relative;
      color: #000 !important;
    `};import { cx } from 'classnames';
import { cx } from 'classnames';

`;
