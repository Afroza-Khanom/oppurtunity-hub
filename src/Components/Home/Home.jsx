import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
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
            
        </div>
    );
};

export default Home;