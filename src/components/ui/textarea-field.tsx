type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>;

const TextareaField: React.FC<TextareaProps & { label: string; errorMessage?: string }> = ({ label, errorMessage, ...textareaProps }) => {
  return (
    <div className="grid mb-[10px]">
      <div className="flex items-baseline justify-between">
        <label className="text-[15px] font-medium leading-[35px] text-primary">{label}</label>
        {errorMessage && <span className="text-[13px] text-red opacity-[0.8]">{errorMessage}</span>}
      </div>
      <textarea
        className="box-border w-full bg-blackA2 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
        {...textareaProps}
      />
    </div>
  );
};

export default TextareaField;
