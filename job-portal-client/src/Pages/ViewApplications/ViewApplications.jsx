import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job: {applications.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application,indx) => (
              <tr key={application._id}>
                <th>{indx+1}</th>
                <td>{application.applicant_email} </td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
