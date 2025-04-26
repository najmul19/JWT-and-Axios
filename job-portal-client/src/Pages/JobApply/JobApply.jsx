import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log({linkedin,github,resume})
    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={submitJobApplication} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn URL</span>
              </label>
              <input
                name="linkedin"
                type="url"
                placeholder="LinkedIn URL"
                className="input input-bordered"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                name="resume"
                type="url"
                placeholder="Resume URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Job Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
