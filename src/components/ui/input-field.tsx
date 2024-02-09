import React from 'react';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'>;

const InputField: React.FC<InputProps & { label: string; errorMessage?: string }> = ({ label, errorMessage, ...inputProps }) => {
  return (
    <div className="grid mb-[10px]">
      <div className="flex items-baseline justify-between">
        <label className="text-[15px] font-medium leading-[35px] text-primary">{label}</label>
        {errorMessage && <span className="text-[13px] text-red opacity-[0.8]">{errorMessage}</span>}
      </div>
      <input
        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
        type="text"
        {...inputProps}
      />
    </div>
  );
};

export default InputField;