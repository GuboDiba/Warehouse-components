import React from 'react';

interface RadioProps {
  selected: boolean;
  label: string;
}

const Radio: React.FC<RadioProps> = ({ selected, label }) => {
  return (
    <label>
      <input type="radio" checked={selected} disabled />
      {label}
    </label>
  );
};

export default Radio;
