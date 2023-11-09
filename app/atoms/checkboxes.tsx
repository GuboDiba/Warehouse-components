import React from 'react';

interface CheckboxProps {
  checked: boolean;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} disabled />
      {label}
    </label>
  );
};

export default Checkbox;
