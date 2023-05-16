import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Loading from "../components/Loading"
import './rootLayout.css'
import { Suspense } from "react";
import { useLocation } from 'react-router-dom';
import Welcome from "../components/Welcome/Welcome";
import WaveAnimation from "../components/WaveAnimation/WaveAnimation";
import { AnimatePresence } from "framer-motion";


const RootLayout: React.FC = () => {    
    const at = useLocation();
    console.log(at.pathname)
    return(
        <main>
            <Navbar/>
            <AnimatePresence mode="wait">
                <Suspense fallback={<Loading />}>
                    <Outlet/>
                    {at.pathname === '/' ? <Welcome/> : null}
                </Suspense>
            </AnimatePresence>
            <WaveAnimation id="animation"/>
        </main>
    );
}

export default RootLayout;