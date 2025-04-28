import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
  console.log(job);
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 max-w-96 shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="flex gap-1 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="company_logo" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex  gap-2 items-center">
            {" "}
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex gap-1 flex-wrap">
          {requirements.map((skil,indx) => (
            <p
            key={indx}
            className="border text-center px-2 rounded-lg hover:text-rose-600 hover:bg-gray-800">
              {skil}
              
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center">
            Salary:<FaDollarSign></FaDollarSign> {salaryRange.min}-
            {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${job._id}`}>
          <button className="btn btn-primary hover:scale-105 transition-transform duration-300">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
