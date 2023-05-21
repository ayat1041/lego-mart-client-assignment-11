import { Helmet } from "react-helmet";
import { TbError404Off } from "react-icons/tb";
import { Link } from "react-router-dom/dist";
const FourOFour = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>LegoMart | Error</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TbError404Off className="text-9xl lg:text-[30vw]"/>
      <p className="text-5xl font-bold">welcome to nowhere</p>
      <Link to=""><button className="btn btn-success my-10 border-none rounded-none shadow-md text-lg">Go home</button></Link>
    </div>
  );
};

export default FourOFour;
