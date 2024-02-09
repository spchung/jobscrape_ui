import React, { forwardRef, Ref } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputComponent: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, value, onChange },
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

const ForwardedInputComponent = forwardRef(InputComponent);

export default ForwardedInputComponent;
