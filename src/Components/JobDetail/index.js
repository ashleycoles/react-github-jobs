import {useEffect, useState} from 'react'

import {useParams} from "react-router-dom";

function JobDetail() {
    const params = useParams();
    const [job, setJob] = useState({})

    useEffect(() => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = `http://jobs.github.com/positions/${params.id}.json`
        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(job => {
                console.log(job)
                setJob(job)
            })
    }, [])

    return (
        <div className="jobDetail">
            <p>{job.company} - {job.type}</p>
            <p dangerouslySetInnerHTML={{__html: job.description}}></p>
            <a href={job.url} target="_blank">View Job</a>
        </div>

    )
}
export default JobDetail