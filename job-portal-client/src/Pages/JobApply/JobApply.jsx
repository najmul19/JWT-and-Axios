import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  //   console.log({id, user})
  const navigate = useNavigate();
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log({linkedin,github,resume})
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myapplications')
        }
      });
  };
  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold text-center">
        Apply Job And Good Luck
      </h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label ">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            name="linkedin"
            type="url"
            placeholder="LinkedIn URL"
            className="input w-full input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub URL</span>
          </label>
          <input
            name="github"
            type="url"
            placeholder="GitHub URL"
            className="input w-full input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            name="resume"
            type="url"
            placeholder="Resume URL"
            className="input w-full input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn w-full btn-primary">Job Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
