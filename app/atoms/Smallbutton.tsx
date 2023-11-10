// import React from 'react';

// interface ButtonProps {
//   state?: 'initial' | 'hover' | 'focus' | 'active' | 'loading' | 'disabled';
//   showText?: boolean;
//   text?: string;
//   showIcon?: boolean;
//   icon?: string;
//   size: 'small';
//   children?: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({
//   state,
//   showText = true,
//   text = 'Button',
//   showIcon = false,
//   icon,
//   size = 'small',
// }) => {
//   const buttonClasses = `button-${size} button-${state}`;

//   return (
//     <button className={`button ${buttonClasses} w-[12px] h-[40px] rounded-[40px] p-[8px, 24px, 8px, 24px] mt-[20px] ml-[46px]`} type="button">
//       {showIcon && icon && <img src={icon} alt="Button Icon" />}
//       {showText && text}
//     </button>
//   );
// };

// export default Button;
