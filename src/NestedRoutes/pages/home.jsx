import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/navbar";


// 1 step- render the home component with content Home Page inside h2 element.
// 2nd step- render the home component without the content Home Page inside h2 element, you can remove h2 element or can comment it out.

// in 1st case you'll notice the issue that the content Home Page are shared across all the layout page or all other route page like home page
// content always be there with other(child) route content. for Ex- if you route to about page, on about page youwill see the content of about 
// page as well as the content of home page.

// now in 2nd case if you remove the content of home page, your home page will be empty and nothing will be there to display. so in this
// scenerio rendering home page component are wasted, but you have to render it bcse home is parent route under which child are nested.

// Solution:- sol to this issue is index routes with shared layout/ Layout routes.
// copy the home page content like navbar and outlet component into SharedLayout Page

/*
export default function Home(){
    return(
        <div>
            <Navbar />
            <section className="section">
            <h2>Home Page</h2>
            <Outlet />
            </section>
        </div>
    )
}

*/

// now you can define any content to home component as index routes has been provided as sol, And our child routes like About, contact, Product
// are nested inside sharedlayout page, here sharedlayout routes is parent route so Outlet componet need to define in sharedlayout page.

export default function Home(){
    return(
        <div>
            <section className="section">
            <h2>Home Page</h2>
            </section>
        </div>
    )
}
