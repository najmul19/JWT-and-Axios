import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-2xl">Add Job</h2>
      <form className="card-body">
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
            <span className="label-text">Job Location</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pic a Job Type
            </option>
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
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Pick a Job Category
            </option>
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
              type="text"
              placeholder="Min"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              name="max"
              type="text"
              placeholder="Max"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Currency
              </option>
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
            placeholder="Job Description" name="description"
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

         {/* requiremnts */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requiremnts</span>
          </label>
         
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="put each requiremnts in a new line" name="requiremnts"
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
         
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="write each responsibilities in a new line" name="responsibilities"
          ></textarea>
        </div>
         {/* Hr name */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            name="hrname"
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
            name="hremail"
            type="text"
            placeholder="HR Email"
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
            name="companylogo"
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
