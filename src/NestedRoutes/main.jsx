import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Error from "./pages/error";
// import SharedLayout from "./pages/sharedLayout";
import Navbar from "./Navbar/navbar";

// nested routes using BrowserRouter
export default function Main(){
    return(

        //1. nested routes
        /*
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} >
                <Route path="about" element = {<About />} />
                <Route path="product" element = {<Product />} />
                <Route path="contact" element = {<Contact />} />
                <Route path="*" element = {<Error />} />
            </Route>
        </Routes>
        </BrowserRouter>
        */

        //2. nested routes solution- index routes

        // Index routes render in the parent routes outlet at the parent route's path.
        // Index routes match when a parent route matches but none of the other children match.
        // Index routes are the default child route for a parent route.
        // Index routes render when the user hasn't clicked one of the items in a navigation list yet.
        // copy Home.js content like navbar and Outlet component in SharedLayout.js


       /*
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<SharedLayout />} >
                        <Route index element = {<Home />} />
                        <Route path="about" element = {<About />} />
                        <Route path="product" element = {<Product />} />
                        <Route path="contact" element = {<Contact />} />
                        <Route path="*" element = {<Error />} />
                    </Route>
               </Routes>
            </BrowserRouter>
        */

        // 3. Here Navbar is Parent route and child route are nested inside parent(Nabar)
        /*
        this is most common and good approach of nesting, as you are not creating and rendering any extra page
        here navbar page would work as shared layout also Outlet component would rendered inside Navbar, so we are not creating extra page to 
        render outlet.
        */
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Navbar/>} >
                    <Route index element = {<Home />} />
                    <Route path="about" element = {<About />} />
                    <Route path="product" element = {<Product />} />
                    <Route path="contact" element = {<Contact />} />
                    <Route path="*" element = {<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}