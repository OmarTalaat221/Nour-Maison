"use client";
import React, { useState } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import NumberStepper from "../../../utils/NumberStepper/NumberStepper";
import { IoClose } from "react-icons/io5";
import {
  addOneToCart,
  minusFromCart,
  removeFromCart,
} from "../../../redux/cartSlice";
import PeopleAlso from "../../../components/pages/ShippingCartPage/PeopleAlso/PeopleAlso";
import BranchesImage from "../../../utils/BranchesImage/BranchesImage";
import { useRouter } from "next/navigation";
import "../../../components/Cart/style.scss";
const ShippingCart = () => {
  const router = useRouter();

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

  const navigate = () => {
    router.push("/shipping-address");
  };

  const products = [
    {
      id: 1,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 20.5,
      original_price: 30.0,
      discount: "20%",
      rating: 4,
      images: [
        "https://f.nooncdn.com/p/v1605009884/N41436259A_1.jpg",
        "https://f.nooncdn.com/p/v1605009883/N41436259A_2.jpg",
        "https://f.nooncdn.com/p/v1605009884/N41436259A_3.jpg",
      ],
    },
    {
      id: 2,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 20.5,
      original_price: 30.0,
      discount: "20%",
      rating: 4,
      images: [
        "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1739871140/pwwv0fl91gfrcdgq85sk.avif",
        "https://f.nooncdn.com/p/v1605009883/N41436259A_2.jpg",
        "https://f.nooncdn.com/p/v1605009884/N41436259A_3.jpg",
      ],
    },
    {
      id: 3,
      name: "Nour Maison GOOD MORNING CUP",
      category: "CUPS",
      price: 20.5,
      original_price: 30.0,
      discount: "20%",
      rating: 4,
      images: [
        "https://f.nooncdn.com/p/v1605009884/N41436259A_1.jpg",
        "https://f.nooncdn.com/p/v1605009883/N41436259A_2.jpg",
        "https://f.nooncdn.com/p/v1605009884/N41436259A_3.jpg",
      ],
    },
  ];

  const [clientRendered, setClientRendered] = useState(false);

  // Ensuring code runs only after the component is mounted on the client
  React.useEffect(() => {
    setClientRendered(true);
  }, []);

  // Only render cart content after the client is rendered
  if (!clientRendered) return null;

  return (
    <main>
      <PagesBanner
        title={"Shipping Cart"}
        // slogan={"Reach!"}
        scrollTo={"shippingCart"}
      />
      <div id="shippingCart">
        {cartData && cartData.length < 1 ? (
          <motion.div className="flex justify-center  items-center flex-col gap-5 sm:gap-11 h-full mt-4">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737983251/y3replc9wmlnvwb7kjvo.png"
              alt="Nour Maison Logo"
              title="NOUR MAISON"

              className=" w-[200px] md:w-[300px]"
            />
            <p className="!text-goldenOrange font-tangerine text-center text-[40px] sm:text-5xl">
              <div className="">Your Cart is empty!</div>
              Add some products in the cart
            </p>
            <BranchesImage />
            <BranchesImage />
            <button
              onClick={() => navigate("/store")}
              className="inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold  transition-all  group text text-white bg-softMintGreen hover:bg-softMintGreen/80  hover:text-white"
            >
              <span
                before="Continue Shopping"
                className="relative py-1.5 transition-transform inline-block before:content-[attr(before)] before:py-1.5 before:absolute before:top-full group-hover:-translate-y-full"
              >
                Continue Shopping
              </span>
            </button>
          </motion.div>
        ) : (
          <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              {/* <h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
              Shopping Cart
            </h2> */}
              <div className=" overflow-visible !relative mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto overflow-visible w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <AnimatePresence>
                        {cartData?.map((prod) => {
                          return (
                            <motion.div
                              key={prod.id}
                              className="cart_prod !bg-white shadow-lg border-2 border-sageGreen !rounded-xl border-bottom border-light"
                              initial={{ opacity: 0, x: "-100%" }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: swipeDirection }} // يستخدم اتجاه السحب هنا
                              transition={{ duration: 0.3 }}
                              layout
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              // dragConstraints={{ left: -200, right: 200 }}
                              onDragEnd={(_, info) =>
                                handleSwipeToDelete(info, prod)
                              }
                              // whileDrag={{scale: 0.95}}
                            >
                              <div className="prod_image">
                                <img
                                  loading="lazy"
                                  src={prod.images[0]}
                                  alt=""
                                />
                              </div>{" "}
                              <div className="prod_data flex-grow flex flex-col justify-between">
                                <h6 className="text-softMintGreen  m-0 font-oswald font-normal ">
                                  {prod.name}
                                </h6>
                                <h6 className="text-softMintGreen m-0 font-normal ">
                                  Quantity: {prod.count || 1}
                                </h6>
                                <NumberStepper
                                  value={prod?.count}
                                  onChange={(type) =>
                                    setChangeCount(type, prod)
                                  }
                                />
                              </div>
                              <div className="flex flex-col gap-5 justify-between items-end">
                                <div
                                  onClick={() => handleRemoveFromCart(prod)}
                                  className="bg-light text-2xl text-red-600 cursor-pointer"
                                >
                                  {<IoClose />}
                                </div>
                                <div className="flex gap-3 items-end">
                                  <h6 className="text-softMintGreen font-oswald text-xl !font-normal">
                                    &#163;{prod?.price}
                                  </h6>
                                  <del className="text-gray-400 font-oswald text-sm !font-normal">
                                    &#163;{prod?.original_price}
                                  </del>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="hidden xl:mt-8 xl:block">
                    <PeopleAlso />
                  </div>
                </div>
                <div className=" sticky top-4  !self-start   mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 rounded-lg border-2 border-sageGreen shadow-md bg-white p-4  dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p className="font-semibold text-softMintGreen text-center font-tangerine  !text-5xl dark:text-white">
                      Order summary
                    </p>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 ">
                            {/*get original price  */}
                            <span>Original Price: </span>
                          </dt>
                          <dd className="text-base font-medium  text-softMintGreen ">
                            &#163;
                            {cartData
                              ?.reduce(
                                (acc, curr) => acc + curr?.price * curr.count,
                                0
                              )
                              .toFixed(2)}
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-gray-500 ">
                            Tax
                          </dt>
                          <dd className="text-base font-medium  text-softMintGreen ">
                            &#163;10
                          </dd>
                        </dl>
                      </div>
                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-2xl font-bold text-softMintGreen dark:text-white">
                          Total
                        </dt>
                        <dd className="font-bold text-softMintGreen text-2xl dark:text-white">
                          &#163;
                          {(
                            cartData?.reduce(
                              (acc, curr) => acc + curr?.price * curr.count,
                              0
                            ) + 10
                          ).toFixed(2)}
                        </dd>
                      </dl>
                    </div>
                    <motion.button
                      onClick={() => navigate("/payment-session")}
                      whileHover={{ scale: 1.05 }}
                      className="flex w-full items-center justify-center rounded-lg bg-softMintGreen px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300 "
                    >
                      Proceed to Checkout
                    </motion.button>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {" "}
                        or{" "}
                      </span>
                      <button
                        onClick={() => navigate("/store")}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 text-softMintGreen hover:underline  "
                      >
                        Continue Shopping
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="voucher"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {" "}
                          Do you have a voucher or gift card?{" "}
                        </label>
                        <input
                          type="text"
                          id="voucher"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <button
                        type="submit"
                        disabled
                        className="flex w-full items-center bg-softMintGreen  justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Apply Code
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ShippingCart;
