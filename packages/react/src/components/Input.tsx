import React from 'react';

export interface InputProps {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({ 
  placeholder = '', 
  type = 'text', 
  size = 'small', 
  onChange, 
  value 
}) => {

  const getInputClasses = () => {
    const baseClasses = "rounded font-thin text-white bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 ease-in-out";
    
    const sizeClasses = {
      'small': 'text-sm py-1 px-2',
      'medium': 'text-base py-2 px-3',
      'large': 'text-lg py-3 px-4',
    }[size];

    return `${baseClasses} ${sizeClasses}`;
  };

  return (
      <input 
        type={type} 
        className={getInputClasses()}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
  );
};

export default Input;