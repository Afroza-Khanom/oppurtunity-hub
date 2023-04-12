import React from 'react';
import './JobCategory.css'

const JobCategory = ({jobcategory}) => {
    // console.log(jobcategory)
    const {imageURL, name, jobNumber} = jobcategory;
    return (
        <div className='jobcategory-container'>
            <img src={imageURL} alt="" />
            <h2>{name}</h2>
            <p>{jobNumber} Jobs Available</p>
        </div>
    );
};

export default JobCategory;