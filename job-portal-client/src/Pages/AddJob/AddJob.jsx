import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-2xl">Add Job</h2>
      <form className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn w-full btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
