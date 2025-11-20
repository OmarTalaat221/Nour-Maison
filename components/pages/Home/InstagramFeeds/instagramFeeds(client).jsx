

import React from 'react'
import Instagram_feed_card from './instagram_feed_card';

const InstagramFeedsClient = ({feeds}) => {
  return (
    <div className="flex gap-3 md:gap-5 flex-wrap justify-center">
    {feeds.map((item, index) => {
      return <Instagram_feed_card key={index} data={item} index={index} />;
    })}
  </div>
  )
}

export default InstagramFeedsClient