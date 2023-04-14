import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './JobDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faBriefcase , faPhone, faEnvelope, faAddressBook} from '@fortawesome/free-solid-svg-icons';


const JobDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {_id, job_description, job_requirement, educational_requirement,location,phone,email, experience,Salary,job_title ,company_name,remote} = data;
//storing in local storage
    const handleApply = () =>{
        const storedData = JSON.parse(localStorage.getItem('apply'));
        if(storedData){
            localStorage.setItem('apply',JSON.stringify([...storedData,data]))
        }
        else{
            localStorage.setItem('apply',JSON.stringify([data]))
        }
    }
    
    
    return (
        <div>
            <header className='headertag-container'>
                <h1>Job Details</h1>
            </header>
            <div className='jobdetail-container'>
                <div className='description-container'>
                    <h2>Company Name: {company_name}</h2><br />
                    <p><strong>Job Description:</strong> {job_description}</p>
                    <p><strong>Job Responsibility:</strong> {job_requirement}</p>
                    <strong><p>Educational Requirement:</p></strong>
                    <p>{educational_requirement}</p>
                    <strong><p>Experience:</p></strong>
                    <p>{experience}</p>
                    <p><strong>Job Type:</strong>
                        {
                            remote ? 'On-site' : 'Full-Time'
                        }
                    </p>
                </div>
                <div className='salarydetail-container'>
                    <div>
                    <h3 style={{textAlign:'center'}}>Job Details</h3>
                    <p><FontAwesomeIcon icon={faSackDollar}/> <strong>Salary:</strong> {Salary}</p> 
                    <p><FontAwesomeIcon icon={faBriefcase}/> <strong>Job Title:</strong> {job_title}</p> 
                    </div>
                    <div>
                    <h3 style={{textAlign:'center'}}>Contact Information</h3>
                    <p><FontAwesomeIcon icon={faPhone}/> <strong>Phone:</strong> {phone} </p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> <strong>Email:</strong> {email} </p>
                    <p><FontAwesomeIcon icon={faAddressBook}/> <strong>Address:</strong> {location}</p>
                    </div> 
                    <button onClick={handleApply} className='applyNow-btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;