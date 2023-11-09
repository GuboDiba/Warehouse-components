import React from 'react';
import Button from '@/app/atoms/Largebutton';

const Largebuttons = () => {
  const buttonVariations = [];
  
  for (let i = 1; i <= 24; i++) {
    const type = i % 4 === 1 ? 'primary' : i % 4 === 2 ? 'secondary' : i % 4 === 3 ? 'subtle' : 'text';
    const size = i <= 8 ? 'large' : i <= 16 ? 'medium' : 'small';
    buttonVariations.push({ type, size, text: `Button ${i}` });
  }
  console.log(buttonVariations.length)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Large</h1>
      <div className="grid grid-cols-4 gap-2 mt-12 ml-12">
        {buttonVariations.map((variation, index) => (
          <Button
            key={index}
            type={variation.type}
            size={variation.size}
            className={`border p-4 ${
              index === 0 ? 'bg-blue-500 text-white' :
              index === 1 ? 'bg-red-500 text-white' :
              index === 2 ? 'bg-yellow-500 text-black' :
              'bg-blue-500  text-white' 
            }`}
          >
            {variation.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Largebuttons;
