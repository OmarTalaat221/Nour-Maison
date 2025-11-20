"use client";
import styled, { css, keyframes, shouldForwardProp } from "styled-components";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";

const MasonryCard = ({ data }) => {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false);

  useEffect(() => {
    if (isCardOpened) {
      document.body.style.overflow = "hidden";
      const cardElement = card.current;
      const isScrollable = cardElement.scrollHeight > cardElement.clientHeight;
      setHasVerticalScroll(isScrollable);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCardOpened]);

  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  return (
    <Fragment>
      <CardParent
        isCardOpened={isCardOpened}
        hasVerticalScroll={hasVerticalScroll}
        layout
        ref={card}
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
        className="masonry-item relative"
      >
        <CardImage
          draggable={"false"}
          isCardOpened={isCardOpened}
          layout="scale"
          src={data.url}
        />

        <MasonryData isCardOpened={isCardOpened}
         className="rounded-[8px]"
         
         >
          <div className="mt-auto">
            <CardHeader
              isCardOpened={isCardOpened}
              layout="position"
              className="font-bold text-[18px]"
            >
              {data.title}
            </CardHeader>
            <CardSubtitle
              isCardOpened={isCardOpened}
              layout="position"
              className="text-[12px]"
            >
              {data.subtitle}
            </CardSubtitle>
          </div>
          {isCardOpened && (
            <CardDescription
              isCardOpened={isCardOpened}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardDescription>
          )}
        </MasonryData>
      </CardParent>

      {isCardOpened && (
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
  );
};

export default MasonryCard;

const slideInBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CardParent = styled(motion.div).withConfig({
  shouldForwardProp: (prop) =>
    !["isCardOpened", "hasVerticalScroll"].includes(prop),
})`
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.isCardOpened &&
    css`
      border-radius: ${props.hasVerticalScroll ? "10px 0 0 10px" : "10px"};
      height: 550px;
      &:hover .masonry-data {
        animation: none;
      }
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
    `};
`;

const CardHeader = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !["isCardOpened"].includes(prop),
})`
  ${(props) =>
    props.isCardOpened &&
    css`
      color: #dd9933;
      font-size: 35px;
      font-family: "Tangerine", serif;
    `};
`;

const CardSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !["isCardOpened"].includes(prop),
})`
  ${(props) =>
    props.isCardOpened &&
    css`
      color: #445626;
      font-size: 14px;
    `};
`;

const CardDescription = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !["isCardOpened"].includes(prop),
})`
  ${(props) =>
    props.isCardOpened &&
    css`
      color: #afafaf;
      font-size: 12.5px;
    `}
`;

const CardImage = styled(motion.img).withConfig({
  shouldForwardProp: (prop) => !["isCardOpened"].includes(prop),
})`
  width: 100%;
  height: auto;
  user-select: none;

  ${(props) =>
    props.isCardOpened &&
    css`
      height: 100%;
      object-fit: cover;
      border-radius: 0;
      width: 400px !important;
      margin: 10px auto;
    `}
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

const MasonryData = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isCardOpened"].includes(prop),
})`
  &:hover {
    animation: ${slideInBottom} 0.3s both;
  }
  position: absolute;
  bottom: 0;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fff;
  width: 100%;
  opacity: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.34) 0%,
    rgba(0, 0, 0, 0.337) 3.5%,
    rgba(0, 0, 0, 0.325) 7%,
    rgba(0, 0, 0, 0.306) 10.35%,
    rgba(0, 0, 0, 0.286) 13.85%,
    rgba(0, 0, 0, 0.263) 17.35%,
    rgba(0, 0, 0, 0.235) 20.85%,
    rgba(0, 0, 0, 0.21) 24.35%,
    rgba(0, 0, 0, 0.19) 27.85%,
    rgba(0, 0, 0, 0.165) 31.35%,
    rgba(0, 0, 0, 0.145) 34.85%,
    rgba(0, 0, 0, 0.125) 38.35%,
    rgba(0, 0, 0, 0.114) 41.85%,
    rgba(0, 0, 0, 0.1) 45.35% 48.85%,
    rgba(0, 0, 0, 0.1) 52.35%,
    rgba(0, 0, 0, 0.114) 55.85%,
    rgba(0, 0, 0, 0.125) 59.35%,
    rgba(0, 0, 0, 0.145) 62.85%,
    rgba(0, 0, 0, 0.165) 66.35%,
    rgba(0, 0, 0, 0.19) 69.85%,
    rgba(0, 0, 0, 0.21) 73.35%,
    rgba(0, 0, 0, 0.235) 76.85%,
    rgba(0, 0, 0, 0.263) 80.35%,
    rgba(0, 0, 0, 0.286) 83.85%,
    rgba(0, 0, 0, 0.306) 87.35%,
    rgba(0, 0, 0, 0.325) 90.85%,
    rgba(0, 0, 0, 0.337) 94.35%,
    rgba(0, 0, 0, 0.345) 97.85%,
    rgba(0, 0, 0, 0.35) 100%
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
    `}
`;
