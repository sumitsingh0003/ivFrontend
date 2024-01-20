import React, { useEffect, useState } from 'react';
import DropBox from '../features/DropBox';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ItemList from './ItemList';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const NewOne = new Date();   // get today's date
const sevenDaysFromNow = new Date(NewOne.getTime() + (7 * 24 * 60 * 60 * 1000));   // add 7 days to today's date
const newYear = sevenDaysFromNow.getFullYear();
const newMonth = String(sevenDaysFromNow.getMonth() + 1).padStart(2, '0');
const newDay = String(sevenDaysFromNow.getDate()).padStart(2, '0');



const formattedDate = `${year}-${month}-${day}`;
const newFormattedDate = `${newYear}-${newMonth}-${newDay}`;
const initialValues = {
    invoice: "INVOICE",
    company: "",
    name: "",
    img: "",
    imgName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    billTo: "Bill To:",
    billFrom: "Bill From:",
    tocompany: "",
    toname: "",
    toaddress: "",
    tocity: "",
    tostate: "",
    topincode: "",
    tocountry: "",
    invoiceNo: "Invoice No.",
    invoiceNoVal: "1",
    gstNo: "",
    togstNo: "",
    invoiceDate: "Invoice Date.",
    invoiceDateVal: formattedDate,
    invoiceDDate: "Due Date",
    invoiceDDateVal: newFormattedDate,
    item: "Item",
    quantity: "QTY",
    rate: "Rate",
    cgst: "CGST(%)",
    sgst: "SGST(%)",
    amount: "Amount",
    terms: "Terms:",
    conditions: "",
    note: "Note:",
    noteDescription: ""
};


