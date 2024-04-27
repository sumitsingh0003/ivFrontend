import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="sc tj fv vs">
                    <div className="io dz uu fm ge uq border-gray-200">
                        <div className="dc gd">
                            <div className="nk">
                                <Link className="in" to="/" aria-label="Cruip">
                                    <svg
                                        className="iq if"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <radialGradient
                                                cx="21.152%"
                                                cy="86.063%"
                                                fx="21.152%"
                                                fy="86.063%"
                                                r="79.941%"
                                                id="footer-logo">
                                                <stop stopColor="#4FD1C5" offset="0%"></stop>
                                                <stop stopColor="#81E6D9" offset="25.871%"></stop>
                                                <stop stopColor="#338CF5" offset="100%"></stop>
                                            </radialGradient>
                                        </defs>
                                        <rect
                                            width="32"
                                            height="32"
                                            rx="16"
                                            fill="url(#footer-logo)"
                                            fillRule="nonzero"></rect>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cn c_">
                                <Link className="c_ pm hq pn po" to="/">Terms</Link> ·
                                <Link className="c_ pm hq pn po" to="/">Privacy Policy</Link>
                            </div>
                        </div>

                        <div className="dh vh gv">
                            <h6 className="he cc nk">Products</h6>
                            <ul className="cn">
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Web Studio</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">DynamicBox Flex</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Programming Forms</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Integrations</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Command-line</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dh vh gv">
                            <h6 className="he cc nk">Resources</h6>
                            <ul className="cn">
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Documentation</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Tutorials &amp; Guides</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Blog</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Support Center</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Partners</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dh vh gv">
                            <h6 className="he cc nk">Company</h6>
                            <ul className="cn">
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Home</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/about">About us</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/themes">Themes</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/contact">Contact us</Link>
                                </li>
                                <li className="nk">
                                    <Link className="c_ pm hq pn po" to="/">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dh vh gd">
                            <h6 className="he cc nk">Subscribe</h6>
                            <p className="cn c_ nw">
                                Get the latest news and articles to your inbox every month.
                            </p>
                            <form>
                                <div className="ii ue nw">
                                    <div className="ij">
                                        <label className="block cn b" htmlFor="newsletter">Email</label>
                                        <div className="j ii un sp">
                                            <input
                                                id="newsletter"
                                                type="email"
                                                className="s ij he fh fp lo cn"
                                                placeholder="Your email"
                                                required="" />
                                            <button
                                                type="submit"
                                                className="_ z ts"
                                                aria-label="Subscribe">
                                                <span
                                                    className="_ z to sn n_ tq aa"
                                                    aria-hidden="true"></span>
                                                <svg
                                                    className="iz il ft ht tz s_"
                                                    viewBox="0 0 12 12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                        fillRule="nonzero"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="me mb mx fg gt uq border-gray-200">
                        <ul className="ii nw vc vy vb">
                            <li>

                                <a href="https://twitter.com/sumitsingh0003/" target='_blank' rel="noreferrer" className="ii us un c_ pm bg-white hover--bg-white-100 ub shadow hq pn po" aria-label="Twitter">
                                <svg
                                        className="iq if ft"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"></path>
                                    </svg>
                                </a>

                            </li>
                            <li className="nv">

                                <a href="https://github.com/sumitsingh0003/" target='_blank' rel="noreferrer" className="ii us un c_ pm bg-white hover--bg-white-100 ub shadow hq pn po" aria-label="Github"><svg
                                        className="iq if ft"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                                </svg>
                                </a>

                            </li>
                            <li className="nv">

                                <a href="https://www.facebook.com/sumitsingh0003/" target='_blank' rel="noreferrer" className="ii us un c_ pm bg-white hover--bg-white-100 ub shadow hq pn po" aria-label="Facebook">
                                <svg
                                        className="iq if ft"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path>
                                </svg>
                                </a>

                            </li>
                        </ul>
                        <div className="cn c_ np">All rights reserved.</div>
                    </div>
                    </div >
            </footer >
        </div >
    );
};

export default Footer;

