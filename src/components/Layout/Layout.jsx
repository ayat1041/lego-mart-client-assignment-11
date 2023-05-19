import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Layout;