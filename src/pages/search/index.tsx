import React, { useEffect, useState } from 'react';
import ForwardedSearchForm from '../../components/search/search-form';
import { Job } from '../../shared/models';
import JobCard from '../../components/ui/job-card';
import useRandomJobs from '../..//hooks/use-fetch-random-jobs';
import Spinner from '../../components/loading/full-width-spinner';

const SearchPage: React.FC = () => {
  const randomJobs = useRandomJobs(); // Custom hook to fetch random jobs
  const [jobs, setJobs] = useState<Job[]>(randomJobs); // State to store list of jobs
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setJobs(randomJobs);
    setIsLoading(randomJobs === undefined || randomJobs.length === 0);
  }, [randomJobs]);

  return (
    <div className="min-h-fit lg:min-h-full flex flex-col lg:flex-row justify-between bg-gray-200">
      <section className="lg:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Find Your Dream Job</h2>
        <ForwardedSearchForm setJobResult={setJobs} setIsLoading={setIsLoading}/>
      </section>

      {/* List of Jobs Section */}
      <section className="lg:w-1/2 bg-gray-200 p-8 relative">
        <h2 className="text-2xl font-bold mb-4">Jobs</h2>
          { isLoading && <Spinner text={'Loading jobs...'}/> }
          <ul>
            {jobs.map((job, index) => (
              <li key={index} className='py-2'>
                <JobCard {...job} />
              </li>
            ))}
          </ul>
      </section>
    </div>
  );
};

export default SearchPage;
