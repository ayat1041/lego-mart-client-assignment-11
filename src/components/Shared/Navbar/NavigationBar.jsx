import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  const navOptions = (
    <>
      <li>
        <Link
          className="text-yellow-100 hover:text-yellow-500 text-2xl font-bold"
          to="/"
        >
          <FaHome/>
        </Link>
      </li>
      <li>
        <Link
          className="text-yellow-100 hover:text-yellow-500 text-xl font-bold"
          to="/alltoys"
        >
          All Toys
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link
              className="text-yellow-100 hover:text-yellow-500 text-xl font-bold"
              to="/mytoys"
            >
              My Toys
            </Link>
          </li>
          <li>
            <Link
              className="text-yellow-100 hover:text-yellow-500 text-xl font-bold"
              to="/addtoy"
            >
              Add a toy
            </Link>
          </li>
        </>
      )}

      <li>
        <Link
          className="text-yellow-100 hover:text-yellow-500 text-xl font-bold"
          to="/blogs"
        >
          Blogs
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 bg-gradient-to-b from-[#494949] via-[#111111] to-[#494949] z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF5222"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#FF5222] rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <img
          className="w-[120px] lg:w-[200px] border-2"
          src="https://github.com/ayat1041/just_for_issues/assets/57280365/d7e26c2a-914f-4774-a68c-5681541fc3fc"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link
              onClick={() => {
                signOut();
              }}
              className="text-yellow-100 hover:text-yellow-500 text-xl font-medium lg:font-bold me-2 lg:me-4"
            >
              logout
            </Link>
            <div className="avatar">
              <div className="w-[60px] mask mask-hexagon">
                <img className="w-[40px] cursor-pointer" src={user.photoURL} title={user.displayName} alt="" />
              </div>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="text-yellow-100 hover:text-yellow-500 text-xl font-medium lg:font-bold me-2 lg:me-4"
          >
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
