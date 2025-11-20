
"use client"
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addOneToCart,
//   addToCart,
//   addToCartWithCount,
//   minusFromCart,
//   removeFromCart,
// } from "../../../redux/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import { cancel_btn } from "../../../Cart/Cart";
import { 
    addOneToCart,
  addToCart,
  addToCartWithCount,
  minusFromCart,
  removeFromCart,

 } from "../../../../redux/cartSlice";


addOneToCart

const Details = ({ data, open, setOpen }) => {
  const cartData = useSelector((state) => state.cart.cart);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedCount, setSelectedCount] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCartWithCount({ ...data, count: selectedCount }));
    setSelectedCount(1);
  };
  const setChangeCount = (type, prod) => {
    if (type == "minus") {
      dispatch(minusFromCart(prod));
    } else {
      dispatch(addOneToCart(prod));
    }
  };
  const handleRemoveFromCart = () => {

    dispatch(removeFromCart(data));
    setSelectedCount(1);
  };

  const changeImage = (src) => {
    document.getElementById("mainImage").src = src;
  };
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (data && data?.images?.length > 0) setSelectedImage(data.images[0]);
  }, [data]);

  const detectCartExistance = () => {
    const isExist = cartData.find((item) => item?.id == data?.id);
    setIsInCart(isExist);
  };

  useEffect(() => {
    if (cartData && data) {
      detectCartExistance();
    }
  }, [cartData, data]);

  // cancel scrolling whe open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
          className="fixed  inset bg-black/50 z-[999999999] top-0 bottom-0 left-0 right-0  flex items-center justify-center  "
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100  lg:w-[70%] max-h-[90vh]  overflow-auto rounded-lg shadow-2xl"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap -mx-4">
                {/* Product Images */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                  <img
                    // src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    src={selectedImage}
                    alt="Product"
                    className="w-full h-[500px] rounded-lg object-contain shadow-md mb-4"
                    id="mainImage"
                  />
                  <div className="flex gap-4 py-4 overflow-x-auto">
                    {data?.images.map((img, i) => {
                      return (
                        <img
                          loading="lazy"
                          key={i}
                          src={img}
                          alt="Thumbnail"
                          className={cx(
                            "size-16 sm:size-20 w-16 sm-20  object-cover  rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300",
                            {"opacity-100 scale-105 ": selectedImage == img}
                          )}
                          onClick={() => setSelectedImage(img)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 px-4">
                  <h2 className=" text-2xl  md:text-3xl font-semibold mb-2 md:font-oswald text-softMintGreen">
                    {data?.name}
                  </h2>
                  <div className="mb-4">
                    <span className="text-2xl font-bold mr-2 text-softMintGreen">
                      &#163;349.99
                    </span>
                    <span className="text-gray-500 line-through">
                      &#163;399.99
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6">
                    Experience premium sound quality and industry-leading noise
                    cancellation with these wireless headphones. Perfect for
                    music lovers and frequent travelers.
                  </p>

                  {/* Color Selection */}

                  {/* Quantity */}

                  {!isInCart && (
                    <div className="mb-6 ">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Quantity:
                      </label>
                      <div className="flex items-center jsu">
                        <button
                          onClick={() => setSelectedCount(selectedCount - 1)}
                          id="decrement-btn"
                          className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span id="counter" className="text-4xl font-bold mx-4">
                          {selectedCount}
                        </span>
                        <button
                          onClick={() => setSelectedCount(selectedCount + 1)}
                          id="increment-btn"
                          className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-softMintGreen hover:bg-softMintGreen"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v12M6 12h12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Buttons */}

                  <span className='text-softMintGreen text-lg  font-pacifico'>
                    Coming Soon...
                    </span>

                  {/* <div className="flex space-x-4 mb-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isInCart) {
                          handleRemoveFromCart();
                          setIsInCart(false);
                        } else {
                          handleAddToCart();
                        }
                      }}
                      className={cx(
                        "bg-softMintGreen flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-softMintGreen focus:outline-none focus:ring-2 focus:bg-softMintGreen focus:ring-offset-2",
                        {
                          "!bg-red-500 !focus:bg-red-500 !focus:ring-red-500":
                            isInCart,
                        }
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      {isInCart ? (
                        <>Remove from Cart {`(${isInCart.count})`}</>
                      ) : (
                        "Add to Cart"
                      )}

                    </button>
                  </div> */}

                  {/* Key Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Industry-leading noise cancellation</li>
                      <li>30-hour battery life</li>
                      <li>Touch sensor controls</li>
                      <li>Speak-to-chat technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setOpen(false)}
            className="absolute top-5 cursor-pointer shadow-lg right-5 bg-white p-2 text-softMintGreen   text-3xl rounded-full"
          >
            {cancel_btn}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Details;