const CreateInvoice = ({ setAllData }) => {
    // console.log("kads", sevenDaysFromNow.toDateString());
    // console.log("sds", today.toDateString());
    const [form, setForm] = useState(initialValues);
    const [select, setSelect] = useState("");
    const [select2, setSelect2] = useState("");
    const [selectData, setSelectData] = useState([]);
    const [selectData2, setSelectData2] = useState([]);
    const selector = useSelector(state => state.data.users);
    const handleSelect = (event) => {
        setSelect(event.target.value);
        // console.log("form", form);
        setForm({ ...form, address: event.target.value.address, name: event.target.value.name, company: event.target.value.company, gstNo: event.target.value.gstNo });
        // console.log("address", event.target.value.name);
    };
    const handleSelect2 = (event) => {
        setSelect2(event.target.value);
        // console.log("form", form);
        setForm({ ...form, toaddress: event.target.value.toaddress, toname: event.target.value.toname, tocompany: event.target.value.tocompany, togstNo: event.target.value.togstNo });
        // console.log("toaddress", event.target.value.toname);
    };
    useEffect(() => {
        const uniqueArr = [];
        selector.forEach(obj => {
            // console.log("selector", obj.data.Info);
            if (!uniqueArr.some(item => {
                return (
                    item.data.Info.address === obj.data.Info.address && item.data.Info.name === obj.data.Info.name && item.data.Info.company === obj.data.Info.company
                );
            })) {
                uniqueArr.push(obj);
            }
        });
        setSelectData(uniqueArr);
        // console.log("UniqueArr", uniqueArr);

        const uniqueArr2 = [];
        selector.forEach(obj => {
            // console.log("selector", obj.data.Info);
            if (!uniqueArr2.some(item => {
                return (
                    item.data.Info.toaddress === obj.data.Info.toaddress && item.data.Info.toname === obj.data.Info.toname && item.data.Info.tocompany === obj.data.Info.tocompany
                );
            })) {
                uniqueArr2.push(obj);
            }
        });
        setSelectData2(uniqueArr2);
    }, []);
    const handleChange = (e) => {
        // console.log("handleChange", e.target.name);
        if (e.target.name === "address" || e.target.name === "name" || e.target.name === "company") {
            setForm({ ...form, [e.target.name]: e.target.value });
            setSelect("");
        } else if (e.target.name === "toaddress" || e.target.name === "toname" || e.target.name === "tocompany") {
            setForm({ ...form, [e.target.name]: e.target.value });
            setSelect2("");
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        // console.log("form", form);
    };

    return (
        <>
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            <form className='border-2 border-black w-full p-8 text-base' method="post" encType="multipart/form-data">
                <div className='w-full'>
                    <TextField InputProps={{ sx: { "& input": { textAlign: "center", fontSize: "25px" } } }} variant="standard" placeholder='INVOICE' onChange={handleChange} value={form.invoice} name="invoice" type="text" className='text-[20px] w-full  overflow-hidden my-0 items-center' />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <DropBox form={form} setForm={setForm} />
                    </div>
                    <div className='flex justify-between space-x-2'>
                        <div className='flex flex-col'>
                            <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} placeholder="Invoice No." value={form.invoiceNo} name="invoiceNo" type="text" />
                            {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.gstNo} name="gstNo" type="text" /> */}
                            <TextField placeholder='Invoice Date.' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.invoiceDate} name="invoiceDate" type="text" />
                            <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} placeholder="Due Date" value={form.invoiceDDate} name="invoiceDDate" type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <TextField placeholder='Invoice Number' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.invoiceNoVal} name="invoiceNoVal" type="text" />
                            {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} placeholder="Gst Number" variant="standard" onChange={handleChange} value={form.gstNoVal} name="gstNoVal" type="text" /> */}
                            <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.invoiceDateVal} name="invoiceDateVal" type="date" />
                            <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.invoiceDDateVal} name="invoiceDDateVal" type="date" />
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
                        <TextField placeholder='Bill From:' InputProps={{ sx: { fontSize: "12px", color: 'black', fontWeight: "600" } }} variant="standard" onChange={handleChange} className="my-2 font-semibold" value={form.billFrom} name="billFrom" type="text" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.company} multiline name="company" type="text" placeholder='Your Company' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.name} multiline name="name" type="text" placeholder='Your Name' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.address} multiline name="address" type="text" placeholder="Company's Address" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.gstNo} name="gstNo" type="text" placeholder="Your GST NO." />
                        {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.city} name="city" type="text" placeholder='City' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.state} name="state" type="text" placeholder='State' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.pincode} name="pincode" type="text" placeholder='Pincode' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.country} name="country" type="text" placeholder='Country' /> */}
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
                                            item.data.Info.toname.length > 1 && <MenuItem key={index} value={item.data.Info}>
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
                        <TextField placeholder='Bill To:' InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} className="my-2 font-semibold" value={form.billTo} name="billTo" type="text" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.tocompany} multiline name="tocompany" type="text" placeholder="Your Client's Company" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.toname} multiline name="toname" type="text" placeholder="Your Client' s Name" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.toaddress} multiline name="toaddress" type="text" placeholder="Client's Address" />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.togstNo} name="togstNo" type="text" placeholder="Client's GST NO." />
                        {/* <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.tocity} name="tocity" type="text" placeholder='City' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.tostate} name="tostate" type="text" placeholder='State' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.topincode} name="topincode" type="text" placeholder='Pincode' />
                        <TextField InputProps={{ sx: { fontSize: "12px", color: 'black' } }} variant="standard" onChange={handleChange} value={form.tocountry} name="tocountry" type="text" placeholder='Country' /> */}
                    </div>
                </div>
                <div>
                    <div className='bg-gray-800 w-[900px] my-3 rounded-lg py-1 space-x-1 flex justify-between px-3 text-gray-300'>
                        {/* <TextField sx={{ width: "100%" }} InputProps={{ sx: { fontSize: "12px", color: 'black', width: "100%" } }} variant="standard" onChange={handleChange} value={form.item} name="item" type="text" placeholder='Country' /> */}
                        <input type="text" placeholder='Item' onChange={handleChange} value={form.item} name="item" className='!bg-gray-800 focus:bg-gray-700 w-full h-8' />
                        <input type="text" placeholder='QTY' onChange={handleChange} value={form.quantity} name="quantity" className=' !bg-gray-800 focus:bg-gray-700 w-[20%] !px-0 text-center h-8' />
                        <input type="text" placeholder='Rate' onChange={handleChange} value={form.rate} name="rate" className=' !bg-gray-800 focus:bg-gray-700 w-[20%] !px-0 text-center h-8' />
                        {/* <input type="text" onChange={handleChange} value={form.cgst} name="cgst" className='!bg-gray-800 focus:bg-gray-700 w-20 !px-0 text-center h-8' />
                        <input type="text" onChange={handleChange} value={form.sgst} name="sgst" className='!bg-gray-800 focus:bg-gray-700 w-20 !px-0 text-center h-8' /> */}
                        <input type="text" placeholder='Amount' onChange={handleChange} value={form.amount} name="amount" className=' !bg-gray-800 focus:bg-gray-700 w-[20%] !px-0 text-center h-8 ' />
                    </div>
                    <div>
                        <ItemList setForm={setForm} setAllData={setAllData} form={form} />
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateInvoice;