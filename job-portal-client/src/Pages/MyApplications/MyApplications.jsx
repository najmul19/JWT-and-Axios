import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // fetch(`http://localhost:5000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));
    // axios
    //   .get(`http://localhost:5000/job-application?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));


    axiosSecure.get(`/job-application?email=${user.email}`)
    .then(res=> setJobs(res.data))


  }, [user.email]);
  return (
    <div>
      <h2 className="text-2xl">MyApplications: {jobs.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Job Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.applicant_email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.resume}
                  </span>
                </td>

                <td>{job.status}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
