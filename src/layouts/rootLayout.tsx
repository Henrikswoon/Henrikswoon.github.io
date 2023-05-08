import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const rootLayout: React.FC = () => {    
    return(
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    );
}

export default rootLayout;