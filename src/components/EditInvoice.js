import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import EditList from './EditList';
import EditDropBox from '../features/EditDropBox';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
const EditInvoice = ({ setState, state }) => {
    const [select, setSelect] = useState("");
    const [select2, setSelect2] = useState("");
    const [selectData, setSelectData] = useState([]);
    const [selectData2, setSelectData2] = useState([]);
    const selector = useSelector(state => state.data.users);
    useEffect(() => {
        //First Bill from DropDown
        const uniqueArr = [];
        selector.forEach(obj => {
            if (!uniqueArr.some(item => {
                return (
                    item.data.Info.address === obj.data.Info.address && item.data.Info.name === obj.data.Info.name && item.data.Info.company === obj.data.Info.company
                );
            })) {
                uniqueArr.push(obj);
            }
        });
        setSelectData(uniqueArr);


        // Second Bill to DropDowm
        const uniqueArr2 = [];
        selector.forEach(obj1 => {
            if (!uniqueArr2.some(item => {
                return (
                    item.data.Info.toaddress === obj1.data.Info.toaddress && item.data.Info.toname === obj1.data.Info.toname && item.data.Info.tocompany === obj1.data.Info.tocompany
                );
            })) {
                uniqueArr2.push(obj1);
            }
        });
        setSelectData2(uniqueArr2);
        // console.log("UniqueArr2", uniqueArr2);
        // console.log("selector", selector);

        // eslint-disable-next-line
    }, []);

    // const a = state.data.Info;
    const handleChange = (e) => {
        setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, [e.target.name]: e.target.value } } });
    };
    const handleSelect = (event) => {
        setSelect(event.target.value);
        // console.log("Number", state);
        setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, address: event.target.value.address, name: event.target.value.name, company: event.target.value.company, gstNo: event.target.value.gstNo, togstNo: event.target.value.togstNo } } });
    };
    const handleSelect2 = (event) => {
        setSelect2(event.target.value);
        // console.log("Number", state);
        setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, toaddress: event.target.value.toaddress, toname: event.target.value.toname, tocompany: event.target.value.tocompany } } });
    };

    return (
        <form className='border-2 border-black w-full p-8 text-base'>
            <div className='w-full'>
                <TextField placeholder='INVOICE' InputProps={{ sx: { "& input": { textAlign: "center", fontSize: "25px" } } }} variant="standard" onChange={handleChange} value={state.data.Info.invoice} name="invoice" type="text" className='text-[20px] w-full  overflow-hidden my-0 items-center' />
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    <EditDropBox setState={setState} state={state} />
                </div>
                <div className='flex justify-between items-center space-x-2'>
                    <div className='flex flex-col'>
                        {/* <p><img src={state.data.Info.imgDataName} alt="" />Bahanu</p> */}
                        <TextField placeholder='Invoice No.' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceNo} name="invoiceNo" type="text" />
                        {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.gstNo} name="gstNo" type="text" /> */}
                        <TextField placeholder='Invoice Date.' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceDate} name="invoiceDate" type="text" />
                        <TextField placeholder='Due Date' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceDDate} name="invoiceDDate" type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <TextField placeholder='Invoice Number' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceNoVal} name="invoiceNoVal" type="text" />
                        {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} placeholder="Gst Number" value={state.data.Info.gstNoVal} name="gstNoVal" type="text" /> */}
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceDateVal} name="invoiceDateVal" type="date" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.invoiceDDateVal} name="invoiceDDateVal" type="date" />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center pt-8'>
                <div className='flex flex-col space-y-1'>
                    {selectData.length > 0 && selectData[0].data.Info.name && <Box sx={{ maxWidth: "140px" }}>
                        <FormControl variant="filled" fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={select}
                                label="Select"
                                onChange={handleSelect}
                            >
                                {/* <MenuItem MenuItem value={10}>Thirty</MenuItem>; */}
                                {selectData.map((item, index) => {
                                    return (
                                        item.data.Info.name.length > 0 && <MenuItem key={index} value={item.data.Info}>
                                            <div>
                                                <p>{item.data.Info.name}</p>
                                                <p className='text-[11px]'>{item.data.Info.company}</p>
                                            </div>
                                        </MenuItem>
                                        // console.log("item", item.data.Info.address)
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>}
                    <TextField placeholder='Bill From:' InputProps={{ sx: { fontSize: "12px", color: 'black', fontWeight: "600" } }} variant="standard" onChange={handleChange} className="my-2 font-semibold" value={state.data.Info.billFrom} name="billFrom" type="text" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.company} name="company" type="text" placeholder='Your Company' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.name} name="name" type="text" placeholder='Your Name' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.address} multiline name="address" type="text" placeholder="Company's Address" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.gstNo} name="gstNo" type="text" placeholder="Your GST NO." />
                    {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.city} name="city" type="text" placeholder='City' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.state} name="state" type="text" placeholder='State' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.pincode} name="pincode" type="text" placeholder='Pincode' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.country} name="country" type="text" placeholder='Country' /> */}
                </div>
                <div className='flex flex-col space-y-1'>
                    {selectData2.length > 0 && selectData2[0].data.Info.toname && <Box sx={{ maxWidth: "140px" }}>
                        <FormControl variant="filled" fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Select</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={select2}
                                label="Select"
                                onChange={handleSelect2}
                            >
                                {/* <MenuItem MenuItem value={10}>Thirty</MenuItem>; */}
                                {selectData2.map((item, index) => {
                                    return (
                                        item.data.Info.toname.length > 0 && <MenuItem key={index} value={item.data.Info}>
                                            <div>
                                                <p>{item.data.Info.toname}</p>
                                                <p className='text-[11px]'>{item.data.Info.tocompany}</p>
                                            </div>
                                        </MenuItem>
                                        // console.log("item", item.data.Info.address)
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Box>}
                    <TextField placeholder='Bill To:' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} className="my-2 font-semibold" value={state.data.Info.billTo} name="billTo" type="text" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.tocompany} name="tocompany" type="text" placeholder="Your Client's Company" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.toname} name="toname" type="text" placeholder="Your Client' s Name" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.toaddress} multiline name="toaddress" type="text" placeholder="Client's Address" />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.togstNo} name="togstNo" type="text" placeholder="Clients's GST NO." />
                    {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.tocity} name="tocity" type="text" placeholder='City' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.tostate} name="tostate" type="text" placeholder='State' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.topincode} name="topincode" type="text" placeholder='Pincode' />
                    <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={state.data.Info.tocountry} name="tocountry" type="text" placeholder='Country' /> */}
                </div>
            </div>
            <div>
                <div className='bg-gray-800 my-3 rounded-lg py-1 space-x-1 flex justify-between px-3 text-gray-300'>
                    <input placeholder='Item' type="text" onChange={handleChange} value={state.data.Info.item} name="item" className='!bg-gray-800 h-8 focus:bg-gray-700 w-full' />
                    <input placeholder='QTY' type="text" onChange={handleChange} value={state.data.Info.quantity} name="quantity" className=' !bg-gray-800 h-8 !px-0 focus:bg-gray-700 w-[20%] text-center' />
                    <input placeholder='Rate' type="text" onChange={handleChange} value={state.data.Info.rate} name="rate" className=' !bg-gray-800 h-8 !px-0 focus:bg-gray-700 w-[20%] text-center' />
                    {/* <input type="text" onChange={handleChange} value={state.data.Info.cgst} name="cgst" className='!bg-gray-800 h-8 !px-0 focus:bg-gray-700 w-20 text-center' />
                    <input type="text" onChange={handleChange} value={state.data.Info.sgst} name="sgst" className='!bg-gray-800 h-8 !px-0 focus:bg-gray-700 w-20 text-center' /> */}
                    <input placeholder='Amount' type="text" onChange={handleChange} value={state.data.Info.amount} name="amount" className=' !bg-gray-800 h-8 !px-0 focus:bg-gray-700 w-[20%] text-center ' />
                </div>
                <div>
                    <EditList setState={setState} state={state} />
                </div>
            </div>
        </form>
    );
};

export default EditInvoice;
