const featuredJobsLoader = async () =>{
    const featuredJobs = await fetch('featuredJobs.json')
    const jobs = await featuredJobs.json();
    return jobs;
}

export default featuredJobsLoader