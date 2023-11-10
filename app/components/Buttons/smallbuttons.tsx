import React from 'react';
import Button from '@/app/atoms/Button';


const secondaryButtons = [
  { text: 'Button', className: 'bg-blue-400 hover:bg-blue-800 font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black hover:border-blue-800 text-blue-400 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]  border-2'},
  { text: 'Button', className: 'text-blue-400 hover:text-blue-800 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Button', className: 'text-blue-400 hover:text-blue-800 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  { text: 'Button', className: 'bg-blue-800 hover:bg-blue-400 text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black hover:border-blue-800 text-blue-800 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]  border-2'},
  { text: 'Button', className: 'text-blue-800 hover:text-blue-400 text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Button', className: 'text-blue-800 hover:text-blue-400 text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  { text: 'Button', className: 'bg-blue-500  text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black hover:border-blue-800 text-blue-400 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]  border-2'},
  { text: 'Button', className: 'text-blue-400  text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Button', className: 'text-blue-400  text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  { text: 'Button', className: 'bg-black text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black hover:border-blue-800 text-black font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]  border-2'},
  { text: 'Button', className: 'text-black font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Button', className: 'text-black font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  { text: 'Button', className: 'bg-blue-400 text-white-500 font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black  text-blue-400 font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2'},
  { text: 'Button', className: 'text-blue-400   font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Loading', className: 'text-blue-400  font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },

  { text: 'Button', className: 'bg-blue-300 text-white-500 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] text-white' },
  { text: 'Button', className: 'border-black hover:border-blue-800 text-blue-300 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]  border-2'},
  { text: 'Button', className: 'text-blue-300 font-bold p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px] border-2 border-gray-300' },
  { text: 'Button', className: 'text-blue-300 font-bold  p-[8px, 24px, 8px, 24px] rounded-[40px] w-[120px] h-[40px]' },



]

const Smallbuttons = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ml-28 mt-32">Small</h1>
      <p className='ml-64 space-x-60'> <span>Primary</span> <span>Secondary</span><span>Subtle</span><span>Text</span></p>
      <div className='flex flex-col-12 '>
        <div className="ml-28 flex flex-col space-y-44">
          <p className="flex flex-col space-y-16 mt-16"> <span>Initial</span> <span>Hover</span><span>Focus</span><span>Active</span><span>Loading</span><span>Disabled</span></p>
        </div>


        <div className="grid grid-cols-4 gap-x-32 mt-8 ml-12">
        {secondaryButtons.map((button, index) => (
            <Button key={index} size="small" className={button.className} text={button.text}/>
          ))}

        </div>



      </div>
    </div>
  );
};
export default Smallbuttons;