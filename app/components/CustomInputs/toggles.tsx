import React from 'react';
import Toggle from '@/app/atoms/toggle';

function Toggles() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4 mt-12 ml-28">Toggles</h1>
    
    <div className='ml-32'>
      <Toggle on={true} label="On" />
      <Toggle on={false} label="Off" />
    </div>
    </div>
  );
}

export default Toggles;
