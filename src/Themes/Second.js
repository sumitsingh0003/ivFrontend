import React from 'react';
// import { Box } from '@mui/material';
import Doc from '../features/DocService';
import PdfContainer from '../features/PdfContainer';
const Second = ({ data }) => {
    // const { data } = previewData;
    console.log(data);
    const createPdf = (html) => Doc.createPdf(html);
    return (
        <>
            <PdfContainer createPdf={createPdf}>
                {/* <div data-aos="zoom-y-out" className='w-[600px] aspect-[1/1.414] bg-white mb-16 text-black mx-auto'>
                    <div className='text-center text-[11px] sm:text-[16px] md:text-[19px]'>Invoice</div>
                    <div className='flex justify-between items-center'>
                        <div className='w-[15%] '><img className='h-[100px] w-[100px] object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOCIPOxKGbMo_LhjiZ3kQquwhDkjuNWNPUg&usqp=CAU" alt="" /></div>
                        <div className='flex space-x-5 font-semibold text-[8px] sm:text-[14px] md:text-[15px]'>
                            <div>
                                <p>Invoice Number</p>
                                <p>Date</p>
                                <p>DueDate</p>
                            </div>
                            <div className='text-center'>
                                <p>01</p>
                                <p>12/23/12</p>
                                <p>12/12/12</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between text-center items-center text-[8px] sm:text-[14px] md:text-[15px]'>
                        <div className=''>
                            <p className='font-semibold'>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                            <p>Haha</p>
                        </div>
                    </div>
                    <div className=' text-center text-[7px] sm:text-[12px] md:text-[15px]'>
                        <div className='flex font-semibold pl-3 py-1 bg-gray-600 text-gray-200'>
                            <p className='w-[50%] text-left'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                        </div>
                        <div className='flex py-1 pl-3 text-gray-800'>
                            <p className='w-[50%] text-left'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                            <p className='w-[10%]'>bhanu</p>
                        </div>
                    </div>
                    <div className='flex justify-end text-[11px] sm:text-[16px] md:text-[19px]'>
                        <div>
                            <p>Data</p>
                            <p>Data</p>
                            <p>Data</p>
                            <p>Data</p>
                        </div>
                        <div>
                            <p>Data</p>
                            <p>Data</p>
                            <p>Data</p>
                            <p>Data</p>
                        </div>
                    </div>
                </div> */}
                <div className="border-1 bg-red-500 font-[DejaVu Sans,Sans-serif] text-black text-sm w-[600px] aspect-[1/1.2] border-black p-5">{/*aspect-[1/1.2]*/}
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

export default Second;
