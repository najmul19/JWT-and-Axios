import { useEffect, useState } from "react";

import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) =>{
        // console.log(data)
        setJobs(data)
      });
  }, []);
  return <div>
    <div>
    
        {
            
            jobs.map(job=>(
                <HotJobCard job={job} key={job._id}></HotJobCard>
                // console.log(job)
            ))
        }
    </div>
  </div>;
};

export default HotJobs;
