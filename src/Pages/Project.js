import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import "../css/spinner.css";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/userActions';
import Modal from '../Prompts/Modal';
import View from './View';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import AlertBox from '../Prompts/AlertBox';
import { giveModal } from '../redux/promptsActions';
import { Link, useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const Project = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [preview, setPreview] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const [propes, setPropes] = useState("");
    const dispatch = useDispatch();
    const selector = useSelector(state => state.data);
    const { authToken } = useSelector(state => state.auth.details);
    const { users } = selector;
    // console.log("users: ", users);
    const alertSelector = useSelector(state => state.prompts);
    const { alerts } = alertSelector;
    const { loading } = useSelector(state => state.loading);
    const navigate = useNavigate();
    // const { modals } = selector2;
    // console.log("auth", authToken);
    useEffect(() => {
        if (!users.length) {
            localStorage.getItem("token") && dispatch(loadUsers(authToken));
        }
        // Dependency se dispatch hataya hai 
        // eslint-disable-next-line
    }, []);

    const createNewUser = () => {
        setOpenCreate(true);
    };

    const handleEdit = (item) => {
        setPropes({ ...item });
        setOpenEdit(true);
    };
// eslint-disable-next-line
    const handleView = (item) => {
        // eslint-disable-next-line
        setPreviewData(item);
        setPreview(true);
    };

    const handleOpenDelete = (id) => {
        console.log(id);
        dispatch(giveModal({
            id: id,
            title: "DELETE",
            description: "Are you sure, you want to delete it permanently ?",
            backButton: "No, Keep",
            confirmButton: "Yes, Delete"
        }));
        // setOpen(true);
        // setPropes(NewProps);
    };

    return (
        <>   <main className="sj">
            <section className="j">
                <div className="_ tr om or nb ti w tc" aria-hidden="true">
                    <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
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
                {
                    localStorage.getItem("token") ? <div>
                        <div className='text-center pt-20 pb-5'>
                            <Button onClick={createNewUser} variant="contained">Create New Invoice</Button>
                        </div>
                        {users.length > 0 ? <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} stickyHeader aria-label="customized table">
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell>Client Name</StyledTableCell>
                                        <StyledTableCell align="center">Client's Company</StyledTableCell>
                                        <StyledTableCell align="center">Due Date</StyledTableCell>
                                        <StyledTableCell align="center">Amount</StyledTableCell>
                                        <StyledTableCell align="center">Options</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.length >= 1 && users.map((item) => (
                                        <StyledTableRow key={item._id} >
                                            <StyledTableCell component="th" scope="row">
                                                {item.data.Info.toname}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{item.data.Info.tocompany}</StyledTableCell>
                                            <StyledTableCell align="center">{item.data.Info.invoiceDateVal}</StyledTableCell>
                                            <StyledTableCell align="center">{item.data.subTotalData.balanceDueValue}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <div className='flex justify-center items-center space-x-5'>
                                                    <i onClick={() => handleEdit(item)} className="cursor-pointer hover:scale-125 text-blue-600 duration-300 fa-solid fa-pen-to-square text-xl"></i>
                                                    {/* <i onClick={() => handleView(item)} className="hover:scale-125 duration-300 text-green-500 cursor-pointer fa-solid fa-download text-xl"></i> */}
                                                    <i onClick={() => navigate("/download", { state: { data: item } })} className="hover:scale-125 duration-300 text-green-500 cursor-pointer fa-solid fa-download text-xl"></i>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jmkrnisz.json"
                                                        onClick={() => handleOpenDelete(item._id)}
                                                        trigger="hover"
                                                        colors="primary:#b30808"
                                                        style={{ width: "25px", height: "25px", cursor: "pointer", }}>
                                                    </lord-icon>
                                                </div>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> : <div className="sc tj fv vs">
                            <div className="li ls gs go">
                                <div className="sh tj ce">
                                    <h1 className="h1 nw">No Invoices to Show Create New Invoices</h1>
                                    <div className="nx">
                                        {/* <Link className="n cz au pl" to="/Login">Login</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {preview && <View previewData={previewData} preview={preview} setPreview={setPreview} />}
                        {openCreate && <CreateUser openCreate={openCreate} setOpenCreate={setOpenCreate} />}
                        {openEdit && <EditUser openEdit={openEdit} setOpenEdit={setOpenEdit} propes={propes} />}
                        {loading && <div className='w-fit absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[-50%]'><div className="loadingio-spinner-double-ring-2g75zcwohh3"><div className="ldio-pa9vvwa2xm"><div></div><div></div><div><div></div></div><div><div></div></div></div></div></div>}
                        <Modal />
                        {/* <Registration /> */}
                        {alerts.text && <AlertBox />}
                    </div> : <div className="sc tj fv vs">
                        <div className="li ls gs go">
                            <div className="sh tj ce">
                                <h1 className="h1 nw">You have to login first to Create Invoices</h1>
                                <div className="nx">
                                    <Link className="n cz au pl" to="/Login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>}
            </section>
        </main>
        </>
    );
};

export default Project;
