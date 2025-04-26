import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {_id, title, company, deadline } = useLoaderData();
  // console.log(job)
  return (
    <div className="m-10">
      <h2 className="text-3xl">Job Details for {title}</h2>
      <p>Apply For: {company} </p>
      <p>Apply For: {deadline} </p>
      <Link to={`/jobapply/${_id}`}>
        <button className="btn btn-primary ">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
