
"use client"
import React, {useState} from "react";
import Framer_gallery from "../../../../utils/FramerGallery/FramerGallery";

const EntryDesign_framerGallery = ({images}) => {
  const [openGallery, setOpenGallery] = useState(false);
  return (
      <Framer_gallery
        images={images.map((item) => item.image)}
        open={openGallery}
        start={selectedIndex}
        setOpen={setOpenGallery}
      />
  );
};

export default EntryDesign_framerGallery;
