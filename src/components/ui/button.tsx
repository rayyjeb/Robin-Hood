// components/ui/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'px-9 h-[44px] font-light flex items-center place-center rounded-full transition-all duration-200';
  
  let variantStyles = '';
  switch (variant) {
    case 'secondary':
      variantStyles = 'bg-gray-600 text-white';
      break;
    case 'outline':
      variantStyles = 'border border-[#CCFF00] text-[#CCFF00] hover:text-[#CCFF00]/80';
      break;
    case 'primary':
    default:
      variantStyles = 'bg-[#CCFF00] text-black';
      break;
  }

  const finalClassName = `${baseStyles} ${variantStyles} ${className}`.trim();

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
