import React, { createContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './FeatureJob.css'
import JobDetail from '../JobDetail/JobDetail';

export const JobDetailContext = createContext([]);

const FeatureJob = ({featuredjob}) => {
    const {_id, company_logo,company_name, location,job_title, remote, Salary } = featuredjob;
    
    const [JobInfo, setJobInfo] = useState([]);

    // useEffect(()=>{
        
    //     }
    // },[featuredjob])

    const handleViewDetails = (jobinfo) =>{
        console.log(jobinfo)
        // const storedjob =[];
        const clikedJob = [];

        for(const id in featuredjob){
            const findJob = featuredjob.find(fj => fj._id === id)
            if(findJob){
                // const quantity = storedjob[id];
                clikedJob.push(findJob);
            }
            setJobInfo(clikedJob);
    
    }
}
    

    return (
        <div>
            <div className='featureJob-container'>
                <div className='img-details-btn'>
                    <img src={company_logo} alt="" />
                    <JobDetailContext.Provider>
                    <Link to='jobdetails'><button onClick={()=>handleViewDetails(_id)} >View Details</button></Link>
                    </JobDetailContext.Provider>
                    
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