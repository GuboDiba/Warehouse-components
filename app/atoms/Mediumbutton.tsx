// import React from 'react';

// interface ButtonProps {
//   state?: 'initial' | 'hover' | 'focus' | 'active' | 'loading' | 'disabled';
//   showText?: boolean;
//   text?: string;
//   showIcon?: boolean;
//   icon?: string;
//   size: 'medium';
//   children?: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({
//   state,
//   showText = true,
//   text = 'Button',
//   showIcon = false,
//   icon,
//   size = 'medium',
// }) => {
//   const buttonClasses = `button-${size} button-${state}`;

//   return (
//     <button className={`button ${buttonClasses} w-[200px] h-[56px] rounded-[40px] p-[14px, 32px, 14px, 32px] mt-[20px] ml-[46px]`} type="button">
//       {showIcon && icon && <img src={icon} alt="Button Icon" />}
//       {showText && text}
//     </button>
//   );
// };

// export default Button;
