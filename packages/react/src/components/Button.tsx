import React from 'react';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', size = 'medium', onClick }) => {

  const getButtonClasses = () => {
    const baseClasses = "px-4 py-2 rounded transition-colors duration-200 ease-in-out";
    
    const variantClasses = {
      'primary': `bg-transparent text-white border border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 active:bg-gray-200`,
      'secondary': `bg-white border border-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:bg-gray-200`,
      'tertiary': `bg-transparent text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 active:text-gray-400`,
    }[variant];

    const sizeClasses = {
      'small': 'text-sm',
      'medium': 'text-base',
      'large': 'text-lg',
    }[size];

    return `${baseClasses} ${variantClasses} ${sizeClasses}`;
  };

  return ( 
    <button 
      onClick={onClick}
      className={getButtonClasses()}
    >
      {label}
    </button>
  );
};

export default Button;