import React, { createContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './FeatureJob.css'
import JobDetails from '../JobDetails/JobDetails';


const FeatureJob = ({featuredjob}) => {
    const {_id, company_logo,company_name, location,job_title, remote, Salary } = featuredjob;
    console.log(featuredjob)

    const [newJobShow, setnewJobShow] = useState([]);

    const handleViewDetails = id =>{
        
    }

    return (
        <div>
            <div className='featuresJob-container'>
                <div className='img-details-btn'>
                    <img src={company_logo} alt="" />
                    {/* <JobDetailContext.Provider> */}
                    <JobDetails featuredjob={featuredjob} handleViewDetails={handleViewDetails}>
                    </JobDetails>
                    
                    {/* </JobDetailContext.Provider> */}
                    
                </div>
                <div className='feature-writing-part'>
                    <p style={{fontWeight:'600', fontSize:'20px'}}>{job_title}</p>
                    <p>{company_name}</p>
                    <div className='remote-container'>
                        <button>{remote}Onsite</button>
                        <button>{remote}Fulltime</button>
                    </div>
                    <div className='icon-dollar-salary'>
                        <FontAwesomeIcon icon={faLocation} /><p>{location}</p>
                        <FontAwesomeIcon icon={faDollarSign} /><p>{Salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;