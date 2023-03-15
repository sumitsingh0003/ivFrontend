import React from 'react';

const First = () => {
    return (
        <>
            <div className='w-[95%] mx-auto'>
                <div className='text-center text-[11px] sm:text-[16px] md:text-[19px]'>Invoice</div>
                <div className='flex justify-between items-center'>
                    <div className='w-[15%] '><img className='aspect-square object-cover' src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" alt="" /></div>
                    <div className='flex space-x-5 font-semibold text-[8px] sm:text-[14px] md:text-[15px]'>
                        <div>
                            <p>Invoice Number</p>
                            <p>Date</p>
                            <p>DueDate</p>
                        </div>
                        <div className='text-center'>
                            <p>01</p>
                            <p>12/23/12</p>
                            <p>12/12/12</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between text-center items-center text-[8px] sm:text-[14px] md:text-[15px]'>
                    <div className=''>
                        <p className='font-semibold'>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                        <p>Haha</p>
                    </div>
                </div>
                <div className=' text-center text-[7px] sm:text-[12px] md:text-[15px]'>
                    <div className='flex font-semibold pl-3 py-1 bg-gray-600 text-gray-200'>
                        <p className='w-[50%] text-left'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                    </div>
                    <div className='flex py-1 pl-3 text-gray-800'>
                        <p className='w-[50%] text-left'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                        <p className='w-[10%]'>bhanu</p>
                    </div>
                </div>
                <div className='flex justify-end text-[11px] sm:text-[16px] md:text-[19px]'>
                    <div>
                        <p>Data</p>
                        <p>Data</p>
                        <p>Data</p>
                        <p>Data</p>
                    </div>
                    <div>
                        <p>Data</p>
                        <p>Data</p>
                        <p>Data</p>
                        <p>Data</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default First;
