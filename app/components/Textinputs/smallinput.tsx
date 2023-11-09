'use client'
import React, { useState } from 'react';
import TextInput from '@/app/atoms/Textinput-small';

const SmallTextInput: React.FC = () => {
  const [inputValues, setInputValues] = useState(Array(16).fill(''));

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-8">Text Inputs</h1>
      <h1 className="text-3xl font-bold mb-4">Inputs-Large</h1>
      <div className='grid grid-cols-2 gap-4 mt-12 ml-32'>
        {inputValues.map((value, index) => (
          <TextInput
            key={index}
            value={value}
            onChange={(newValue) => handleInputChange(index, newValue)}
            placeholder="Phone Number" 
            pattern="[0-9]{10}"
          />
        ))}
      </div>
    </div>
  );
};

export default SmallTextInput;
