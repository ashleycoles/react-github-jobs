import React, {useState, useEffect} from 'react';
import Job from "./Job";

function JobsListing () {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://jobs.github.com/positions.json?description=python&location=new+york'
        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(jobs => {
                setJobs(jobs);
            })
    }, [])

    return(
        <div className="jobListing">
            {jobs.map((item) => {
                return <Job
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                />
            })}
        </div>
    )
}
export default JobsListing