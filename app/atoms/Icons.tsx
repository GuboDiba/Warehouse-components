import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface IconsProps {
  state: 'default' | 'hover' | 'active' | 'leading' | 'disabled';
  showIcon?: boolean;
  icon?: string;
  rotate?: number;
}

const Icons: React.FC<IconsProps> = ({
  state,
  showIcon = false,
  icon = '',
  rotate = 0,
}) => {
  const iconStyles = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div className={`icon-${state}`}>
      {showIcon && (
      <IoIosArrowForward size={24} color="green" />
      )}
      
    </div>
  );
};

export default Icons;
