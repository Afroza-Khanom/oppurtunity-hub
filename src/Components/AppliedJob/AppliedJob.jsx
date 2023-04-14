import React, { useEffect, useState } from 'react';
import FeatureJob from '../FeaturedJobs/FeatureJob';
import './AppliedJob.css'


const AppliedJob = () => {

    const [apply, setApply] = useState([])
    const [filterApply, setFilterApply] = useState([])

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('apply'));
        if(storedData){
            setApply(storedData)
            setFilterApply(storedData)
        }
    },[]);

    const handleFilter =(event) =>{
        const value = event.target.value;
        console.log(value)
        const filterData = apply.filter((type) => 
        type.remote_type == value)
        
        setFilterApply(filterData)
    }

    return (
        <div>
             <header className='headertag-container'>
                <h1>Applied Job</h1>
             </header>
             <div >
                <select onChange={handleFilter} className='filter-field'>
                    <option disabled
                     >Filter By-</option>
                    <option value={"true"}>On-site</option>
                    <option value={"false"}>Full-Time</option>
                </select>
             </div>
            {
                filterApply.length>0 ?
                filterApply?.map((featuredjob) => 
                <div className='apply-field'>
                    <FeatureJob featuredjob={featuredjob}></FeatureJob>
                </div>)
                :
                <h1 style={{paddingTop:'20px', marginTop:'40px'}}>No Job found</h1>
            }
        </div>
    );
};

export default AppliedJob;