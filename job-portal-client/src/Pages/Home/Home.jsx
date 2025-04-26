import Banner from "./Banner";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="flex flex-col justify-center items-center bg-gray-50 mt-10 p-10">

            <HotJobs></HotJobs>
            </div>
        </div>
    );
};

export default Home;