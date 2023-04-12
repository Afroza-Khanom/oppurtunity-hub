import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = () => {
    const jobdetails = useLoaderData();
    // console.log(jobdetails)
    
    return (
        <div>
            <header>
                <h1>Job Details</h1>
            </header>
            <div>
                {
                    jobdetails.map(jobdetail => <JobDetail key={jobdetails._id} jobdetail={jobdetail}></JobDetail>)
                }
            </div>

        </div>
    );
};

export default JobDetails;