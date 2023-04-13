import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import JobDetail from '../JobDetail/JobDetail';

const JobDetails = ({featuredjob, handleViewDetails}) => {
    // const jobdetails = useLoaderData();
    // console.log(jobdetails)
    // const {_id, company_logo,company_name, location,job_title, remote, Salary } = featuredjob;
    console.log(featuredjob, handleViewDetails)
    
    return (
        <div>
            <Link to='jobdetails'>
                <button onClick={()=>handleViewDetails(_id)} >View Details</button>
                </Link>
            <div>
                {
                    // jobdetails.map(jobdetail => <JobDetail key={jobdetails.id} jobdetail={jobdetail}></JobDetail>)
                }
            </div>

        </div>
    );
};

export default JobDetails;