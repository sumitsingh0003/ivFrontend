import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import 'animate.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import Input from '@mui/material/Input';
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import LoopSharpIcon from "@mui/icons-material/LoopSharp";
import PercentSharpIcon from "@mui/icons-material/PercentSharp";

const EditBottomInvoice = ({ setState, state }) => {
    const [input, setInput] = useState(0);
    const [show, setShow] = useState({
        service: state.data.subTotalData.serviceChargeVal !== "" ? true : false,
        tax: state.data.subTotalData.otherTaxVal !== "" ? true : false,
        discount: state.data.subTotalData.discountVal !== "" ? true : false,
        gst: state.data.subTotalData.gstVal !== "" ? true : false
    });
    // const [inputType, setInputType] = useState({
    //     discount: true,
    //     gst: false,
    //     otherTax: false,
    //     serviceTax: true
    // });
    const handleInputType = (value) => setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, [value]: !state.data.subTotalData[value] } } });
    // const handleInputType = (value) => setInputType({ ...inputType, [value]: !inputType[value] });
    // setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, [e.target.name]: e.target.value } } });
    const Amount = state.data.items.reduce((start, item) => {
        return start + +item.itemAmount;
    }, (0));
    const handleAdd = (haha) => {
        setShow({ ...show, [haha]: true });
    };
    // console.log("State", state);
    const handleRemove = (haha) => {
        setShow({ ...show, [haha]: false });
        if (haha === "service") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, serviceCharge: "Service Charge", serviceChargeVal: "" } } });
            // setState({ ...state, serviceCharge: "Service Charge ($)", serviceChargeVal: "" });
        } else if (haha === "tax") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, otherTax: "Other Tax", otherTaxVal: "" } } });
            // setState({ ...state, otherTax: "Other Tax (%)", otherTaxVal: "" });
        } else if (haha === "discount") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, discount: "Discount", discountVal: "" } } });
            // setState({ ...state, discount: "Discount ($)", discountVal: "" });
        } else if (haha === "gst") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, gst: "GST", gstVal: "" } } });
            // setState({ ...state, discount: "Discount ($)", discountVal: "" });
        }
        setInput(prev => prev + 1);
    };

    const { subTotalData } = state.data;
    // console.log("subToagai", subTotalData);

    // const Total = +Amount - +subTotalData.discountVal + +Amount * +subTotalData.otherTaxVal / 100 + +subTotalData.serviceChargeVal;
    // debugger;
    let discountedPrize = (state.data.subTotalData.discountType ? +(+Amount - +subTotalData.discountVal) : +(Amount - +Amount * (+subTotalData.discountVal / 100)));
    const addGst = +discountedPrize + (+discountedPrize * +subTotalData.gstVal / 100);
    const addOtherTax = (state.data.subTotalData.otherTaxType) ? +(+addGst + +subTotalData.otherTaxVal) : +(addGst + (addGst * +subTotalData.otherTaxVal / 100));
    const Total = (state.data.subTotalData.serviceTaxType) ? +(+addOtherTax + +subTotalData.serviceChargeVal) : +(addOtherTax + (addOtherTax * +subTotalData.serviceChargeVal / 100));
    const afterPay = Total - (+subTotalData.amountPaidValue === "" ? 0 : +subTotalData.amountPaidValue);
    const handleChange = (e) => {
        setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, [e.target.name]: e.target.value } } });
        setInput(prev => prev + 1);
    };
    useEffect(() => {
        setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, subTotalVal: +Total.toFixed(2), balanceDueValue: afterPay.toFixed(2) } } });
        // eslint-disable-next-line
    }, [Amount, input, state.data.subTotalData.discountType, state.data.subTotalData.otherTaxType, state.data.subTotalData.serviceTaxType]);
    const handleChange2 = (e) => {
        setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, [e.target.name]: e.target.value } } });
    };
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex flex-col mt-10'>
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="terms" placeholder='Terms' variant="standard" type="text" onChange={handleChange2} value={state.data.Info.terms} />
                    <TextField InputProps={{ sx: { mb: 3, "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Terms and conditions - late fees, payment methods, delivery schedule" name="conditions" onChange={handleChange2} multiline value={state.data.Info.conditions} variant="standard" type="text" />
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="note" placeholder='Note' variant="standard" type="text" onChange={handleChange2} value={state.data.Info.note} />
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Note - Which you Want to add for Your Customers to let them know about payment methods" name="noteDescription" onChange={handleChange2} multiline value={state.data.Info.noteDescription} variant="standard" type="text" />
                </div>

                <div className='relative'>
                    <div className='space-x-4 py-4 flex justify-end'>
                        {!show.service && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("service")}>+ Service Charge</span>}
                        {!show.tax && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("tax")}>+ Tax</span>}
                        {!show.gst && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("gst")}>+ GST</span>}
                        {!show.discount && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("discount")}>+ Discount</span>}
                    </div>
                    {show.discount && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField placeholder='Discount' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="discount" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.discount} />
                        <div style={{ position: "relative" }}>
                            {state.data.subTotalData.discountType ? (
                                <CurrencyRupeeSharpIcon
                                    fontSize="10"
                                    sx={{
                                        color: "action.active",
                                        position: "absolute",
                                        top: "25%",
                                        left: 0
                                    }}
                                />
                            ) : <PercentSharpIcon fontSize="10"
                                sx={{
                                    color: "action.active",
                                    position: "absolute",
                                    top: "25%",
                                    left: 0
                                }}
                            />}
                            <FormControl sx={{ width: "150px" }} variant="standard">
                                <Input
                                    id="standard-adornment-password"
                                    sx={{ pl: 2, "& input": { textAlign: "center" } }}
                                    placeholder="Discount"
                                    type="number"
                                    name="discountVal" onChange={handleChange} value={state.data.subTotalData.discountVal}
                                    endAdornment={
                                        <InputAdornment fontSize="small" position="end">
                                            <IconButton
                                                sx={{ padding: 0, "&:hover": { color: "#18a44b" } }}
                                                aria-label="toggle password visibility"
                                                onClick={() => handleInputType("discountType")}
                                            >
                                                <LoopSharpIcon fontSize='small' />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <CloseIcon className='absolute -right-6 top-2 hover:cursor-pointer' onClick={() => handleRemove("discount")} fontSize="small" />
                    </div>}
                    {show.gst && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField placeholder='GST' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="gst" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.gst} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="gstVal" placeholder='GST (%)' onChange={handleChange} value={state.data.subTotalData.gstVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 top-2 hover:cursor-pointer' onClick={() => handleRemove("gst")} fontSize="small" />
                    </div>}
                    {show.tax && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField placeholder='Other Tax' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="otherTax" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.otherTax} />
                        <div style={{ position: "relative" }}>
                            {state.data.subTotalData.otherTaxType ? (
                                <CurrencyRupeeSharpIcon
                                    fontSize="10"
                                    sx={{
                                        color: "action.active",
                                        position: "absolute",
                                        top: "25%",
                                        left: 0
                                    }}
                                />
                            ) : <PercentSharpIcon fontSize="10"
                                sx={{
                                    color: "action.active",
                                    position: "absolute",
                                    top: "25%",
                                    left: 0
                                }}
                            />}
                            <FormControl sx={{ width: "150px" }} variant="standard">
                                <Input
                                    id="standard-adornment-password"
                                    sx={{ pl: 2, "& input": { textAlign: "center" } }}
                                    placeholder="Other Tax"
                                    type="number"
                                    name="otherTaxVal" onChange={handleChange} value={state.data.subTotalData.otherTaxVal}
                                    endAdornment={
                                        <InputAdornment fontSize="small" position="end">
                                            <IconButton
                                                sx={{ padding: 0, "&:hover": { color: "#18a44b" } }}
                                                aria-label="toggle password visibility"
                                                onClick={() => handleInputType("otherTaxType")}
                                            >
                                                <LoopSharpIcon fontSize='small' />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <CloseIcon className='absolute -right-6 top-2 hover:cursor-pointer' onClick={() => handleRemove("tax")} fontSize="small" />
                    </div>}
                    {show.service && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField placeholder='Service Charge' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="serviceCharge" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.serviceCharge} />
                        <div style={{ position: "relative" }}>
                            {state.data.subTotalData.serviceTaxType ? (
                                <CurrencyRupeeSharpIcon
                                    fontSize="10"
                                    sx={{
                                        color: "action.active",
                                        position: "absolute",
                                        top: "25%",
                                        left: 0
                                    }}
                                />
                            ) : <PercentSharpIcon fontSize="10"
                                sx={{
                                    color: "action.active",
                                    position: "absolute",
                                    top: "25%",
                                    left: 0
                                }}
                            />}
                            <FormControl sx={{ width: "150px" }} variant="standard">
                                <Input
                                    id="standard-adornment-password"
                                    sx={{ pl: 2, "& input": { textAlign: "center" } }}
                                    placeholder="Service Tax"
                                    type="number"
                                    name="serviceChargeVal" onChange={handleChange} value={state.data.subTotalData.serviceChargeVal}
                                    endAdornment={
                                        <InputAdornment fontSize="small" position="end">
                                            <IconButton
                                                sx={{ padding: 0, "&:hover": { color: "#18a44b" } }}
                                                aria-label="toggle password visibility"
                                                onClick={() => handleInputType("serviceTaxType")}
                                            >
                                                <LoopSharpIcon fontSize='small' />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <CloseIcon className='absolute -right-6 top-2 hover:cursor-pointer' onClick={() => handleRemove("service")} fontSize="small" />
                    </div>}
                    <div className='flex gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px' } } }} name="subTotal" placeholder='Sub Total' variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.subTotal} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="subTotalVal" value={state.data.subTotalData.subTotalVal} variant="standard" type="text" />
                    </div>
                    <div className='flex gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px' } } }} name="amountPaid" placeholder="Amount Paid" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.amountPaid} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} placeholder="0.00" name="amountPaidValue" onChange={handleChange} value={state.data.subTotalData.amountPaidValue} variant="standard" type="text" />
                    </div>
                    <div className='flex gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', fontWeight: 900 } } }} placeholder="Balance Due" name="balanceDue" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.balanceDue} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', fontWeight: 900, textAlign: "center" } } }} name="balanceDueValue" value={state.data.subTotalData.balanceDueValue} variant="standard" type="text" />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    );
};

export default EditBottomInvoice;
