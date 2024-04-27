import React from 'react';
// import { Box } from '@mui/material';
import Doc from '../features/DocService';
import PdfContainer from '../features/PdfContainer';
const Fourth = ({ data }) => {
    // const { data } = previewData;
    console.log(data);
    const createPdf = (html) => Doc.createPdf(html);
    return (
        <>
            <PdfContainer createPdf={createPdf}>
                <div className="border-1 bg-blue-500 font-[DejaVu Sans,Sans-serif] text-black text-sm w-[600px] aspect-[1/1.2] border-black p-5">{/*aspect-[1/1.2]*/}
                    <p className='text-center text-2xl'>{data.Info.invoice}</p>
                    <div className='flex justify-between items-center'>
                        <div>{data.Info.imgDataName && <img className='w-28 h-28 object-contain' src={`${data.Info.imgDataName}`} alt="logo" />}</div>
                        <div className='flex space-x-2'>
                            <div>
                                <p>{data.Info.invoiceNo}</p>
                                <p>{data.Info.invoiceDate}</p>
                                <p>{data.Info.invoiceDDate}</p>
                            </div>
                            <div>
                                <p>{data.Info.invoiceNoVal}</p>
                                <p>{data.Info.invoiceDateVal}</p>
                                <p>{data.Info.invoiceDDateVal}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-5 justify-between items-center'>
                        <div className='w-fit space-y-1'>
                            <p>{data.Info.billFrom}</p>
                            <p>{data.Info.company}</p>
                            <p>{data.Info.name}</p>
                            <p className='max-w-[128px]'>{data.Info.address}</p>
                            {/* <p>{data.Info.city}</p>
                                    <p>{data.Info.state}</p>
                                    <p>{data.Info.pincode}</p>
                                    <p>{data.Info.country}</p> */}
                        </div>
                        <div className='w-fit space-y-1'>
                            <p>{data.Info.billTo}</p>
                            <p>{data.Info.tocompany}</p>
                            <p id='pdf_inside_name'>{data.Info.toname}</p>
                            <p className='max-w-[128px]'>{data.Info.toaddress}</p>
                            {/* <p>{data.Info.tocity}</p>
                                    <p>{data.Info.tostate}</p>
                                    <p>{data.Info.topincode}</p>
                                    <p>{data.Info.tocountry}</p> */}
                        </div>
                    </div>
                    <div className='flex bg-gray-700 text-sm text-white px-3 justify-between py-2'>
                        <div>
                            <p className='w-40'>{data.Info.item}</p>
                        </div>
                        <div className='flex space-x-1 text-center'>
                            <p className='w-16'>{data.Info.quantity}</p>
                            <p className='w-16'>{data.Info.rate}</p>
                            {/* <p className='w-16'>{data.Info.sgst}</p>
                                    <p className='w-16'>{data.Info.cgst}</p> */}
                            <p className='w-16'>{data.Info.amount}</p>
                        </div>
                    </div>
                    {data.items.map((item) => {
                        return (
                            <div key={item.index} className='odd:bg-gray-300 even:bg-gray-100 text-sm flex px-3 py-1 justify-between '>
                                <div>
                                    <p className='w-40'>{item.itemName}</p>
                                </div>
                                <div className='flex space-x-1 text-center'>
                                    <p className='w-16'>{item.itemQuantity}</p>
                                    <p className='w-16'>{item.itemRate}</p>
                                    {/* <p className='w-16'>{item.itemSgst}</p>
                                            <p className='w-16'>{item.itemCgst}</p> */}
                                    <p className='w-16'>{item.itemAmount.toFixed(2)}</p>
                                </div>
                            </div>);
                    })}
                    <div className='flex justify-between items-center space-x-2 mt-4'>
                        <div className='space-y-4 mt-4 max-w-[300px] break-words'>
                            <div>
                                {data.Info.conditions && <p>{data.Info.terms}</p>}
                                {data.Info.conditions && <p>{data.Info.conditions}</p>}
                            </div>
                            <div>
                                {data.Info.noteDescription && <p>{data.Info.note}</p>}
                                {data.Info.noteDescription && <p>{data.Info.noteDescription}</p>}
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <div>
                                {data.subTotalData.discountVal && <p>{data.subTotalData.discount}</p>}
                                {data.subTotalData.gstVal && <p>{data.subTotalData.gst}</p>}
                                {data.subTotalData.otherTaxVal && <p>{data.subTotalData.otherTax}</p>}
                                {data.subTotalData.serviceChargeVal && <p>{data.subTotalData.serviceCharge}</p>}
                                {data.subTotalData.subTotalVal && <p>{data.subTotalData.subTotal}</p>}
                                {data.subTotalData.amountPaidValue && <p>{data.subTotalData.amountPaid}</p>}
                                {data.subTotalData.balanceDueValue && <p>{data.subTotalData.balanceDue}</p>}
                            </div>
                            <div>
                                {data.subTotalData.discountVal && <p>{data.subTotalData.discountVal} {data.subTotalData.discountType ? " ₹" : "%"}</p>}
                                {data.subTotalData.gstVal && <p>{data.subTotalData.gstVal} </p>}
                                {data.subTotalData.otherTaxVal && <p>{data.subTotalData.otherTaxVal} {data.subTotalData.otherTaxType ? " ₹" : "%"}</p>}
                                {data.subTotalData.serviceChargeVal && <p>{data.subTotalData.serviceChargeVal}{data.subTotalData.serviceTaxType ? " ₹" : "%"} </p>}
                                {data.subTotalData.subTotalVal && <p>{data.subTotalData.subTotalVal} </p>}
                                {data.subTotalData.amountPaidValue && <p>{data.subTotalData.amountPaidValue} </p>}
                                {data.subTotalData.balanceDueValue && <p>{data.subTotalData.balanceDueValue} </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </PdfContainer>
        </>
    );
};

export default Fourth;
