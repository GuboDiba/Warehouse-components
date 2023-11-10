import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface IconsProps {
  state: 'default' | 'hover' | 'active' | 'leading' | 'disabled';
  showIcon?: boolean;
  icon?: string;
  width?: string;
  height?: string;
  rotate?: number;
  className?: string;
  children?: React.ReactNode;
}

const Icons: React.FC<IconsProps> = ({
  state,
  showIcon = false,
  icon = '',
  width = '24px',
  height = '24px',
  rotate = 0,
  className,
  children,
}) => {
  const iconStyles = {
    transform: `rotate(${rotate}deg)`,
    width: width,
    height: height,
  };

  return (
    <div className={`icon-${state}`}>
    {showIcon && (
      <IoIosArrowForward size={24} className={`${className}`} style={iconStyles} />
    )}
    {children}
  </div>
  );
};

export default Icons;
