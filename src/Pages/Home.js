import React from 'react';
// import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <main className="sj">
                    <section className="j">
                        <div className="_ tr om or ti w tc" aria-hidden="true">
                            <svg
                                width="1360"
                                height="578"
                                viewBox="0 0 1360 578"
                                xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient
                                        x1="50%"
                                        y1="0%"
                                        x2="50%"
                                        y2="100%"
                                        id="illustration-01">
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
                                <div className="ce ls gu">
                                    <h1 className="co gp cd cb cx nw" data-aos="zoom-y-out">
                                        Make your Invoice
                                        <span className="fe hu ag ab aj">wonderful</span>
                                    </h1>
                                    <div className="sh tj">
                                        <p
                                            className="cr c_ nz"
                                            data-aos="zoom-y-out"
                                            data-aos-delay="150">
                                            Our Invoices have best types of Themes, so you only
                                            have to set it up once, and get beautiful results forever.
                                        </p>
                                        <div
                                            className="sp tj dj db vr"
                                            data-aos="zoom-y-out"
                                            data-aos-delay="300">
                                            <div>
                                                <Link className="n cz au pl ij nw dx dv" to="/project">Create free Invoice</Link>
                                            </div>
                                            <div>
                                                <Link className="n cz ao pf ij dx dg" to="/about">About Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main >
            </div >
            <main className="flex-grow">
                {/*  Page sections */}
                {/* <HeroHome /> */}
                <FeaturesHome />
                <FeaturesBlocks />
                <Testimonials />
                <Newsletter />
            </main>
        </>
    );
};

export default Home;
