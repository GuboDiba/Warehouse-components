import React from 'react';

interface ToggleProps {
  on: boolean;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ on, label }) => {
  return (
    <label>
      <input type="checkbox" checked={on} disabled />
      {label}
    </label>
  );
};

export default Toggle;
