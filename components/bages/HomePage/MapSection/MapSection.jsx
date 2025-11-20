import React from "react";

const MapSection = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.255263412477!2d-0.7694798765361991!3d52.038663671939005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877018f7b0a551d%3A0x570f7d01f34256a4!2sNour%20Maison%20Brasserie!5e0!3m2!1sen!2seg!4v1737816382863!5m2!1sen!2seg'
      style={{
        width: "90%",
        height: "500px",
        borderRadius: "5px",
      }}
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      className=' !my-20 mx-auto shadow-xl'
    />
  );
};

export default MapSection;
