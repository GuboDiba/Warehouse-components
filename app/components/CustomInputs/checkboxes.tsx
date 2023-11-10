import React from 'react';
import Checkbox from '@/app/atoms/checkboxes';

const Checkboxes = () => (
    <div>
        <h1 className="text-3xl font-bold mb-4 mt-12 ml-28">Checkboxes</h1>
  <div className='mt-12 ml-32'>
    <Checkbox checked={true} label="Checked" />
    <Checkbox checked={false} label="Unchecked" />
  </div>
  </div>
);

export default Checkboxes;
