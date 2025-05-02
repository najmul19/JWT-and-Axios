import { useState } from "react";
import useJobs from "../../../hooks/useJobs";
import HotJobCard from "../../Home/HotJobCard";
import { FaSearch } from "react-icons/fa";

const AllJobs = () => {
    const [search,setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const { jobs, loading } = useJobs(sort,search); //sort value go to useJobs
  if (loading) {
    return <h2>Job Is Loading...</h2>;
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
      <div className=" mx-auto bg-base-200 py-5 p-3 flex items-center  gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <FaSearch></FaSearch>
        <input 
        onKeyUp={(e)=>setSearch(e.target.value)} // set an event and e comes from event
        className="input w-full max-w-2xl" type="text" placeholder="Search Jobs by Location" />
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-50 mt-10 p-5">
        <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {jobs.map((job) => (
            <HotJobCard job={job} key={job._id}></HotJobCard>
            // console.log(job)
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
