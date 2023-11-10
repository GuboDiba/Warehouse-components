import React from 'react';



interface ButtonProps {
  state?: 'initial' | 'hover' | 'focus' | 'active' | 'loading' | 'disabled';
  showText?: boolean;
  text?: string;
  showIcon?: boolean;
  icon?: string;
  size: 'large' | 'medium' | 'small';
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  state,
  showText = true,
  text='',
  showIcon = false,
  icon="",
  size,
  className,
  children,
}) => {
  const buttonClasses = `button-${size} ${state ? `button-${state}` : ''}`;

  return (
    <button className={`button ${buttonClasses} rounded-[40px] mt-[20px] ml-[46px] ${className} ${text}`} type="button">
    {showIcon && icon && <img src={icon} alt="Button Icon" />}
    {showText && text}
    {children}
  </button>
  );
};

export default Button;
