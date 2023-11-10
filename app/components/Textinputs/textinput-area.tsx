
'use client'
import React, { useState } from 'react';
import TextInput from '@/app/atoms/Textinput';



const forminputValues = [
  { placeholder:'Phone Number', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center' },
  { placeholder:'Search', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center'},
  { placeholder:'Phone Number',className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center border-2 border-black' },
  { placeholder:'Search', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center border-2 border-black' },

  { placeholder:'Phone Number', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center border-2 border-black' },
  { placeholder:'Search',className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center border-2 border-black'},
  { placeholder:'Phone Number', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center' },
  { placeholder:'Search', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center' },

  {  placeholder:'Phone Number',className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center'},
  { placeholder:'Search', className: 'font-bold  rounded-[16px] w-[325px] h-[64px] text-center'},
  


]
const LargeTextInput: React.FC = () => {
  const [inputValues, setInputValues] = useState(Array(16).fill(''));
  
  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-32 ml-28">Text Input - Text Area</h1>
      <div className='grid grid-cols-2 gap-4 mt-12 ml-32'>
        {forminputValues.map((input, index) => (
          <TextInput
            key={index}
            placeholder={input.placeholder}
            className={input.className} value={''} onChange={function (value: string): void {
              throw new Error('Function not implemented.');
            } }          />
        ))}
      </div>
    </div>
  );
};

export default LargeTextInput;
