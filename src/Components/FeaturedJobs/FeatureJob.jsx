import React, { createContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './FeatureJob.css'



const FeatureJob = ({featuredjob}) => {
    const {_id, company_logo,company_name, location,job_title, remote, Salary} = featuredjob;
    console.log(featuredjob)

    const [newJobShow, setnewJobShow] = useState([]);


    return (
        <div>
            <div className='featuresJob-container'>
                <div className='img-details-btn'>
                    <img src={company_logo} alt="" />
                    {/* <JobDetails featuredjob={featuredjob} >
                    </JobDetails> */}
                
                    
                </div>
                <div className='feature-writing-part'>
                    <p style={{fontWeight:'600', fontSize:'20px'}}>{job_title}</p>
                    <p>{company_name}</p>
                    <div className='remote-container'>
                        {
                            remote ? <button>{remote}Onsite</button> : <button>{remote}Fulltime</button>
                        }
                        
                        
                    </div>
                    <div className='icon-dollar-salary'>
                        <FontAwesomeIcon icon={faLocation} /><p>{location}</p>
                        <FontAwesomeIcon icon={faDollarSign} /><p>{Salary}</p>
                    </div>
                    <Link to={`/jobdetails/${_id}`} className='showMore-btn'>View Details</Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default FeatureJob;