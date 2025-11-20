import React from "react";

const Stepper = () => {
  return (
    <div className='p-6 space-y-2 bg-gray-100 text-gray-800'>
      <h3 className='text-base font-semibold'>Step 3: Fill in your Address</h3>
      <div className='flex gap-3'>
        <span className='w-12 h-2 rounded-sm bg-teal-600'></span>
        <span className='w-12 h-2 rounded-sm bg-teal-600'></span>
        <span className='w-12 h-2 rounded-sm bg-slate-800'></span>
        <span className='w-12 h-2 rounded-sm bg-gray-300'></span>
        <span className='w-12 h-2 rounded-sm bg-gray-300'></span>
      </div>
    </div>
  );
};

export default Stepper;
