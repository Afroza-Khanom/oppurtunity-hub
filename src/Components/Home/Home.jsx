import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeaturedJobs/FeatureJob';



const Home = () => {
    const jobCategories = useLoaderData();
    // console.log(jobCategories.jobCategory);

    const featuredjob = jobCategories.jobDetail;
    // console.log(featuredjob);

    const [showMore, setShowMore] = useState(false);

    
    return (
        <div>
            <header className='header-container'>
                <div className='paragraph-container'>
                    <h1>
                        One Step Closer To Your <span style={{color: 'blueviolet'}}>Dream</span> 
                    </h1>
                    <p>Explore thousands of job opportunities with all the information you need. It's your future.  Come and find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img className='img-fluid' src="/public/image/a49e18a6c059795a878b6b0366e7211b.png" alt="" />
                </div>
            </header>

            {/* section for job category */}
            <section style={{margin:'10px', paddingBottom:'20px'}}>
                <h1 style={{fontSize:'38px'}}>Job Category List </h1>
                <p>Explore thousands of opportunities with all the information you need.</p>
                <div className='jobCategory-container'>
                    {
                        jobCategories.jobCategory.map(jobcategory => <JobCategory
                        key={jobcategory.id} jobcategory={jobcategory}
                        ></JobCategory>)
                    }
                </div>
            </section>

            {/* Section for featured jobs */}
            <section style={{paddingTop: '20px'}}>
            <h1 style={{fontSize:'38px'}}>Featured Jobs</h1>
                <p>Explore thousands of opportunities with all the information you need.</p>
                <div className='full-featured-container'>
                <div className='featuredJob-container'>
                    {
                        jobCategories.jobDetail.map(featuredjob => <FeatureJob key={featuredjob._id} featuredjob={featuredjob}></FeatureJob>)
                    }
                    {/* {
                        showMore ? featuredjob : featuredjob.slice(0,3)
                    }
                    <button onClick={() => setShowMore
                    (!showMore)} className='showMore-btn'>Show More</button> */}
                </div>
                </div>
            </section>
            
            
        </div>
    );
};

export default Home;