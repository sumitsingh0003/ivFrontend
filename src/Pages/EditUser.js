import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userActions';
import EditInvoice from '../components/EditInvoice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const EditUser = ({ openEdit, setOpenEdit, propes }) => {
    const [state, setState] = useState(propes);
    const { authToken } = useSelector(state => state.auth.details);
    const dispatch = useDispatch();
    const selector = useSelector(state => state.data);
    const { users } = selector;

    const goBack = () => {
        setOpenEdit(false);
    };

    const handleEdit = () => {
        dispatch(updateUser(users, state, state._id), authToken);
        setOpenEdit(false);
    };
    return (
        <Dialog open={openEdit} TransitionComponent={Transition} scroll="body" keepMounted maxWidth="500px" onClose={goBack} aria-describedby="alert-dialog-slide-description" >
            <DialogContent>
                <Box sx={{ margin: "auto", maxWidth: '100%' }} >
                    <p className='text-center text-3xl font-semibold py-5'>Edit an Existing Invoice</p>
                    <EditInvoice setState={setState} state={state} />
                    <div className='flex justify-around my-5'>
                        <Button onClick={goBack} sx={{ width: "30%" }} color="error" variant="contained">Go Back</Button>
                        <Button onClick={handleEdit} sx={{ width: "50%" }} color="success" variant="contained">Update</Button>
                    </div>
                </Box >
            </DialogContent>
        </Dialog>
    );
};

export default EditUser;

