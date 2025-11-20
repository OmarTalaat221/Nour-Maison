
"use client"
import React, { useState } from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/cartSlice";
import PaymentSuccessModal from "../../../components/pages/PaymentSuccessModal/PaymentSuccessModal";

const Payment = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const [successModal, setSuccessModal] = useState(false);
  const dispatch = useDispatch();



  const [clientRendered, setClientRendered] = useState(false);

  // Ensuring code runs only after the component is mounted on the client
  React.useEffect(() => {
    setClientRendered(true);
  }, []);

  // Only render cart content after the client is rendered
  if (!clientRendered) return null;




  return (
    <>
      <PagesBanner
        title={"Payment"}
        slogan={
          <p className="text-center">
            A Smooth Checkout for a Tasteful Experience!
          </p>
        }
        scrollTo={"contact"}
      />
      <section
        id="contact"
        className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16"
      >
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-5xl font-semibold font-tangerine    sm:text-6xl text-softMintGreen">
              Easy Payment
            </h2>
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // send data to backend
                  dispatch(clearCart());
                  setSuccessModal(true);
                }}
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6 lg:max-w-xl lg:p-8"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="full_name"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Full name (as displayed on card)*{" "}
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen  "
                      placeholder="Bonnie Green"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen  "
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Phone{" "}
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen  "
                      placeholder="Enter your phone"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Address{" "}
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen  "
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="card-number-input"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Card number*{" "}
                    </label>
                    <input
                      type="text"
                      id="card-number-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen   "
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="card-expiration-input"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Card expiration*{" "}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          className="h-4 w-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        datepicker=""
                        datepicker-format="mm/yy"
                        id="card-expiration-input"
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500      "
                        placeholder="12/23"
                        required=""
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cvv-input"
                      className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 "
                    >
                      CVV*
                    </label>
                    <input
                      type="number"
                      id="cvv-input"
                      aria-describedby="helper-text-explanation"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-softMintGreen  "
                      placeholder="•••"
                      required=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-softMintGreen px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300  "
                >
                  Pay now
                </button>
              </form>
              <div className="mt-6 sticky top-[200px] grow sm:mt-8 lg:mt-0 space-y-4 rounded-lg border-2 border-sageGreen shadow-md bg-white p-4    sm:p-6">
                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6  ">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Original Price:
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        &#163;
                        {cartData
                          ?.reduce(
                            (acc, curr) => acc + curr.price * curr.count,
                            0
                          )
                          .toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Tax:
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        &#163;10
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-2xl font-bold text-softMintGreen ">
                      Total
                    </dt>
                    <dd className="font-bold text-softMintGreen text-2xl ">
                      &#163;
                      {(
                        cartData?.reduce(
                          (acc, curr) => acc + curr.price * curr.count,
                          0
                        ) + 10
                      ).toFixed(2)}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex items-center justify-center gap-8">
                  <img
                    loading="lazy"
                    className="h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="hidden h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="hidden h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
                    alt=""
                  />
                  <img
                    loading="lazy"
                    className="hidden h-8 w-auto "
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-500  sm:mt-8 lg:text-left">
              Payment processed by{" "}
              <a
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline "
              >
                Paddle
              </a>{" "}
              for{" "}
              <a
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline "
              >
                Flowbite LLC
              </a>
              - United States Of America
            </p>
          </div>
        </div>
      </section>
      <PaymentSuccessModal open={successModal} setOpen={setSuccessModal} />
    </>
  );
};

export default Payment;
