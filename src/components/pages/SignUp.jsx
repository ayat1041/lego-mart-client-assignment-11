import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    setError(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(false);
        updateUser(name, photo)
          .then(() => {
            console.log("profile updated");
            setError(false);
          })
          .catch((e) => {
            console.log(e);
            setError(false);
          });
      })
      .catch((e) => {
        console.log(e)
        setError(true);
      });
  };
  return (
    <div className="min-h-screen mb-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | Signup</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h1 className="text-center py-10 text-2xl lg:text-5xl font-bold drop-shadow-md">
          Welcome to the family!
        </h1>
      </div>
      <form
        onSubmit={handleSignUp}
        className="p-5 lg:p-10 lg:w-1/2 flex flex-col justify-center items-center mx-auto bg-gradient-to-b from-slate-300 via-slate-100 to-slate-200 shadow-md"
      >
        <input
          className="my-4 p-4 border-none w-full rounded-sm"
          type="name"
          placeholder="enter your name"
          name="name"
          required
        />
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
        <input
          className="my-4 p-4 border-none w-full rounded-sm"
          type="text"
          placeholder="paste your photo url"
          name="photo"
          required
        />
        {error && (
          <p className="text-red-700 font-bold animate-bounce mt-4 text-center">
            Invalid inputs - email might be already in use.<br></br>also the password must be minimum of 8 characters
          </p>
        )}
        <button className="btn h-full border-none bg-red-600 text-xl text-white font-bold px-8 my-5 py-4 shadow-lg">
          SignUp
        </button>
        <p className="w-full text-center">
          Already have an account ?{" "}
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
