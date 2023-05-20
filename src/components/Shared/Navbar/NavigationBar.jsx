import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NavigationBar = () => {
  const navOptions = (
    <>
      <li>
        <Link
          className="text-yellow-100 hover:text-yellow-500 text-2xl font-bold"
          to="/"
        >
          <FaHome />
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
    <div className="navbar sticky top-0 bg-gradient-to-b from-[#313131] via-[#111111] to-[#313131] z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          src="logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link to="/login" className="text-yellow-100 hover:text-yellow-500 text-xl font-medium lg:font-bold me-2 lg:me-4">Login</Link>
        <img className="w-[40px] rounded-0 border-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBM3TcLhWOhvYDIjxWgPNnx9rxJU2VAVQUQ&usqp=CAU" alt="" /> */}
        <Link to="/login" className="text-yellow-100 hover:text-yellow-500 text-xl font-medium lg:font-bold me-2 lg:me-4">Login</Link>
        <div className="avatar">
          <div className="w-[60px] mask mask-hexagon">
            <img className="w-[40px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBM3TcLhWOhvYDIjxWgPNnx9rxJU2VAVQUQ&usqp=CAU" alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
