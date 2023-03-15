import React, { useRef } from 'react';

const PdfContainer = (props) => {
    const ref = useRef();
    const createPdf = () => props.createPdf(ref.current);
    return (
        <section className="pdf-container "> {/*w-[900px]*/}
            <section className="pdf-toolbar w-full flex justify-center my-5 top-0 absolute">
                <button className='bg-green-600 text-white rounded-md py-2 px-5' onClick={createPdf}>Download PDF</button>
            </section>
            <section className="pdf-body w-full" ref={ref}>
                {props.children}
            </section>
        </section>
    );
};

export default PdfContainer;
