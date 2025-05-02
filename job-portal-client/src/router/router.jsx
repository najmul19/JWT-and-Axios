import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Register/Register";
import SIgnIn from "../Pages/SignIn/SIgnIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import AllJobs from "../Pages/AddJob/AllJobs/AllJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not FOund</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/mypostedjobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: "/viewapplications/:job_id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "/addjob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "/signin",
        element: <SIgnIn></SIgnIn>,
      },
      {
        path: "/jobapply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
      },
      {
        path: "/myapplications",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);
export default router;
