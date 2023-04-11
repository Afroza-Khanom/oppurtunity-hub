import React from 'react';
import { useLoaderData } from 'react-router-dom';

import './Home.css'
import JobCategory from '../JobCategory/JobCategory';


const Home = () => {
    const jobCategories = useLoaderData();
    console.log(jobCategories)

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
            <section>
                <h1 style={{fontSize:'38px'}}>Job Category List </h1>
                <p>Explore thousands of opportunities with all the information you need.</p>
                <div className='jobCategory-container'>
                    {
                        jobCategories.map(jobcategory => <JobCategory
                        key={jobcategory.id} jobcategory={jobcategory}
                        ></JobCategory>)
                    }
                </div>
            </section>
            
        </div>
    );
};

export default Home;