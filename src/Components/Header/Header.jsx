import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            <h2>OpportunityHub</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='statistics'>Statistics</Link>
                <Link to='appliedJob'>Applied Jobs</Link>
                <Link to='blog'>Blog</Link> 
            </nav>
            <button className='btn-apply'> Start Applying</button>
            
        </div>
    );
};

export default Header;