// custom hook
// fetch jobs from the API
import { Job } from '@/shared/models';
import { useEffect, useState } from 'react';
import textSearch from '../api/jobs/text-search.api';

const searches = [
  {
    title: 'Software Engineer',
    description: 'React, Node.js, TypeScript, AWS'
  },
  {
    title: 'Data Scientist',
    description: 'Python, Machine Learning, Data Analysis'
  },
  {
    title: 'Product Manager',
    description: 'Product Management, Agile, Scrum, Kanban'
  },
  {
    title: 'DevOps Engineer',
    description: 'AWS, Docker, Kubernetes, Terraform'
  },
  {
    title: 'Frontend Developer',
    description: 'React, JavaScript, CSS, HTML'
  },
  {
    title: 'UI/UX Designer',
    description: 'Figma, Sketch, Adobe XD, Photoshop'
  }
]

const getRandomInt = (min:number, max:number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const useRandomJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await textSearch(searches[getRandomInt(0, searches.length)]);
      setJobs(res);
    };
    fetchJobs();
  }, []);

  return jobs;
};

export default useRandomJobs;