import React, { useEffect, useState, memo } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from 'react-redux';
import { removeAlert } from '../redux/promptsActions';

// import Button from "@mui/material/Button";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertBox = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const selector = useSelector(state => state.prompts);
    const { alerts } = selector;
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log("alerts", alerts);
        alerts.text && setOpenAlert(true);
    }, [alerts.text]);
    const closeAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        } else {
            setOpenAlert(false);
            dispatch(removeAlert());
        }
    };
    // setTimeout(() => {
    //     dispatchEvent(removeAlert());
    // }, 3000);


    return (
        <>
            {/* <Button variant="outlined" onClick={handleAlert}>
                Open success snackbar
            </Button> */}
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={(event, reason) => closeAlert(event, reason)}>
                <Alert onClose={(event, reason) => closeAlert(event, reason)} severity={alerts.type} sx={{ width: "100%" }}>
                    {alerts.text}
                </Alert>
            </Snackbar>
        </>
    );
};

export default memo(AlertBox);