import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropBox = ({ form, setForm }) => {
    const [image, setImage] = useState(false);
    const onDrop = useCallback(acceptedFiles => {
        console.log("AcceptedFiles", acceptedFiles);
        setImage(acceptedFiles[0]);
    }, []);

    useEffect(() => {
        if (image) { setForm({ ...form, img: image, imgName: image.name }); }
        // eslint-disable-next-line
    }, [image]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false, accepts: ['image/jpeg', 'image/png', 'images/gif'] });

    return (
        <div className='w-40 h-40 cursor-pointer overflow-hidden border-2 border-dotted border-black grid place-items-center' {...getRootProps()}>
            <input {...getInputProps()} />
            {image ? <img className='object-contain' src={URL.createObjectURL(image)} alt="Logo" /> :
                isDragActive ?
                    "" : <p>Company's Logo</p>
            }
        </div>
    );
};
export default DropBox;