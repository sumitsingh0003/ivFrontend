import React from 'react';
import { Link } from "react-router-dom";
const Error404 = () => {
    return (
        <main className="sj">
            <section className="j">
                <div className="_ tr om or nb ti w tc" aria-hidden="true">
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                                <stop stopColor="#FFF" offset="0%"></stop>
                                <stop stopColor="#EAEAEA" offset="77.402%"></stop>
                                <stop stopColor="#DFDFDF" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g fill="url(#illustration-01)" fillRule="evenodd">
                            <circle cx="1232" cy="128" r="128"></circle>
                            <circle cx="155" cy="443" r="64"></circle>
                        </g>
                    </svg>
                </div>

                <div className="sc tj fv vs">
                    <div className="li ls gs go">
                        <div className="sh tj ce">
                            <h1 className="h1 nw">Oh, No! You stumbled upon a rarity</h1>
                            <div className="nx">
                                <Link className="n cz au pl" to="/">Go back home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Error404;
