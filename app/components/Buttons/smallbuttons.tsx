import React from 'react';
import Button from '@/app/atoms/Smallbutton';


const Smallbuttons = () => {
  const buttonVariations = [];


  for (let i = 1; i <= 24; i++) {
    const type = i % 4 === 1 ? 'primary' : i % 4 === 2 ? 'secondary' : i % 4 === 3 ? 'subtle' : 'text';
    const size = i <= 8 ? 'large' : i <= 16 ? 'medium' : 'small';
    buttonVariations.push({ type, size, text: `Button ${i}` });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Small</h1>
       <h1></h1>
      <div className="grid grid-cols-4 gap-2 mt-12 ml-12">
        {buttonVariations.map((variation, index) => (
          <Button
            key={index}
            type={variation.type}
            size={variation.size}
            className={`${variation.type === 'primary' ? 'bg-primary' :
                variation.type === 'secondary' ? 'bg-secondary' :
                  variation.type === 'subtle' ? 'bg-subtle' :
                    'bg-text'
              }`}
            // Example of custom styles for each button
            style={
              index === 0
                ? { backgroundColor: 'red', color: 'white' }
                : index === 1
                  ? { backgroundColor: 'blue', color: 'white' }
                  : {}
            }
          >
            {variation.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Smallbuttons;



