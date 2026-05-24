import React, { memo } from "react";
import InstagramFeedCard from "./instagram_feed_card";

const InstagramFeedsClient = ({ feeds }) => {
  return (
    <div className="flex gap-3 md:gap-5 flex-wrap justify-center">
      {feeds.map((item, index) => (
        <InstagramFeedCard
          key={`${item.link}-${index}`}
          data={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default memo(InstagramFeedsClient);
