import React, {useEffect, useState, useRef} from "react";
import cx from "classnames";
import html2canvas from "html2canvas";
import "./style.scss";
import {motion} from "framer-motion";

const FlipGiftCard = ({data, newGiftData, flipped, setFlipped}) => {
  const cardRef = useRef(null);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);


  const captureCard = async () => {
    if (cardRef.current) {
      const cardElement = cardRef.current.cloneNode(true);
      document.body.appendChild(cardElement); // نحطها في الـ DOM مؤقتًا

      const frontSide = cardElement.querySelector(".card-front");
      const backSide = cardElement.querySelector(".card2-back");

      if (frontSide && backSide) {
        try {
          const frontCanvas = await html2canvas(frontSide, {useCORS: true});
          setFrontImage(frontCanvas.toDataURL("image/png"));

          const backCanvas = await html2canvas(backSide, {useCORS: true});
          setBackImage(backCanvas.toDataURL("image/png"));
        } catch (error) {
          console.error("Error capturing images:", error);
        }
      }

      document.body.removeChild(cardElement); // نمسح العنصر بعد الالتقاط
    }
  };
  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <div
        
          className='flex justify-center'
        >
        </div>
          <motion.div
            whileHover={{scale: 1.09}}
            onClick={() => setFlipped(!flipped)}
            className={cx("flip_card", {"flipped": flipped})}
            ref={cardRef}
          >
            <div className='card-inner'>
              {/* Front Side */}
              <div className='card-front flex items-center justify-center   bg-white'>
                <img
                  loading="lazy"
                  src={data?.image}
                  alt='Front'
                  className='w-full h-full object-fill'
                  crossOrigin='anonymous'
                />
              </div>

              {/* Back Side */}
              <div
                className='card-back'
                style={{
                  backgroundImage: `url(${data?.backImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "",
                }}
              >
                <div className='overlay bg-transparent  flex   flex-col gap-4 p-3  md:pt-12'>
                  {!data?.price ? (
                    newGiftData.amount && (
                      <h2 className='mx-auto font-tangerine text-8xl'>
                        &#163;
                        {newGiftData?.amount}
                      </h2>
                    )
                  ) : (
                    <h2 className='mx-auto font-tangerine text-5xl md:text-8xl'>
                      &#163;
                      {data?.price}
                    </h2>
                  )}
                  <h5 className='font-tangerine font-bold text-4xl md:text-5xl mx-auto text-center'>
                    {newGiftData?.toName}
                  </h5>
                  {newGiftData?.hideName
                    ? null
                    : newGiftData.senderName && (
                        <div className=' mt-auto flex items-center flex-row gap-3 w-fit bg-[#10101043] px-5 rounded-lg'>
                          <label
                            htmlFor=''
                            className='font-oswald m-0 text-sm mx-auto'
                          >
                            From
                          </label>
                          <h5 className='m-0 font-tangerine text-3xl md:!text-4xl'>
                            {newGiftData.senderName}
                          </h5>
                        </div>
                      )}
                </div>
              </div>
            </div>
          </motion.div>

        {/* <div className='card-inner'>
          <div className='card-front flex items-center justify-center w-[300px] h-[400px] bg-white'>
            <img
              src={data?.image}
              alt='Front'
              className='w-full h-full object-cover'
              crossOrigin='anonymous'
            />
          </div>

          <div
            className='card2-back relative h-[200px] '
            style={{
              backgroundImage: `url(${data?.backImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "",
              width: "550px",
              height: "350px",
            }}
          >
            <div className='overlay bg-transparent  flex text-white   flex-col gap-4 p-3  pt-12'>
              {!data?.price ? (
                newGiftData.amount && (
                  <h2 className='mx-auto font-tangerine text-8xl'>
                    &#163;
                    {newGiftData?.amount}
                  </h2>
                )
              ) : (
                <h2 className='mx-auto font-tangerine text-8xl'>
                  &#163;
                  {data?.price}
                </h2>
              )}
              <h5 className='font-tangerine font-bold text-5xl mx-auto text-center'>
                {newGiftData?.toName}
              </h5>
              {newGiftData?.hideName
                ? null
                : newGiftData.senderName && (
                    <div className=' mt-auto flex items-center flex-row gap-3 w-fit bg-[#10101043] px-5 rounded-lg'>
                      <label
                        htmlFor=''
                        className='font-oswald m-0 text-sm mx-auto'
                      >
                        From
                      </label>
                      <h5 className='m-0 font-tangerine text-4xl'>
                        {newGiftData.senderName}
                      </h5>
                    </div>
                  )}
            </div>
          </div>
        </div> */}

        {/* Button to Capture */}
        {/* <button
          onClick={captureCard}
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >
          تحميل الصورتين
        </button> */}

        {/* Show Images after Capture */}
        {frontImage && backImage && (
          ""
          // <div className='flex flex-col items-center gap-4'>
          //   <div>
          //     <h3>الصورة الأمامية</h3>
          //     <img src={frontImage} alt='Front Card' className='w-64 h-auto' />
          //     <a
          //       href={frontImage}
          //       download='front-card.png'
          //       className='block text-blue-600'
          //     >
          //       تحميل
          //     </a>
          //   </div>
          //   <div>
          //     <h3>الصورة الخلفية</h3>
          //     <img src={backImage} alt='Back Card' className='w-64 h-auto' />
          //     <a
          //       href={backImage}
          //       download='back-card.png'
          //       className='block text-blue-600'
          //     >
          //       تحميل
          //     </a>
          //   </div>
          // </div>
        )}
      </div>
    </>
  );
};

export default FlipGiftCard;
