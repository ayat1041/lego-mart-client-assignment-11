import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState(false);
  const [notifyOnce, setNotifyOnce] = useState(false);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (from != "/") {
      console.log("not came from other pages");
      if (!notifyOnce) {
        toast("You must login first.");
        setNotifyOnce(true);
      }
    }
  }, [from]);

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    setError(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        setError(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
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
    <>
    <div className="min-h-screen mb-12 h-[100%]" data-aos="fade-up">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
          required
        />
        <input
          className="my-4 p-4 border-none w-full rounded-sm"
          type="password"
          placeholder="enter your password"
          name="password"
          required
        />
        {error && (
          <p className="text-red-700 font-bold animate-bounce mt-4">
            Invalid credentials
          </p>
        )}
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
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default Login;
