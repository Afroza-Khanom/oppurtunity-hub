import React, { useEffect, useState } from 'react';
import FeatureJob from '../FeaturedJobs/FeatureJob';
// import './AppliedJob.css'


const AppliedJob = () => {

    const [apply, setApply] = useState([])
    const [filterApply, setFilterApply] = useState([])

    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('apply'));
        if(storedData){
            setApply(storedData)
            setFilterApply(storedData)
        }
    },[])

    return (
        <div>
            <h2>applied job</h2>
            {
                filterApply?.map((featuredjob) => 
                <div className='apply-field'>
                    <FeatureJob featuredjob={featuredjob}></FeatureJob>
                </div>)
            }
        </div>
    );
};

export default AppliedJob;