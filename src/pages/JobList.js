import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/jobs') // Ensure this matches your backend route
      .then((response) => {
        setJobs(response.data); // Assuming the response is an array of jobs
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching jobs!', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>Posted on: {job.posted_date}</p>
            <p>Sector: {job.sector}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListing;
