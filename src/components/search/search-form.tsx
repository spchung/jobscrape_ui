import  React, { forwardRef } from 'react';
import * as Form from '@radix-ui/react-form';

type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children'> &{
  onSubmit: (searchTerm1: string, searchTerm2: string) => void;
};

const SearchForm = forwardRef<HTMLFormElement>((props, ref) => (
    <Form.Root ref={ref} {...props} className="w-full px-10">
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-primary">Title</Form.Label>
          <Form.Message className="text-[13px] text-red opacity-[0.8]" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="text-[13px] text-black opacity-[0.8]" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="question">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
            Question
          </Form.Label>
          <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border w-full bg-blackA2 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="box-border w-full text-violet11 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  ));
  
  export default SearchForm;