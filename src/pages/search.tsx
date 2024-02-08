import React from 'react';
import SearchBar from '../components/search/search-bar';
import { Job } from '../shared/models';
import { useState } from 'react';


const Search: React.FC = () => {  
  const [jobResult, setJobResult] = useState<Job[]>([]);
  const handleSubmit = async (title: string, description: string) => {
    // Perform your backend POST request here
    console.log(title, description);
    const response = await fetch('http://localhost:8080/v1/search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
        });
    const data = await response.json();
    setJobResult(data);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-red-200 underline">
        Vector Search
      </h1>
      <div>
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <pre>
        {jobResult.map( (job) => job.title+" "+job.url+"\n")}
      </pre>
    </>
  );
};

export default Search;