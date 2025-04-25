import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return <div>
    <div>
        {
            jobs.map(job=>{
                <HotJobCard key={job._id} job={job}></HotJobCard>
            })
        }
    </div>
  </div>;
};

export default HotJobs;
