"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaOpencart } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export const cancel_btn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
    ></path>
  </svg>
);

export const TrashIcon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
  >
    <g fill="currentColor">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
    </g>
  </svg>
);

import cx from "classnames";

import { useDispatch, useSelector } from "react-redux";
import {
  addOneToCart,
  minusFromCart,
  removeFromCart,
} from "../../redux/cartSlice";
import NumberStepper from "../../utils/NumberStepper/NumberStepper";
import { useRouter } from "next/navigation";

const Cart = ({ openCart, setOpenCart }) => {
  const router = useRouter();

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openCart]);

  const cartData = useSelector((state) => state.cart.cart);



  const dispatch = useDispatch();

  const setChangeCount = (type, prod) => {
    if (type == "minus") {
      dispatch(minusFromCart(prod));
    } else {
      dispatch(addOneToCart(prod));
    }
  };

  const handleRemoveFromCart = (prod) => {
    dispatch(removeFromCart(prod));
  };

  const [swipeDirection, setSwipeDirection] = useState("100%");

  const DELETE_BTN_WIDTH = 200;

  const handleSwipeToDelete = (info, prod) => {
    const dragDistance = info.offset.x;
    if (dragDistance > DELETE_BTN_WIDTH) {
      handleRemoveFromCart(prod);
    }
  };

  const navigate = (path) => {
    router.push(path);
  };

  const [clientRendered, setClientRendered] = useState(false);

  // Ensuring code runs only after the component is mounted on the client
  useEffect(() => {
    setClientRendered(true);
  }, []);

  // Only render cart content after the client is rendered
  if (!clientRendered) return null;

  return (
    <div
      className={cx("cart_container overflow-hidden relative", {
        open: openCart,
      })}
      onClick={(e) => {
        e.stopPropagation();
        setOpenCart(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="cart_contnet  shadow-lg"
      >
        <div className="w-full h-[calc(100%-165px)] overflow-auto overflow-x-hidden  ">
          <div className="p-3">
            <div className="cart_header">
              {cartData?.length > 0 && (
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dkc5klynm/image/upload/v1737892997/NOUR--_pltc7r.png"
                  alt="Nour maison logo white"
                  className="w-[60px]"
                />
              )}
              {openCart ? (
                <div
                  className="close_btn_cart open   "
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCart(false);
                  }}
                >
                  {cancel_btn}
                </div>
              ) : (
                <div
                  className="close_btn_cart p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCart(true);
                  }}
                >
                  {<FaOpencart />}

                  <div className="shrink-0 rounded-full absolute bottom-0 right-0 bg-yellow-500 px-2 w-fit h-fit font-mono text-sm font-medium tracking-tight text-white">
                    {cartData?.length || 0}
                  </div>
                </div>
              )}
            </div>

            <div className="cart_prods">
              <AnimatePresence>
                {cartData?.map((prod) => {
                  return (
                    <motion.div
                      key={prod.id}
                      className="cart_prod shadow-lg border-bottom border-light"
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: swipeDirection }}
                      transition={{ duration: 0.3 }}
                      layout
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      // dragConstraints={{ left: -200, right: 200 }}
                      onDragEnd={(_, info) => handleSwipeToDelete(info, prod)}
                      // whileDrag={{scale: 0.95}}
                    >
                      <div className="prod_image">
                        <img loading="lazy" src={prod.images[0]} alt={ `product-cart-${prod.id}` } />
                      </div>
                      <div className="prod_data flex-grow flex flex-col justify-between">
                        <h6 className="text-white  m-0 font-oswald font-normal ">
                          {prod.name}
                        </h6>
                        <h6 className="text-white m-0 font-normal ">
                          Quantity: {prod.count || 1}
                        </h6>
                        <NumberStepper
                          value={prod?.count}
                          onChange={(type) => setChangeCount(type, prod)}
                        />
                      </div>
                      <div className="flex flex-col gap-5 justify-between items-end">
                        <div
                          onClick={() => handleRemoveFromCart(prod)}
                          className="bg-light text-2xl text-white cursor-pointer"
                        >
                          {<IoClose />}
                        </div>
                        <h6 className="text-goldenOrange font-oswald text-xl !font-normal">
                          &#163;{prod.price}
                        </h6>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {cartData && cartData.length < 1 && (
              <motion.div className="flex justify-center items-center flex-col gap-11 h-full">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dkc5klynm/image/upload/v1737892997/NOUR--_pltc7r.png"
                  alt="nour maison logo white"
                  className="w-[100px]"
                />
                <p className="!text-white font-tangerine text-center text-5xl">
                  Add some products in the cart
                </p>
              </motion.div>
            )}
          </div>
        </div>
        {cartData.length > 0 && (
          <div className="checkout_content h-[140px] sm:h-[160px] w-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-goldenOrange  text-2xl sm:text-3xl font-oswald">
                Subtotal:
              </p>
              <p className="text-goldenOrange text-2xl sm:text-3xl font-oswald">
                &#163;
                {cartData?.reduce(
                  (acc, curr) => acc + curr.price * curr.count,
                  0
                )}
              </p>
            </div>
            <button
              onClick={() => {
                setOpenCart(false);
                navigate("/shipping-cart");
              }}
              className="w-full select-none py-2 sm:py-3 bg-white rounded-lg text-softMintGreen font-bold font-oswald tracking-wider  text-lg sm:text-xl"
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
