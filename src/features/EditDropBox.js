import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const EditDropBox = ({ state, setState }) => {
    const [image, setImage] = useState(false);
    const onDrop = useCallback(acceptedFiles => {
        // console.log("AcceptedFiles", acceptedFiles);
        // console.log("object", URL.createObjectURL(acceptedFiles[0]));
        // setImage(URL.createObjectURL(acceptedFiles[0]));
        // console.log("object", acceptedFiles.target.value);
        setImage(acceptedFiles[0]);
        // console.log("image", image);

    }, []);

    useEffect(() => {
        if (image) { setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, img: image, imgName: image.name } } }); }
        // console.log("state", state);
        // console.log("image", image);

        // image && setForm({
        //     ...form, imgName: `C//Fake-Data/${image.name}`
        // });
        // setForm && image.name && console.log("image", image, image.name);
        // console.log("image", image);
        // console.log("imageName", image.name);
        // eslint-disable-next-line
    }, [image]);
    // console.log("form", form);

    // console.log("form", form);
    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false, accepts: ['image/jpeg', 'image/png', 'images/gif'] });

    return (
        <div className='w-40 h-40  cursor-pointer overflow-hidden border-2 border-dotted border-black grid place-items-center' {...getRootProps()}>
            <input {...getInputProps()} />
            <img className='object-contain' src={image ? URL.createObjectURL(image) : state.data.Info.imgDataName} alt="Logo" />
        </div>
    );
};
export default EditDropBox;



