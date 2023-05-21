import { SiSitepoint } from "react-icons/si";
import { BsPinAngle } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | Blogs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-4xl pb-10 font-bold">Blogs page</h2>
      <div className="mx-auto flex flex-col lg:flex-row w-full">
        <div className="p-6 m-4 bg-slate-200 shadow-md w-[90vw] lg:w-1/2">
          <BsPinAngle className="mb-10 text-3xl cursor-pointer" />
          <p className="font-semibold">
            <SiSitepoint className="inline mr-3 text-red-600" />
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p className="mb-4 text-slate-600">
            <span className="text-red-500 font-bold">Answer - </span>
            An access token is a credential that grants access to specific
            resources or services. It is usually short-lived and used for
            authentication. A refresh token is a longer-lived token used to
            obtain new access tokens. Both tokens should be securely stored on
            the client-side, typically in a secure HTTP-only cookie or local
            storage.
          </p>
        </div>
        <div className="p-6 m-4 bg-slate-200 shadow-md w-[90vw] lg:w-1/2">
          <BsPinAngle className="mb-10 text-3xl cursor-pointer" />
          <p className="font-semibold">
            <SiSitepoint className="inline mr-3 text-red-600" />
            Compare SQL and NoSQL databases?
          </p>
          <p className="mb-4 text-slate-600">
            <span className="text-red-500 font-bold">Answer - </span>
            SQL (Structured Query Language) databases are relational databases
            that use tables with predefined schemas. NoSQL (Not Only SQL)
            databases are non-relational databases that provide flexibility and
            scalability, allowing for dynamic and unstructured data storage.
          </p>
        </div>
        <div className="p-6 m-4 bg-slate-200 shadow-md w-[90vw] lg:w-1/2">
          <BsPinAngle className="mb-10 text-3xl cursor-pointer" />
          <p className="font-semibold">
            <SiSitepoint className="inline mr-3 text-red-600" />
            What is express js? What is Nest JS (google it)?
          </p>
          <p className="mb-4 text-slate-600">
            <span className="text-red-500 font-bold">Answer - </span>
            Express.js is a minimal and flexible web application framework for
            Node.js that provides a robust set of features for building web
            applications and APIs. Nest.js is a progressive, TypeScript-based
            framework for building efficient and scalable server-side
            applications. It combines elements of Object-Oriented Programming,
            Functional Programming, and Functional Reactive Programming.
          </p>
        </div>
        <div className="p-6 m-4 bg-slate-200 shadow-md w-[90vw] lg:w-1/2">
          <BsPinAngle className="mb-10 text-3xl cursor-pointer" />
          <p className="font-semibold">
            <SiSitepoint className="inline mr-3 text-red-600" />
            What is MongoDB aggregate and how does it work (google it)?
          </p>
          <p className="mb-4 text-slate-600">
            <span className="text-red-500 font-bold">Answer - </span>
            MongoDB's aggregate is a powerful data aggregation framework that
            allows users to perform advanced data analysis and transformation
            operations on MongoDB collections. It utilizes a pipeline of stages
            to process and manipulate data, including grouping, filtering,
            sorting, and performing calculations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
