import { useContext } from "react";
import AuthContext from "../../context/AuthCOntext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((e) => {
        console.log(e.meassage);
      });
  };
  return (
    <div className="m-4 flex flex-col  items-center">
         <div className="divider">OR</div>
          
      <button  onClick={handleGoogleSignIn} className="btn btn-wide">Google</button>
    </div>
  );
};

export default SocialLogin;
