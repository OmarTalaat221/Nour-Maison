import React from "react";

const TimeCard = () => {
  return (
    <section className='bg-softMintGreen w-[400px] p-4'>
      <div className='w-full h-full border-2 border-goldenOrange p-3 !border-double '>
        <h3 className='font-tangerine text-white text-center text-4xl '>
          {" "}
          Check Availability
        </h3>
        <h2 className='font-oswald text-white text-center text-2xl '>
          Opening Times
        </h2>
      </div>
    </section>
  );
};

export default TimeCard;
