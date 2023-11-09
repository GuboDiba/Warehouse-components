import React from 'react';
import Radio from '@/app/atoms/radios';

function Radios() {
  return (
    <div>
    <h1 className="text-3xl font-bold mb-4 mt-12">Radios</h1>
    <div>
      <Radio selected={true} label="Selected" />
      <Radio selected={false} label="Unselected" />
    </div>
    </div>
  );
}

export default Radios;
