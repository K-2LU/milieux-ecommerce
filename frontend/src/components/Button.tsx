import React from 'react';



const Button  = ({ label, children, }:{
  label:string
  children: React.ReactNode;
}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
      {label}
      {/* <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5' /> */}
      {children}
    </button>
  );
};

export default Button;
