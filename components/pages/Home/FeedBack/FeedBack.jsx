import "./style.css";

import BranchesImage from "../../../../utils/BranchesImage/BranchesImage";
import FeedBackSwiper from './FeedbackSwiper';
import { reviews } from "../GoogleReviews/data";



const FeedBack = () => {


  return (
    <div className='py-[30px] overflow-hidden relative'>
      <div className='' data-aos='fade-left' data-aos-delay='300'>
        <BranchesImage
          variant={"top-right"}
          parallax={false}
          className={"opacity-30"}
          image='https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737982152/l1m9yrbxe4eqvciznwxl.png'
        />
      </div>
      {/* <BranchesImage variant={"top-left"} parallax={true}  className={"opacity-30 rotate-0"} image="https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737982152/l1m9yrbxe4eqvciznwxl.png"  /> */}

      <div className='w-[85%] m-auto relative z-10'>
        <div className=''>
         

          <div className='flex  flex-col gap-[20px] overflow-hidden'>
            <div className='text-goldenOrange text-center md:text-start text-[25px] md:text-[30px] font-bold font-oswald'>
              Clients Feedbacks
            </div>

            <div className='text-[40px] text-center md:text-start font-oswald font-bold text-softMintGreen'>
            What the Buzz Is About
            </div>
          <FeedBackSwiper />
          </div>
        </div>
      </div>

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.255263412477!2d-0.7694798765361991!3d52.038663671939005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877018f7b0a551d%3A0x570f7d01f34256a4!2sNour%20Maison%20Brasserie!5e0!3m2!1sar!2seg!4v1737816382863!5m2!1sar!2seg"
        width={"100%"}
        height={450}
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      /> */}
    </div>
  );
};

export default FeedBack;
