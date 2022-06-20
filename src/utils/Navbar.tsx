import { useState } from "react";
import { DoorOpen, HouseDoor, List, Pencil, People, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import './navbar.css';

export function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <nav className="navbar bg-white shadow border">
                <div className="container-fluid">
                    <span id="sidebar" onClick={showSidebar}>
                        <List size={26} />
                    </span>
                    <Link className="navbar-brand mb-0 h1 text-dark" to="/">Gordian Logistics</Link>
                </div>
            </nav>
            {/* Sidebar */}
            <section className={`sidebarPopout ${sidebar === true ? 'active' : ''}`}>
                <div className="text-end mt-2 me-2 pointer" onClick={showSidebar}>
                    <X size={26} />
                </div>
                <h4 className="ms-2">Navigate</h4>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <ul>
                            <li className="pointer">
                                <Link to="/" className="text-dark" onClick={showSidebar}>
                                    <HouseDoor size={20} />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="pointer">
                                <Link to="/register" className="text-dark" onClick={showSidebar}>
                                    <Pencil size={20} />
                                    <span>Register</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <ul>
                            <li className="pointer">
                                <Link to="/login" className="text-dark" onClick={showSidebar}>
                                    <DoorOpen size={20} />
                                    <span>Login</span>
                                </Link>
                            </li>
                            <li className="pointer">
                                <Link to="/users" className="text-dark" onClick={showSidebar}>
                                    <People size={20} />
                                    <span>Users</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>        
    );
}
