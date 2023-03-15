import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import 'animate.css';
import CloseIcon from '@mui/icons-material/Close';
// import Button from '@mui/material/Button';


const BottomInvoice = ({ form, setForm, itemList, Amount, setAllData }) => {
    const [show, setShow] = useState({
        service: false,
        tax: false,
        discount: false
    });
    const [input, setInput] = useState({
        discount: "Discount ($)",
        discountVal: "",
        serviceCharge: "Service Charge ($)",
        serviceChargeVal: "",
        otherTax: "Other Tax (%)",
        otherTaxVal: "",
        subTotal: "Sub Total",
        subTotalVal: ""
    });
    const handleAdd = (haha) => {
        setShow({ ...show, [haha]: true });
    };
    const handleRemove = (haha) => {
        setShow({ ...show, [haha]: false });
        if (haha === "service") {
            setInput({ ...input, serviceCharge: "Service Charge ($)", serviceChargeVal: "" });
        } else if (haha === "tax") {
            setInput({ ...input, otherTax: "Other Tax (%)", otherTaxVal: "" });
        } else if (haha === "discount") {
            setInput({ ...input, discount: "Discount ($)", discountVal: "" });
        }
    };

    useEffect(() => {
        const Total = +Amount - +input.discountVal + +Amount * +input.otherTaxVal / 100 + +input.serviceChargeVal;
        setInput({ ...input, subTotalVal: Total.toFixed(2) });
        // eslint-disable-next-line
    }, [Amount, input.discountVal, input.otherTaxVal, input.serviceChargeVal]);
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleChange2 = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        setAllData({ data: { Info: form, items: [...itemList], subTotalData: input } });
    }, [form, itemList, input]);
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex flex-col mt-10'>
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="terms" placeholder='Terms' variant="standard" type="text" onChange={handleChange2} value={form.terms} />
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Terms and conditions - late fees, payment methods, delivery schedule" name="conditions" onChange={handleChange2} value={form.conditions} variant="standard" type="text" />
                </div>

                <div>
                    <div className='space-x-4 py-4 flex justify-end'>
                        {!show.service && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("service")}>+ Service Charge</span>}
                        {!show.tax && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("tax")}>+ Tax</span>}
                        {!show.discount && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("discount")}>+ Discount</span>}
                    </div>
                    {show.service && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Service Charge" name="serviceCharge" variant="standard" type="text" onChange={handleChange} value={input.serviceCharge} />
                        <TextField placeholder='$' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="serviceChargeVal" onChange={handleChange} value={input.serviceChargeVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("service")} fontSize="small" />
                    </div>}
                    {show.discount && <div className='flex items-center animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Discount" name="discount" variant="standard" type="text" onChange={handleChange} value={input.discount} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="discountVal" placeholder='$' onChange={handleChange} value={input.discountVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("discount")} fontSize="small" />
                    </div>}
                    {show.tax && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Other Tax" name="otherTax" variant="standard" type="text" onChange={handleChange} value={input.otherTax} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} placeholder="%" name="otherTaxVal" onChange={handleChange} value={input.otherTaxVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("tax")} fontSize="small" />
                    </div>}
                    <div className='flex gap-x-5 py-5  justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px' } } }} name="subTotal" variant="standard" type="text" onChange={handleChange} value={input.subTotal} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="subTotalVal" value={input.subTotalVal} variant="standard" type="text" />
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
export default BottomInvoice;