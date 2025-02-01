import React from 'react';

interface ButtonProps {
  text: string;

}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
     
      className='w-[157px] h-[45px]  py-2 bg-[#FB2E86] tracking-[2px] text-white  hover:bg-blue-600 transition-all'
    >
      {text}
    </button>
  );
};

export default Button;
