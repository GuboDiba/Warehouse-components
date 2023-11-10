// pages/Buttons.tsx
import React from 'react';
import Icons from '@/app/atoms/Icons';

const IconsVariations= [
  { className: 'bg-blue-400 hover:bg-blue-800 font-bold rounded-[80px] text-white ' },
  { className: 'border-black hover:border-blue-800 text-blue-400 font-bold rounded-[80px]  border-2'},
  {  className: 'text-blue-400 hover:text-blue-800 font-bold  rounded-[80px] border-2 border-gray-300' },
  { className: 'text-blue-400 hover:text-blue-800 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  {  className: 'bg-blue-800 hover:bg-blue-400 text-white-500 font-bold   rounded-[80px]  text-white' },
  {  className: 'border-black hover:border-blue-800 text-blue-800 font-bold  rounded-[80px]  border-2'},
  { className: 'text-blue-800 hover:text-blue-400 text-white-500 font-bold  rounded-[80px] border-2 border-gray-300' },
  {  className: 'text-blue-800 hover:text-blue-400 text-white-500 font-bold rounded-[80px]' },

  {  className: 'bg-blue-500  text-white-500 font-bold  rounded-[80px] text-white' },
  {  className: 'border-black hover:border-blue-800 text-blue-400 font-bold  rounded-[80px]  border-2'},
  {  className: 'text-blue-400  text-white-500 font-bold rounded-[80px] border-2 border-gray-300' },
  {  className: 'text-blue-400  text-white-500 font-bold  rounded-[80px]' },

  { className: 'bg-black text-white-500 font-bold  rounded-[80px] text-white' },
  { className: 'border-black hover:border-blue-800 text-black font-bold rounded-[80px]  border-2'},
  {  className: 'text-black font-bold rounded-[80px] border-2 border-gray-300' },
  {  className: 'text-black font-bold  rounded-[80px]' },

  {  className: 'bg-blue-400 text-white-500 font-bold rounded-[80px] text-white' },
  { className: 'border-black  text-blue-400 font-bold rounded-[80px] border-2'},
  {  className: 'text-blue-400   font-bold  rounded-[80px] border-2 border-gray-300' },
  {  className: 'text-blue-400  font-bold rounded-[80px]' },

  {  className: 'bg-blue-300 text-white-500 font-bold  rounded-[80px] text-white' },
  {  className: 'border-black hover:border-blue-800 text-blue-300 font-bold  rounded-[80px] border-2'},
  {  className: 'text-blue-300 font-bold rounded-[80px] border-2 border-gray-300' },
  {className: 'text-blue-300 font-bold  rounded-[80px]' },



]


const Iconss = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-12 ml-28">Icons</h1>
      <p className='ml-72 space-x-60'> <span>Primary</span> <span>Secondary</span></p>
      <div className='flex flex-col-12 '>
      <div className="ml-28 flex flex-col space-y-44">
      <p className="flex flex-col space-y-16 mt-16"> <span>Initial</span> <span>Hover</span><span>Focus</span><span>Active</span><span>Loading</span><span>Disabled</span></p>
      </div>
    <div className='grid grid-cols-4 gap-x-24 gap-y-12 mt-12 ml-32'>
      {IconsVariations.map((icons, index) => (
        <Icons
          key={index}
          state="default" 
          showIcon={true} 
          className={icons.className}
        />
      ))}
    </div>
    </div>


    </div>
  );
};

export default Iconss;
