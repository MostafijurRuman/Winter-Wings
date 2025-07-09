import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";

const navLinks = [
    { name: "Home", to: "/" },
    { name: "Donation Campaigns", to: "/campaigns" },
    { name: "How to Help", to: "/how-to-help" },
    { name: "Dashboard", to: "/dashboard" },
];

const Nav = () => {
    const {user,logout} =useContext(AuthContext);
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const activeLink =
        "text-[var(--color-primary)] font-semibold underline underline-offset-4";
    const defaultLink =
        "hover:text-[var(--color-primary)] transition-colors font-medium";

    return (
        <nav
            className="w-full bg-[var(--color-bg)] shadow-md"
            style={{
                fontFamily: "var(--font-worksans)",
                color: "var(--color-text)",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    <span
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-primary)" }}
                    >
                        WinterWings
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.to}
                            className={({ isActive }) =>
                                `${defaultLink} ${isActive ? activeLink : ""}`
                            }
                            style={{ fontFamily: "var(--font-worksans)" }}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                    </button>
                </div>

                {/* User Profile / Login */}
                <div className="flex items-center gap-3">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border-2 border-[var(--color-primary)]">
                                    <img src={user.photoURL} alt="profile" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-[var(--color-surface)] rounded-box w-52"
                            >
                                <li>
                                    <span className="font-semibold">{user.name}</span>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <button onClick={()=>{logout()}} className="text-[var(--color-error)]">Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-primary btn-sm"
                            style={{
                                backgroundColor: "var(--color-primary)",
                                borderColor: "var(--color-primary)",
                                color: "#fff",
                                fontFamily: "var(--font-worksans)",
                            }}
                        >
                            <FaUserCircle className="mr-2" /> Login
                        </Link>
                    )}
                </div>

                
            </div>

            {/* Mobile Nav Links */}
            {mobileOpen && (
                <div className="md:hidden px-4 pb-2 animate-fade-in">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className={({ isActive }) =>
                                    `py-2 px-3 rounded transition ${isActive ? activeLink : ""}`
                                }
                                style={{ fontFamily: "var(--font-worksans)" }}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;