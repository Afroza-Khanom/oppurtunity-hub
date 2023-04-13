import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <header className='headertag-container'>
                <h1>Blog</h1>
            </header>
            <div className='container'>
                {/* <div className='QA-container'> */}
                    
                    <div className='QA-container'>
                    <h2>When to use context API </h2>
                    <p>When props or data need to be pass down to different level or components like from parents to children. For example if grandpa is the parent components and his data need to be accessible by children's children thats when context API comes to use.</p>
                    </div>
                    <div className='QA-container'>
                        <h2>What is custom hook in React</h2>
                        <p>They are reusable function that a developer use to work to give different and unique functionality to their work.</p>
                    </div>
                    <div className='QA-container'>
                        <h2>What is useRef</h2>
                        <p>It's a build-in react hook takes an initial value as an argument and returns a reference.</p>
                    </div>
                    <div className='QA-container'>
                        <h2>What is useMemo</h2>
                        <p>It is a react Hook that cache the result of a calculation between re-renders. It can be used to keep expensive, resource intensive functions from needlessly running. This Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated.</p>
                    </div>
                {/* </div> */}
            </div>

        </div>
    );
};

export default Blog;