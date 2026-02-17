import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from './Navbar';

export function AppLayout(){
    const navigation = useNavigation();
    if(navigation.state === "loading") return <h1>Loading...</h1>
    return(
       <>
        <Navbar/>
        <Outlet/>
        <Footer/>
       </>
    )
}