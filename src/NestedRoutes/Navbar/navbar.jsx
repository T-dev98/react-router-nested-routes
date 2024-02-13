import { Link, Outlet } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
        <nav className="navbar" >
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/product' >Product</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
        <Outlet />
        </div>
    )
}