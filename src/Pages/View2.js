import React, { useState } from 'react';
import First from "../Themes/First";
import Second from "../Themes/Second";
import Third from "../Themes/Third";
import Fourth from "../Themes/Fourth";
import Five from "../Themes/Five";
import { useLocation } from 'react-router-dom';
import Error404 from './Error404';

const View2 = () => {
    const [open, setOpen] = useState(false);
    const [num, setNum] = useState(0);
    const location = useLocation();
    const handleOpen = (index) => {
        setNum(index);
        setOpen(true);
    };
    if (!location?.state?.data?.data) {
        return <Error404 />;
    }
    // console.log("Location", location?.state?.data?.data);
    const handleClose = () => {
        setOpen(false);
    };
    const arr = [{
        img: "https://marketplace.canva.com/EAFC1OcYOM0/2/0/1131w/canva-black-white-minimalist-simple-creative-freelancer-invoice-pyLVaYlAk1o.jpg",
        component: <First data={location?.state?.data?.data} />
    }, {
        img: "https://www.freshbooks.com/wp-content/uploads/2021/05/invoice-template-blue-985x1280.png",
        component: <Second data={location?.state?.data?.data} />
    }, {
        img: "https://files.jotform.com/jotformapps/professional-invoice-template-1778abbd1062a26ae87383dc4333678e.png?v=1679667859",
        component: <Third data={location?.state?.data?.data} />
    }, {
        img: "https://cdn-resources.highradius.com/resources/wp-content/uploads/2022/06/Invoice-Example.png",
        component: <Fourth data={location?.state?.data?.data} />
    }, {
        img: "https://www.adobe.com/express/create/media_13755cb6d0e22019d8b366313fc2ab3e1faec5539.jpeg?width=400&format=jpeg&optimize=medium",
        component: <Five data={location?.state?.data?.data} />
    }];
    const next = () => {
        if (num === arr.length - 1) {
            setNum(0);
        } else {
            setNum(prev => prev + 1);
        }
    };
    const prev = () => {
        if (num === 0) {
            setNum(arr.length - 1);
        } else {
            setNum(prev => prev - 1);
        }
    };
    const handleDownload = () => {
        console.log("Sumit Singh");
    };
    return (
        <>
            <div className='relative z-[1999]'>
                {open &&
                    <>
                        <div className='h-full w-[100vw] grid place-items-center bg-black bg-opacity-70 overflow-y-scroll fixed z-[2000]'> <p className='text-white top-[50px] text-lg left-[68%] absolute '>{num + 1}/{arr.length}</p>{arr[num].component}</div>
                        <p onClick={() => handleClose()} className="fixed top-[5%] z-[2001] right-10 invert cursor-pointer">
                            <lord-icon
                                src="https://cdn.lordicon.com/nhfyhmlt.json"
                                trigger="hover"
                                style={{ width: "50px", height: "50px" }}>
                            </lord-icon>
                        </p>
                        <p onClick={next} className="fixed top-[50%] z-[2001] right-10 invert cursor-pointer">
                            <lord-icon
                                src="https://cdn.lordicon.com/jxwksgwv.json"
                                trigger="click"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                        </p>
                        <p onClick={prev} className="fixed top-[50%] z-[2001] rotate-180 left-10 invert cursor-pointer text-white">
                            <lord-icon
                                src="https://cdn.lordicon.com/jxwksgwv.json"
                                trigger="click"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                        </p>
                    </>
                }
            </div>
            <div className='md:p-20 pt-20'>
                <p className='text-center text-4xl mb-10 md:p-5'>Best Themes </p>
                <div className='grid md:grid-cols-4 gap-10 place-items-center'>
                    {arr.map((item, index) => {
                        const delay = index * 150; // Calculate the delay based on the index
                        return (
                            <div key={index} data-aos="fade-up" data-aos-delay={delay === 600 ? 0 : delay} onClick={() => handleOpen(index)}>
                                <img onClick={handleDownload} className='border-[1px] border-black h-[400px] w-[90%] mx-auto' src={item.img} alt="Themes" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
};
export default View2;