import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

const EditBottomInvoice = ({ setState, state, Amount }) => {
    const [input, setInput] = useState(0);
    const [show, setShow] = useState({
        service: state.data.subTotalData.serviceChargeVal !== "" ? true : false,
        tax: state.data.subTotalData.otherTaxVal !== "" ? true : false,
        discount: state.data.subTotalData.discountVal !== "" ? true : false
    });
    const handleAdd = (haha) => {
        setShow({ ...show, [haha]: true });
    };
    console.log("State", state);
    const handleRemove = (haha) => {
        setShow({ ...show, [haha]: false });
        if (haha === "service") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, serviceCharge: "Service Charge ($)", serviceChargeVal: "" } } });
            // setState({ ...state, serviceCharge: "Service Charge ($)", serviceChargeVal: "" });
        } else if (haha === "tax") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, otherTax: "Other Tax (%)", otherTaxVal: "" } } });
            // setState({ ...state, otherTax: "Other Tax (%)", otherTaxVal: "" });
        } else if (haha === "discount") {
            setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, discount: "Discount ($)", discountVal: "" } } });
            // setState({ ...state, discount: "Discount ($)", discountVal: "" });
        }
        setInput(prev => prev + 1);
    };

    const { subTotalData } = state.data;
    // console.log("subToagai", subTotalData);

    const Total = +Amount - +subTotalData.discountVal + +Amount * +subTotalData.otherTaxVal / 100 + +subTotalData.serviceChargeVal;
    const handleChange = (e) => {
        setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, [e.target.name]: e.target.value, subTotalVal: Total.toFixed(2) } } });
        setInput(prev => prev + 1);
    };
    useEffect(() => {
        setState({ ...state, data: { ...state.data, subTotalData: { ...state.data.subTotalData, subTotalVal: +Total.toFixed(2) } } });
        // eslint-disable-next-line
    }, [Amount, input]);
    const handleChange2 = (e) => {
        setState({ ...state, data: { ...state.data, Info: { ...state.data.Info, [e.target.name]: e.target.value } } });
    };
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex flex-col mt-10'>
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="terms" placeholder='Terms' variant="standard" type="text" onChange={handleChange2} value={state.data.Info.terms} />
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Terms and conditions - late fees, payment methods, delivery schedule" name="conditions" onChange={handleChange2} multiline value={state.data.Info.conditions} variant="standard" type="text" />
                </div>

                <div className='relative'>
                    <div className='space-x-4 py-4 flex justify-end'>
                        {!show.service && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("service")}>+ Service Charge</span>}
                        {!show.tax && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("tax")}>+ Tax</span>}
                        {!show.discount && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("discount")}>+ Discount</span>}
                    </div>
                    {show.service && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="serviceCharge" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.serviceCharge} />
                        <TextField placeholder='$' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="serviceChargeVal" onChange={handleChange} value={state.data.subTotalData.serviceChargeVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("service")} fontSize="small" />
                    </div>}
                    {show.tax && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="otherTax" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.otherTax} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="%" name="otherTaxVal" onChange={handleChange} value={state.data.subTotalData.otherTaxVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("tax")} fontSize="small" />
                    </div>}
                    {show.discount && <div className='flex  animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="discount" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.discount} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="discountVal" placeholder='$' onChange={handleChange} value={state.data.subTotalData.discountVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("discount")} fontSize="small" />
                    </div>}
                    <div className='flex gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="subTotal" variant="standard" type="text" onChange={handleChange} value={state.data.subTotalData.subTotal} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} name="subTotalVal" value={state.data.subTotalData.subTotalVal} variant="standard" type="text" />
                    </div>
                </div>
            </div>
            <div>
                {/* <input onClick={printData} type="submit" className='block mx-auto rounded-xl bg-green-500 px-5 py-2' value="Create Invoice" /> */}
            </div>
            {/* <ModalComp open={open} setOpen={setOpen} /> */}
        </>
    );
};

export default EditBottomInvoice;
