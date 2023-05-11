import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading"
import './rootLayout.css'
import { Suspense } from "react";


const rootLayout: React.FC = () => {    
    return(
        <main>
            <Navbar/>
            <Suspense fallback={<Loading />}>
                <Outlet/>
            </Suspense>
        </main>
    );
}

export default rootLayout;