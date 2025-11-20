import React, {useEffect} from "react";
import SolidCheckbox from "./../../../utils/SolidCheckbox/SolidCheckbox";
import useScreenShoot from "../../../Hooks/GeneralHooks/UseScreenshot";
import toast, { Toaster } from "react-hot-toast";

const GiftForm = ({setNewGift, newGift, data, flipped, setFlipped}) => {
  const onAmountChange = (amount) => {
    // if amount is less than zero then dont change
    if (amount < 0) {
      return;
    }
    setNewGift({...newGift, amount: amount});
    setFlipped(true);
  };

  const captureImage = useScreenShoot();

  return (
    <div
      id='gift_form'
      className=' lg:mx-14 rounded-xl    w-full animate-fade-in'
    >
      <form id='registrationForm' className='space-y-6' noValidate=''>
        {!data?.price ? (
          <div data-aos='fade-left' data-aos-once='true'>
            <label className='block text-softMintGreen  font-oswald text-2xl  mb-2'>
              Gift Amount
            </label>
            <input
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-once='true'
              type='number'
              value={newGift.amount}
              onWheel={(e) => e.target.blur()}
              onChange={(e) => onAmountChange(e.target.value)}
              autoComplete='false'
              className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300' 
              placeholder='Enter amount'
              required=''
            />
          </div>
        ) : (
          <div>
            <label className='block text-softMintGreen  font-oswald text-2xl  mb-2'>
              Gift Amount
            </label>
            <h4 className='text-4xl  text-softMintGreen'>
              {" "}
              &#163;
              {data?.price}
            </h4>
          </div>
        )}
        <div data-aos='fade-left' data-aos-delay='400' data-aos-once='true'>
          <label
            htmlFor='email'
            className='block text-softMintGreen  font-oswald text-2xl  mb-2'
          >
            Who are you gifting to?
          </label>
          <input
            data-aos='fade-left'
            data-aos-delay='500'
            data-aos-once='true'
            type='text'
            value={newGift.toName}
            onChange={(e) => {
              setNewGift({...newGift, toName: e.target.value});
              setFlipped(true);
            }}
            className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300'
            placeholder='Recipient Name (*)'
            required=''
          />
        </div>
        <div data-aos='fade-left' data-aos-delay='600' data-aos-once='true'>
          <input
            type='text'
            className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300'
            placeholder='Recipient Email (*)'
            required=''
            value={newGift.toEmail}
            onChange={(e) => {
              setNewGift({...newGift, toEmail: e.target.value});
              setFlipped(true);
            }}
          />
        </div>

        <div data-aos='fade-left' data-aos-delay='900' data-aos-once='true'>
          <input
            type='text'
            className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300'
            placeholder='Recipient Whatsapp number (*)'
            required=''
            value={newGift.senderWhats}
            onChange={(e) => {
              setNewGift({...newGift, senderWhats: e.target.value});
              setFlipped(true);
            }}
          />
        </div>
        <div data-aos='fade-left' data-aos-delay='700' data-aos-once='true'>
          <label
            htmlFor='confirm-password'
            className='block text-softMintGreen  font-oswald text-2xl  mb-2'
          >
            From
          </label>
          <input
            data-aos='fade-left'
            data-aos-delay='800'
            data-aos-once='true'
            type='text'
            className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300'
            placeholder='Sender Name (*)'
            required=''
            value={newGift.senderName}
            onChange={(e) => {
              setNewGift({...newGift, senderName: e.target.value});
              setFlipped(true);
            }}
          />
        </div>
        <div data-aos='fade-left' data-aos-delay='700' data-aos-once='true'>
          <input
            data-aos='fade-left'
            data-aos-delay='800'
            data-aos-once='true'
            type='text'
            className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-softMintGreen transition-all duration-300'
            placeholder='Sender Email (*)'
            required=''
            value={newGift.senderEmail}
            onChange={(e) => {
              setNewGift({...newGift, senderEmail: e.target.value});
              setFlipped(true);
            }}
          />
        </div>

        <div
          data-aos='fade-left'
          data-aos-once='true'
          className=' flex items-center gap-3'
        >
          <SolidCheckbox
            onChange={(e) => {
              setNewGift({...newGift, hideName: e.target.checked});
              setFlipped(true);
            }}
          />
          <div className='text-xl font-oswald text-softMintGreen'>
            Hide My Name
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            // captureImage("gift_form");
            toast.success("Coming Soon!")
          }}
          data-aos='fade-up'
          data-aos-once='true'
          type='submit'
          className='w-full bg-sageGreen text-white py-3 rounded-lg font-semibold hover:bg-softMintGreen focus:outline-none focus:ring-2 focus:ring-softMintGreen focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]'

        >
          Send your Gift
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default GiftForm;
