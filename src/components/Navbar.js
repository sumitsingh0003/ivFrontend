import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { logoutDispatcher } from '../redux/authActions';
import { removeAlert } from '../redux/promptsActions';
import { userClear } from '../redux/userActions';
const Navbar = () => {
    const [top, setTop] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleScroll = () => {
        setTop(window.pageYOffset > 10 ? false : true);
    };
    useEffect(() => {
        if (location.pathname !== "/project") {
            dispatch(removeAlert());
        }
    }, [location.pathname]);
    window.addEventListener('scroll', handleScroll);

    return (
        <div>
            <header className={`k ij tf mz hq pt po ${top ? '' : 'bg-white hj shadow-lg'}`}>
                <div className="sc tj fc vs">
                    <div className="ii un uo ia mr">
                        {/* Site branding */}
                        <div className="s_ np">
                            {/* Logo */}
                            <Link className="block" to="/" aria-label="Cruip">
                                <svg className="iq if" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                                            <stop stopColor="#4FD1C5" offset="0%"></stop>
                                            <stop stopColor="#81E6D9" offset="25.871%"></stop>
                                            <stop stopColor="#338CF5" offset="100%"></stop>
                                        </radialGradient>
                                    </defs>
                                    <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero"></rect>
                                </svg>
                            </Link>
                        </div>

                        {/* Desktop navigation */}
                        <nav className="hidden me mh">
                            {/* Desktop menu links */}
                            <ul className="ii sj ui ue un">
                                <li>
                                    <Link className="c_ pm fh ya fp ii un hq pn po" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="c_ pm fh ya fp ii un hq pn po" to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link className="c_ pm fh ya fp ii un hq pn po" to="/themes">Themes</Link>
                                </li>
                                <li>
                                    <Link className="c_ pm fh ya fp ii un hq pn po" to="/project">Invoices</Link>
                                </li>
                                <li>
                                    <Link className="c_ pm fh ya fp ii un hq pn po" to="/contact">Contact Us</Link>
                                </li>
                            </ul>

                            {/* Desktop sign in links */}
                            <ul className="ii sj ui ue un">
                                {localStorage.getItem("token") ? <li>
                                    <span onClick={() => {
                                        localStorage.removeItem("token");
                                        navigate("/login");
                                        dispatch(logoutDispatcher());
                                        dispatch(userClear());
                                    }} className="r cq ao pf nm cursor-pointer">
                                        <span>Log Out</span>
                                        <svg className="iz il ft cj s_ ng ny" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"></path>
                                        </svg>
                                    </span>
                                </li> : <><li>
                                    <Link className="cc c_ pm fc fd ii un hq pn po" to="/login">Sign in</Link>
                                </li>
                                    <li>
                                        <Link className="r cq ao pf nm" to="/signup">
                                            <span>Sign up</span>
                                            <svg className="iz il ft cj s_ ng ny" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                </>
                                }
                            </ul>
                        </nav>

                        {/* Mobile menu */}
                        <div className="ii mn">
                            {/* Hamburger button */}
                            <button className={`l ${expanded ? 'active' : ''}`} onClick={() => setExpanded(!expanded)} aria-controls="mobile-nav" aria-expanded={expanded}>
                                <span className="b">Menu</span>
                                <svg className="st ic ft ck" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="4" width="24" height="2"></rect>
                                    <rect y="11" width="24" height="2"></rect>
                                    <rect y="18" width="24" height="2"></rect>
                                </svg>
                            </button>

                            {/* Mobile navigation */}
                            <nav id="mobile-nav" className={`_ te ih ln tl tn ij um bg-white ${expanded ? '' : 'hidden'}`} onClick={() => setExpanded(false)} onKeyDown={(e) => { if (e.key === 'Escape') setExpanded(false); }}>
                                <ul className="fc fp">
                                    <li>
                                        <Link className="ii c_ pm fp" to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="ii c_ pm fp" to="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link className="ii c_ pm fp" to="/themes">Themes</Link>
                                    </li>
                                    <li>
                                        <Link className="ii c_ pm fp" to="/project">Invoices</Link>
                                    </li>
                                    <li>
                                        <Link className="ii c_ pm fp" to="/contact">Contact Us</Link>
                                    </li>
                                    {localStorage.getItem("token") ? <li>
                                        <span onClick={() => {
                                            localStorage.removeItem("token");
                                            navigate("/login");
                                            dispatch(logoutDispatcher());
                                            dispatch(userClear());
                                        }} className="r cq ao pf ij tq cursor-pointer">
                                            <span>Log Out</span>
                                            <svg
                                                className="iz il ft cj s_ ng ny"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                    fill="#999"
                                                    fillRule="nonzero"></path>
                                            </svg>
                                        </span>
                                    </li> : <>
                                        <li>
                                            <Link className="ii cc ij c_ pm fp us" to="/login"
                                            >Sign in</Link>
                                        </li>
                                        <li>
                                            <Link className="r cq ao pf ij tq" to="/signup">
                                                <span>Sign up</span>
                                                <svg
                                                    className="iz il ft cj s_ ng ny"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                        fill="#999"
                                                        fillRule="nonzero"></path>
                                                </svg>
                                            </Link>
                                        </li></>}

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    );
};

export default Navbar;
