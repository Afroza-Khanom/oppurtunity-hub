import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobCategories.json')
      },
      {
        path:'appliedjob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path:'jobdetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: async ({params}) =>{
          const res = await fetch('/featuredJobs.json');
          const jobs = await res.json();

          const findJob = jobs.find(job => job._id == params.jobId)
          return findJob;
        }
      },
      
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element:<NotFound></NotFound>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
