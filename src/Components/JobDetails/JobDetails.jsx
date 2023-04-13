import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = (id) => {
    const jobdetails = useLoaderData();
    // console.log(jobdetails)
    console.log(id)
    
    return (
        <div>
            <header className='headertag-container'>
                <h1>Job Details</h1>
            </header>
            <div>
                {
                    // jobdetails.map(jobdetail => <JobDetail key={jobdetails.id} jobdetail={jobdetail}></JobDetail>)
                }
            </div>

        </div>
    );
};

export default JobDetails;