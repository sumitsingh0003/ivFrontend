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


const BottomInvoice = ({ form, setForm, itemList, setAllData }) => {
    const [show, setShow] = useState({
        service: false,
        tax: false,
        discount: false,
        gst: false
    });

    const [input, setInput] = useState({
        discount: "Discount",
        discountVal: "",
        gst: "GST",
        gstVal: "",
        serviceCharge: "Service Charge",
        serviceChargeVal: "",
        otherTax: "Other Tax",
        otherTaxVal: "",
        subTotal: "Sub Total",
        subTotalVal: "",
        amountPaid: "Amount Paid",
        amountPaidValue: "",
        balanceDue: "Balance Due",
        balanceDueValue: "",
        otherTaxType: true,
        discountType: true,
        serviceTaxType: true,
    });

    // const [inputType, setInputType] = useState({
    //     discount: true,
    //     gst: false,
    //     otherTax: false,
    //     serviceTax: true
    // });
    console.log("input", input);
    const handleInputType = (value) => setInput({ ...input, [value]: !input[value] });

    const handleAdd = (haha) => {
        setShow({ ...show, [haha]: true });
    };

    const handleRemove = (haha) => {
        setShow({ ...show, [haha]: false });
        if (haha === "service") {
            setInput({ ...input, serviceCharge: "Service Charge", serviceChargeVal: "" });
        } else if (haha === "tax") {
            setInput({ ...input, otherTax: "Other Tax", otherTaxVal: "" });
        } else if (haha === "discount") {
            setInput({ ...input, discount: "Discount", discountVal: "" });
        } else if (haha === "gst") {
            setInput({ ...input, gst: "GST", gstVal: "" });
        } else {
            alert("Some error Occured");
        }
    };

    const Amount = itemList.reduce((start, item) => {
        return start + +item.itemAmount;
    }, (0));

    // console.log("amount", Amount);
    useEffect(() => {
        // debugger;
        let discountedPrize = (input.discountType ? +(+Amount - +input.discountVal) : +(Amount - +Amount * (+input.discountVal / 100)));
        const addGst = +discountedPrize + (+discountedPrize * +input.gstVal / 100);
        const addOtherTax = (input.otherTaxType) ? +(+addGst + +input.otherTaxVal) : +(addGst + (addGst * +input.otherTaxVal / 100));
        const Total = (input.serviceTaxType) ? +(+addOtherTax + +input.serviceChargeVal) : +(addOtherTax + (addOtherTax * +input.serviceChargeVal / 100));
        const afterPay = Total - input.amountPaidValue;
        setInput({ ...input, subTotalVal: Total.toFixed(2), balanceDueValue: afterPay.toFixed(2) });
        // eslint-disable-next-line
    }, [Amount, input.discountVal, input.gstVal, input.otherTaxVal, input.amountPaidValue, input.serviceChargeVal, input.serviceTaxType, input.discountType, input.otherTaxType]);
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleChange2 = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        setAllData({ data: { Info: form, items: [...itemList], subTotalData: input } });
        // eslint-disable-next-line
    }, [form, itemList, input]);
    console.log("input", input);
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex flex-col mt-10'>
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="terms" placeholder='Terms' variant="standard" type="text" onChange={handleChange2} value={form.terms} />
                    <TextField multiline InputProps={{ sx: { mb: 3, "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Terms and conditions - late fees, payment methods, delivery schedule" name="conditions" onChange={handleChange2} value={form.conditions} variant="standard" type="text" />
                    <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="note" placeholder='Note' variant="standard" type="text" onChange={handleChange2} value={form.note} />
                    <TextField multiline InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Note - Which you Want to add for Your Customers to let them know about payment methods" name="noteDescription" onChange={handleChange2} value={form.noteDescription} variant="standard" type="text" />
                </div>
                <div>
                    <div className='space-x-4 py-4 flex justify-end'>
                        {!show.service && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("service")}>+ Service Charge</span>}
                        {!show.tax && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("tax")}>+ Tax</span>}
                        {!show.gst && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("gst")}>+ GST</span>}
                        {!show.discount && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("discount")}>+ Discount</span>}
                    </div>
                    {show.discount && <div className='flex items-center animate__animated animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Discount" name="discount" variant="standard" type="text" onChange={handleChange} value={input.discount} />
                        <div style={{ position: "relative" }}>
                            {input.discountType ? (
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
                                    name="discountVal" onChange={handleChange} value={input.discountVal}
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
                    {show.gst && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="GST" name="gst" variant="standard" type="text" onChange={handleChange} value={input.gst} />
                        {/* <div style={{ position: "relative" }}>
                            {input.gst ? (
                                <CurrencyRupeeSharpIcon
                                    fontSize="10"
                                    sx={{
                                        color: "action.active",
                                        position: "absolute",
                                        top: "25%",
                                        left: 10
                                    }}
                                />
                            ) : <PercentSharpIcon fontSize="10"
                                sx={{
                                    color: "action.active",
                                    position: "absolute",
                                    top: "25%",
                                    left: 10
                                }}
                            />}
                            <FormControl sx={{ width: "150px" }} variant="standard">
                                <Input
                                    id="standard-adornment-password"
                                    sx={{ pl: 4, "& input": { textAlign: "center" } }}
                                    placeholder="GST"
                                    type="number"
                                    name="gstVal" onChange={handleChange} value={input.gstVal}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                sx={{ padding: 0, "&:hover": { color: "#18a44b" } }}
                                                aria-label="toggle password visibility"
                                                onClick={() => handleInputType("gst")}
                                            >
                                                <LoopSharpIcon fontSize='small' />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div> */}
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} placeholder="GST (%)" name="gstVal" onChange={handleChange} value={input.gstVal} variant="standard" type="number" />
                        <CloseIcon className='absolute -right-6 top-2 hover:cursor-pointer' onClick={() => handleRemove("gst")} fontSize="small" />
                    </div>}
                    {show.tax && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Other Tax" name="otherTax" variant="standard" type="text" onChange={handleChange} value={input.otherTax} />
                        <div style={{ position: "relative" }}>
                            {input.otherTaxType ? (
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
                                    name="otherTaxVal" onChange={handleChange} value={input.otherTaxVal}
                                    endAdornment={
                                        <InputAdornment position="end">
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
                    {show.service && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Service Charge" name="serviceCharge" variant="standard" type="text" onChange={handleChange} value={input.serviceCharge} />
                        <div style={{ position: "relative" }}>
                            {input.serviceTaxType ? (
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
                                    name="serviceChargeVal" onChange={handleChange} value={input.serviceChargeVal}
                                    type="number"
                                    endAdornment={
                                        <InputAdornment position="end">
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
                    <div className='flex gap-x-5 pt-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "16px", color: 'black', width: '150px' } } }} name="subTotal" placeholder='Sub Total' variant="standard" type="text" onChange={handleChange} value={input.subTotal} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "16px", color: 'black', width: '150px', textAlign: "center" } } }} name="subTotalVal" value={input.subTotalVal} variant="standard" type="text" />
                    </div>
                    <div className='flex gap-x-5  justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "16px", color: 'black', width: '150px' } } }} name="amountPaid" placeholder="Amount Paid" variant="standard" type="text" onChange={handleChange} value={input.amountPaid} />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "16px", color: 'black', width: '150px', textAlign: "center" } } }} onChange={handleChange} placeholder="0.00" name="amountPaidValue" value={input.amountPaidValue} variant="standard" type="number" />
                    </div>
                    <div className='flex gap-x-5 justify-end'>
                        <TextField InputProps={{ sx: { "& input": { fontSize: "16px", fontWeight: 900, color: 'black', width: '150px' } } }} placeholder="Balance Due" name="balanceDue" variant="standard" type="text" onChange={handleChange} value={input.balanceDue} />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "16px", fontWeight: 900, color: 'black', width: '150px', textAlign: "center" } } }} name="balanceDueValue" value={input.balanceDueValue} variant="standard" type="text" />
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




















// import React, { useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';
// import 'animate.css';
// import CloseIcon from '@mui/icons-material/Close';
// // import Button from '@mui/material/Button';


// const BottomInvoice = ({ form, setForm, itemList, Amount, setAllData }) => {
//     const [show, setShow] = useState({
//         service: false,
//         tax: false,
//         discount: false
//     });
//     const [input, setInput] = useState({
//         discount: "Discount ($)",
//         discountVal: "",
//         serviceCharge: "Service Charge ($)",
//         serviceChargeVal: "",
//         otherTax: "Other Tax (%)",
//         otherTaxVal: "",
//         subTotal: "Sub Total",
//         subTotalVal: ""
//     });
//     const handleAdd = (haha) => {
//         setShow({ ...show, [haha]: true });
//     };
//     const handleRemove = (haha) => {
//         setShow({ ...show, [haha]: false });
//         if (haha === "service") {
//             setInput({ ...input, serviceCharge: "Service Charge ($)", serviceChargeVal: "" });
//         } else if (haha === "tax") {
//             setInput({ ...input, otherTax: "Other Tax (%)", otherTaxVal: "" });
//         } else if (haha === "discount") {
//             setInput({ ...input, discount: "Discount ($)", discountVal: "" });
//         }
//     };
//     const handleChange = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     // useEffect(() => {
//     //     const Total = +Amount - +input.discountVal + +Amount * +input.otherTaxVal / 100 + +input.serviceChargeVal;
//     //     setInput({ ...input, subTotalVal: Total.toFixed(2) });
//     //     // eslint-disable-next-line
//     // }, [Amount, input.discountVal, input.otherTaxVal, input.serviceChargeVal]);
//     useEffect(() => {
//         // const newItem = [...itemList];
//         const newItem = JSON.parse(JSON.stringify(itemList));
//         let SingleAmount = Number;
//         let c = 0;
//         newItem.map(item => {
//             return (
//                 item.itemAmount > 0 && c++
//             );
//         });
//         console.log("C", c);
//         const Total = newItem.map((item) => {
//             // debugger;
//             const discountedPrize = item.itemQuantity *
//                 item.itemRate - +input.discountVal / c;
//             return (
//                 SingleAmount = discountedPrize + (discountedPrize * item.itemCgst) / 100 +
//                 (discountedPrize * item.itemSgst) / 100,
//                 item.itemAmount === 0 ? item.itemAmount = 0 : item.itemAmount = SingleAmount
//             );
//         });
//         console.log("total", Total);
//         const DiscountTotal = newItem.reduce((start, item) => {
//             return start + +item.itemAmount;
//         }, (0));
//         setInput({ ...input, subTotalVal: DiscountTotal.toFixed(2) });
//         console.log("DiscountTotal", DiscountTotal);
//     }, [itemList]);

//     const handleChange2 = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };
//     useEffect(() => {
//         setAllData({ data: { Info: form, items: [...itemList], subTotalData: input } });
//     }, [form, itemList, input]);
//     return (
//         <>
//             <div className='flex justify-between'>
//                 <div className='flex flex-col mt-10'>
//                     <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} name="terms" placeholder='Terms' variant="standard" type="text" onChange={handleChange2} value={form.terms} />
//                     <TextField multiline InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: 400, } } }} placeholder="Terms and conditions - late fees, payment methods, delivery schedule" name="conditions" onChange={handleChange2} value={form.conditions} variant="standard" type="text" />
//                 </div>

//                 <div>
//                     <div className='space-x-4 py-4 flex justify-end'>
//                         {!show.service && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("service")}>+ Service Charge</span>}
//                         {!show.tax && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("tax")}>+ Tax</span>}
//                         {!show.discount && <span className='text-sm animate__animated animate__fadeInUp text-green-600 px-1 cursor-pointer font-semibold' onClick={() => handleAdd("discount")}>+ Discount</span>}
//                     </div>
//                     {show.service && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Service Charge" name="serviceCharge" variant="standard" type="text" onChange={handleChange} value={input.serviceCharge} />
//                         <TextField placeholder='$' InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="serviceChargeVal" onChange={handleChange} value={input.serviceChargeVal} variant="standard" type="number" />
//                         <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("service")} fontSize="small" />
//                     </div>}
//                     {show.discount && <div className='flex items-center animate__animated animate__fadeInDown gap-x-5 justify-end'>
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Discount" name="discount" variant="standard" type="text" onChange={handleChange} value={input.discount} />
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="discountVal" placeholder='$' onChange={handleChange} value={input.discountVal} variant="standard" type="number" />
//                         <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("discount")} fontSize="small" />
//                     </div>}
//                     {show.tax && <div className='flex animate__animated items-center animate__fadeInDown gap-x-5 justify-end'>
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', } } }} placeholder="Other Tax" name="otherTax" variant="standard" type="text" onChange={handleChange} value={input.otherTax} />
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} placeholder="%" name="otherTaxVal" onChange={handleChange} value={input.otherTaxVal} variant="standard" type="number" />
//                         <CloseIcon className='absolute -right-6 hover:cursor-pointer' onClick={() => handleRemove("tax")} fontSize="small" />
//                     </div>}
//                     <div className='flex gap-x-5 py-5  justify-end'>
//                         <TextField InputProps={{ sx: { "& input": { fontSize: "14px", color: 'black', width: '150px' } } }} name="subTotal" variant="standard" type="text" onChange={handleChange} value={input.subTotal} />
//                         <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "14px", color: 'black', width: '150px', textAlign: "center" } } }} name="subTotalVal" value={input.subTotalVal} variant="standard" type="text" />
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 {/* <input onClick={printData} type="submit" className='block mx-auto rounded-xl bg-green-500 px-5 py-2' value="Create Invoice" /> */}
//             </div>
//             {/* <ModalComp open={open} setOpen={setOpen} /> */}
//         </>
//     );
// };
// export default BottomInvoice;













// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import FilledInput from "@mui/material/FilledInput";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
// import LoopSharpIcon from "@mui/icons-material/LoopSharp";
// import PercentSharpIcon from "@mui/icons-material/PercentSharp";

// export default function InputAdornments() {
//     const [showPassword, setShowPassword] = React.useState(false);

//     const ()=>handleInputType() = () => setShowPassword((show) => !show);
//     return (
//         <div style={{ position: "absolute" }}>
//             {showPassword && (
//                 <CurrencyRupeeSharpIcon
//                     sx={{
//                         color: "action.active",
//                         position: "absolute",
//                         top: "42%",
//                         left: 10
//                     }}
//                 />
//             )}
//             <FormControl sx={{ width: "25ch" }} variant="standard">
//                 <FilledInput
//                     id="standard-adornment-password"
//                     sx={{ pl: 3 }}
//                     type={showPassword ? "text" : "text"}
//                     endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={()=>handleInputType()}
//                             >
//                                 <LoopSharpIcon />
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 />
//             </FormControl>
//             {!showPassword && (
//                 <PercentSharpIcon
//                     sx={{
//                         color: "action.active",
//                         position: "absolute",
//                         top: "42%",
//                         left: 120
//                     }}
//                 />
//             )}
//         </div>
//     );
// }
