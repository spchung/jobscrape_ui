// LandingPage.tsx

import React, { useState, useRef } from 'react';
import * as Form from '@radix-ui/react-form';
import ForwardedInputComponent from '../../components/ui/ref-form';
import FormDemo  from '../../components/search/search-form';

const LandingPage: React.FC = () => {
  const [jobs, setJobs] = useState<string[]>([]); // State to store list of jobs
  const [searchQuery, setSearchQuery] = useState({ jobTitle: '', jobDescription: '' }); // State to store search query
  const ref = useRef<HTMLInputElement>(null);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search with searchQuery and update jobs state (dummy implementation)
    // In a real application, you would perform an API call here to fetch jobs based on the search query
    const newJobs = [
      "Software Engineer",
      "Web Developer",
      "Data Analyst",
      "Product Manager",
      "UI/UX Designer",
    ];
    setJobs(newJobs);
  };

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  return (
    <div className="min-h-fit lg:min-h-full flex flex-col lg:flex-row justify-between bg-gray-200">
      {/* Search Form Section */}
      <section className="lg:w-1/2 p-8">
        <button onClick={() => ref.current?.focus()}>
          click
        </button>
        <h2 className="text-2xl font-bold mb-4">Find Your Dream Job</h2>
        {/* Search Form */}
        {/* <FormDemo /> */}
        <ForwardedInputComponent 
          label="Job Title"
          value={searchQuery.jobTitle}
          onChange={(value) => setSearchQuery({ ...searchQuery, jobTitle: value })}
        />
      </section>

      {/* List of Jobs Section */}
      <section className="lg:w-1/2 bg-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Jobs</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index} className="bg-white rounded-md p-4 mb-2">{job}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
