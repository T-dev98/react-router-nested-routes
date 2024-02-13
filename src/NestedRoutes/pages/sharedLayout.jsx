import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";

export default function SharedLayout(){
    return(
        <>
        <Navbar/>
        <section className="section">
            <Outlet/>
        </section>
        </>
    )
}

/*
Nested Routes - Because routes can have children and each route defines a portion of the URL through segments, 
a single URL can match multiple routes in a nested "branch" of the tree. This enables automatic layout nesting through
outlet, relative links, and more.
*/

//  nested element tree won't happen automatically, you needs to render an outlet.
// Outlet- A component that renders the next match in a set of matches.
// Parent Route - A route with child routes. 
// Always render outlet in Parent route.