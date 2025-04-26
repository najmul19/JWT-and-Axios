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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
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
