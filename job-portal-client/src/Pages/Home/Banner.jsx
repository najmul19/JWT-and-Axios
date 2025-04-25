import {
  animate,
  AnimatePresence,
  easeOut,
  motion,
  useIsPresent,
  useMotionValue,
  useTransform,
} from "motion/react";
import team1 from '../../assets/images/happy_team.jpg'
import team2 from '../../assets/images/programmer_celebrate.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y:[50,70,50]}}
            transition={{duration: 10 , repeat: Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4  border-b-4 border-[#581845] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x:[100,120,100]}}
            transition={{duration: 10 , repeat: Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4  border-b-4 border-[#581845] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          
          <motion.h1
          animate={{x:50}}
          transition={{duration:2, delay: 1, ease: easeOut,repeat: Infinity}}
          className="text-5xl font-bold">Latest <motion.span animate={{color:[ '##E4421F','#581845']}}
          transition={{duration: 1.5 , repeat: Infinity}}
          >Jobs</motion.span> For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
