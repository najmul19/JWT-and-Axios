import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries()); //formData.entries() key valu and Object.fromEntries convert it in object from array of array
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min: parseInt(min), max: parseInt(max), currency }; // nasted object
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/mypostedjobs");
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Add Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Job Title"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Job Location"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* type */}
        <div className="form-control">
          <label className="label w-full">
            <span className="label-text">Job Type</span>
          </label>
          <select
            name="jobType"
            defaultValue="Pic a Job Type"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Pic a Job Type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* category */}
        <div className="form-control">
          <label className="label w-full">
            <span className="label-text">Job Field</span>
          </label>
          <select
            name="category"
            defaultValue="Pick a Job Category"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Pick a Job Category</option>
            <option>Enginnering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            
            <input
              name="min"
              type="number"
              placeholder="Min"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="max"
              type="number"
              placeholder="Max"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </div>

        {/* company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            name="company"
            type="text"
            placeholder="Company Name"
            className="input w-full input-bordered"
            required
          />
        </div>

        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="put each requirements in a new line"
            name="requirements"
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>

          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="write each responsibilities in a new line"
            name="responsibilities"
          ></textarea>
        </div>
        {/* Hr name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            name="hr_name"
            type="text"
            placeholder="HR Name"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* Hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
          readOnly
            defaultValue={user?.email}
            name="hr_email"
            type="text"
            placeholder="HR Email"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            name="applicationDeadline"
            type="date"
            placeholder="Deadline"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* company logo*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            name="company_logo"
            type="text"
            placeholder="Company Logo URL"
            className="input w-full input-bordered"
            required
          />
        </div>
        {/* submit  */}
        <div className="form-control mt-6">
          <button className="btn w-full btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
