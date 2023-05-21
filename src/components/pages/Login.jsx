import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen mb-12 h-[100%]" data-aos="fade-up">
      <div>
        <h1 className="text-center py-10 text-2xl lg:text-5xl font-bold drop-shadow-md">
          Hey! Welcome back!
        </h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="p-5 lg:p-10 lg:w-1/2 flex flex-col justify-center items-center mx-auto bg-gradient-to-b from-slate-300 via-slate-100 to-slate-200 shadow-md"
      >
        <input
          className="my-4 p-4 border-none w-full rounded-sm"
          type="email"
          placeholder="enter your email"
          name="email"
        />
        <input
          className="my-4 p-4 border-none w-full rounded-sm"
          type="password"
          placeholder="enter your password"
          name="password"
        />
        <button className="btn h-full border-none bg-red-600 text-xl text-white font-bold px-8 my-5 py-4 shadow-lg">
          Login
        </button>
        <p className="w-full text-center">Sign in with google instead ?</p>
        <div className="cursor-pointer" onClick={handleGoogleSignIn}>
          <FcGoogle className="text-3xl my-5" />
        </div>
        <p className="w-full text-center">
          New to LegoMart ?{" "}
          <Link to="/signup" className="font-bold">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
