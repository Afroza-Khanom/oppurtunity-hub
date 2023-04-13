import React, { useContext } from 'react';
// import { JobDetailContext } from '../FeaturedJobs/FeatureJob';

const JobDetail = ({jobdetail}) => {
    // const {_id, job_description, job_requirement, educational_requirement,contact_info,phone,email, experience } = jobdetail;

    // const job = useContext(JobDetailContext)
    
    console.log(jobdetail)

    return (
        <div>
            <div>
                <p><strong>Job Description:</strong>{job_description}</p>
            </div>
        </div>
    );
};

export default JobDetail;