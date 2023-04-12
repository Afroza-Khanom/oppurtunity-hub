import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './FeatureJob.css'


const FeatureJob = ({featuredjob}) => {
    const {_id, company_logo,company_name, location,job_title, remote, Salary } = featuredjob;
    return (
        <div className='featureJob-container'>
            <div className='img-details-btn'>
            <img src={company_logo} alt="" />
            <button>View Details</button>
            </div>
            <div className='feature-writing-part'>
            <p style={{fontWeight:'600', fontSize:'20px'}}>{job_title}</p>
            <p>{company_name}</p>
            <div>
            <button>{remote}Onsite</button>
            <button>{remote}Fulltime</button>
            </div>
            <div className='icon-dollar-salary'>
            <FontAwesomeIcon icon={faLocation} /><p>{location}</p>
            <FontAwesomeIcon icon={faDollarSign} /><p>{Salary}</p>

            </div>
            </div>
        </div>
    );
};

export default FeatureJob;