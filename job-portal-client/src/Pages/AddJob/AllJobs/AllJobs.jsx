import useJobs from "../../../hooks/useJobs";
import HotJobCard from "../../Home/HotJobCard";


const AllJobs = () => {
    const {jobs,loading} = useJobs();
    if(loading){
        return <h2>Job Is Loading...</h2>
    }
    return (
        <div>
            <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
            <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
    
        {
            
            jobs.map(job=>(
                <HotJobCard job={job} key={job._id}></HotJobCard>
                // console.log(job)
            ))
        }
    </div>
        </div>
    );
};

export default AllJobs;