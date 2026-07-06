"use client";

import { motion } from "framer-motion";
import "./style.scss";

const FlipGiftCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col items-center gap-5 lg:sticky lg:top-28 w-full">
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flip_card w-full cursor-default select-none shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="card-inner">
          <div className="card-front flex items-center justify-center bg-white">
            <img
              loading="lazy"
              src={data?.image}
              alt={data?.category || "Gift Card"}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </motion.div>

      {/* Info Row */}
      <div className="flex flex-col items-center gap-3">
        {data?.category && (
          <p className="font-oswald text-softMintGreen text-base uppercase tracking-[0.2em]">
            {data.category}
          </p>
        )}

        {data?.price && (
          <div className="bg-logoGold text-white font-oswald font-bold text-xl px-8 py-2 rounded-full shadow-md tracking-wider">
            £{data.price}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipGiftCard;
