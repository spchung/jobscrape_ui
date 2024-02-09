import React, { forwardRef, Ref } from 'react';
import * as Form from '@radix-ui/react-form';
import { Job } from '@/shared/models';
import textSearch from '../../api/jobs/text-search.api';


type FormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children'> &{
  setJobResult: (job: Job[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const SearchForm : React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = (
  { 
    setJobResult, 
    setIsLoading,
    ...props 
  },
  ref: Ref<HTMLFormElement>
) => {

  const [formData, setFormData] = React.useState({ title: '', description: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const res = await textSearch({ title, description });
    setJobResult(res);
    setIsLoading(false);
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return(
    <Form.Root ref={ref} {...props} className="w-full px-10" onSubmit={handleSubmit}>
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
        <Form.Control asChild name="title" value={formData.title} onChange={handleChange}>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="question">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
            Description
          </Form.Label>
          <Form.Message className="text-[13px] text-black opacity-[0.8]" match="valueMissing">
            Please enter a job description
          </Form.Message>
        </div>
        <Form.Control asChild name="description" value={formData.description} onChange={handleChange}>
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
  )};

  const ForwardedSearchForm = forwardRef(SearchForm);
  
  export default ForwardedSearchForm;