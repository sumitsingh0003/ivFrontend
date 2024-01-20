import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/userActions';
// import { giveAlert } from '../redux/promptsActions';
import CreateInvoice from '../components/CreateInvoice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const CreateUser = ({ openCreate, setOpenCreate }) => {
    const [allData, setAllData] = useState({});
    const { authToken } = useSelector(state => state.auth.details);
    const dispatch = useDispatch();

    const goBack = () => {
        setOpenCreate(false);
        // dispatch(giveAlert({
        //     type: "error",
        //     text: "Unable to Create New User"
        // }));
    };
    const handleCreate = () => {
        // console.log("New User", allData);
        if (allData.data.Info.img === "") {
            return alert("Company Logo is Required");
        }
        if (allData.data.items.length === 1 && allData.data.items.at(0).itemAmount === 0) {
            return alert("Atleast one Item List is Required");
        }
        if (allData.data.subTotalData.subTotalVal < 0) {
            return alert("SubTotal Cannot be less than 0");
        }
        if (allData.data.items.at(-1).itemAmount === 0) {
            return alert("Remove the last Itemlist or Add the item to it");
        }
        dispatch(createUser(allData, authToken));
        // dispatch(giveAlert({
        //     type: "success",
        //     text: "Successfully Created a New User"
        // }));
        setOpenCreate(false);
    };
    return (
        <Dialog open={openCreate} TransitionComponent={Transition} scroll="body" maxWidth="800px" keepMounted onClose={goBack} aria-describedby="alert-dialog-slide-description">
            <DialogContent>
                <Box sx={{ margin: "auto", maxWidth: '100%' }} >
                    <p className='text-center text-3xl font-semibold pb-5'>Create a New Invoice</p>
                    <CreateInvoice setAllData={setAllData} />
                    <div className='flex justify-around my-5'>
                        <Button onClick={goBack} sx={{ width: "30%" }} color="error" variant="contained">Go Back</Button>
                        <Button onClick={handleCreate} sx={{ width: "50%" }} color="success" variant="contained">Create</Button>
                    </div>
                </Box >
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog >
    );
};

export default CreateUser;