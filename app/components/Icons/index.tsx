// pages/Buttons.tsx
import React from 'react';
import Icons from '@/app/atoms/Icons';

const Iconss = () => {
  const buttonVariations = [];

  for (let i = 1; i <= 24; i++) {
    const size = i <= 8 ? 'large' : i <= 16 ? 'medium' : 'small';
    buttonVariations.push({ size, text: `Button ${i}` });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-12 ml-12">Icons</h1>
    <div className='grid grid-cols-4 gap-4 mt-12 ml-32'>
      {buttonVariations.map((variation, index) => (
        <Icons
          key={index}
          state="default" 
          size={variation.size}
          text={variation.text}
          showIcon={true} 
          icon="/path/to/icon.png" 
        />
      ))}
    </div>
    </div>
  );
};

export default Iconss;
