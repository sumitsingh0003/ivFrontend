import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/userActions';
import { giveAlert, removeModal } from '../redux/promptsActions';
import { useLocation } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
export default function Modal() {
    const [open, setOpen] = useState(false);
    const { authToken } = useSelector(state => state.auth.details);
    const selector = useSelector(state => state.prompts);
    const { modals } = selector;
    const location = useLocation();
    useEffect(() => {
        modals.id && setOpen(true);
        console.log("sjd", location.pathname);
        // eslint-disable-next-line 
    }, [modals]);

    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
        dispatch(giveAlert({
            type: "error",
            text: "Unable to Delete the Invoice"
        }));
        dispatch(removeModal());
    };

    const handleConfirm = () => {
        dispatch(deleteUser(modals.id, authToken));
        setOpen(false);
        dispatch(removeModal());
        // handleClose();
        // dispatch(giveAlert({
        //     type: "success",
        //     text: "Successfully Deleted the user"
        // }));
    };
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                maxWidth="md"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{modals.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {modals.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button color='error' variant="contained" onClick={handleClose}>{modals.backButton}</Button>
                    <Button color='success' variant="contained" onClick={handleConfirm}>{modals.confirmButton}</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
