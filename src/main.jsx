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
import FeatureJob from './Components/FeaturedJobs/FeatureJob';
import featuredJobsLoader from './loaders/FeaturedJobsCart';
import JobDetails from './Components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategories.json')
      },
      {
        path:'jobdetails',
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`featuredJobs.json`)
      },
      {
        path:'appliedjob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
