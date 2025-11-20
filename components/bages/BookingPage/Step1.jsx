import React, {useState} from "react";
import {DatePicker, Input, InputGroup, SelectPicker} from "rsuite";
import {FaRegUserCircle, FaUsers} from "react-icons/fa";
import {MdAccessTimeFilled} from "react-icons/md";
import {TfiEmail} from "react-icons/tfi";
import {CiPhone} from "react-icons/ci";
import AnimButton2 from "../../../utils/AnimButton2/AnimButton2";
import StaggeredDropDown from "./../../../utils/Staggered Dropdown/StaggeredDropdown";

const Step1 = () => {
  const data = [
    "1 Person",
    "2 Persons",
    "3 Persons",
    "4 Persons",
    "5 Persons",
    "6 Persons",
    "7 Persons",
    "8 Persons",
    "9 Persons",
    "10 Persons",
  ].map((item) => ({label: item, value: parseInt(item)}));

  const timeSlots = Array.from({length: 12.5 * 4 + 1}, (_, i) => {
    const hours = Math.floor(i / 4) + 9; // Starts from 9 AM
    const minutes = (i % 4) * 15;
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format

    return {
      id: i + 1,
      label: `${formattedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`,
      value: `${formattedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`,
    };
  });

  const [newbook, setNewbook] = useState({
    seats: "",
  });

  return (
    <div className='mt-20 mx-auto flex flex-col gap-5'>
      <div className='booking_1 grid grid-cols-3 gap-5 container '>
        <div className='flex flex-col gap-3 !w-full'>
          <input
            type='text'
            placeholder='Name'
            className='w-full border border-sageGreen outline-none p-3'
          />
        </div>
        <div className='flex flex-col gap-3 !w-full'>
          <input
            type='text'
            name='email'
            placeholder='Email'
            className='w-full border border-sageGreen outline-none p-3'
          />
        </div>
        <div className='flex flex-col gap-3 !w-full'>
          <input
            type='text'
            name='phone'
            placeholder='Phone'
            className='w-full border border-sageGreen outline-none p-3'
          />
        </div>
        <div className='flex flex-col gap-3 !w-full'>
          <input
            type='date'
            name='email'
            placeholder='Time'
            className='w-full border border-sageGreen outline-none p-3'
          />
        </div>

        <StaggeredDropDown
          onSelect={(e) => setNewbook({...newbook, seats: e})}
          target={
            <>
              <div className='flex flex-col gap-3 !w-full'>
                <input
                  value={newbook.seats.label}
                  readOnly
                  type='text'
                  placeholder='Time'
                  className='w-full border border-sageGreen outline-none p-3'
                />
              </div>
            </>
          }
          data={timeSlots}
        />

        <StaggeredDropDown
          onSelect={(e) => setNewbook({...newbook, seats: e})}
          target={
            <>
              <div className='flex flex-col gap-3 !w-full'>
                <input
                  value={newbook.seats.label}
                  readOnly
                  type='text'
                  placeholder='Seats'
                  className='w-full border border-sageGreen outline-none p-3'
                />
              </div>
            </>
          }
          data={data}
        />
      </div>
      <div className='flex flex-col gap-3 !w-full'>
        <textarea
          rows={5}
          name='email'
          placeholder='Message'
          className='w-full border border-sageGreen outline-none p-3 bg-transparent focus: shadow-lg'
        />
      </div>

      <AnimButton2 text={"Book"} />
    </div>
  );
};

export default Step1;
