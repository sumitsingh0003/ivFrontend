import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Doc from '../features/DocService';
import PdfContainer from '../features/PdfContainer';
import { Box } from '@mui/material';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const View = ({ previewData, preview, setPreview }) => {
    const { data } = previewData;
    const createPdf = (html) => Doc.createPdf(html);
    const handleClose = () => {
        setPreview(false);
    };

    return (
        <div>
            <Dialog
                open={preview}
                TransitionComponent={Transition}
                scroll="body"
                keepMounted
                maxWidth="100%"
                sx={{ "& .MuiPaper-root": { backgroundColor: "transparent", boxShadow: "none" } }}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle sx={{ textAlign: "center", fontSize: "25px", fontWeight: "semibold", backdropFilter: "blur(10px)" }}>w</DialogTitle>
                <PdfContainer createPdf={createPdf}>
                    <Box sx={{ maxWidth: "100%", backgroundColor: "white" }} >
                        <div className="border-1 bg-transparent font-[DejaVu Sans,Sans-serif] text-black text-sm aspect-[1/1.414] border-black p-5">{/*aspect-[1/1.2]*/}
                            <p className='text-center text-2xl'>{data.Info.invoice}</p>
                            <div className='flex justify-between'>
                                <div>{data.Info.imgDataName && <img className='w-28 h-28 overflow-hidden object-cover' src={`${data.Info.imgDataName}`} alt="logo" />}</div>
                                <div className='flex justify-end'>
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
                            <div className='flex justify-between'>
                                <div className='w-fit'>
                                    <p>{data.Info.billFrom}</p>
                                    <p>{data.Info.company}</p>
                                    <p>{data.Info.name}</p>
                                    <p className='w-24'>{data.Info.address}</p>
                                    <p>{data.Info.city}</p>
                                    <p>{data.Info.state}</p>
                                    <p>{data.Info.pincode}</p>
                                    <p>{data.Info.country}</p>
                                </div>
                                <div className='w-fit'>
                                    <p>{data.Info.billTo}</p>
                                    <p>{data.Info.tocompany}</p>
                                    <p>{data.Info.toname}</p>
                                    <p className='w-24'>{data.Info.toaddress}</p>
                                    <p>{data.Info.tocity}</p>
                                    <p>{data.Info.tostate}</p>
                                    <p>{data.Info.topincode}</p>
                                    <p>{data.Info.tocountry}</p>
                                </div>
                            </div>
                            <div className='flex bg-gray-700 text-sm text-white px-3 justify-between py-2'>
                                <div>
                                    <p className='w-40'>{data.Info.item}</p>
                                </div>
                                <div className='flex space-x-1 text-center'>
                                    <p className='w-16'>{data.Info.quantity}</p>
                                    <p className='w-16'>{data.Info.rate}</p>
                                    <p className='w-16'>{data.Info.sgst}</p>
                                    <p className='w-16'>{data.Info.cgst}</p>
                                    <p className='w-16'>{data.Info.amount}</p>
                                </div>
                            </div>
                            {data.items.map((item) => {
                                return (
                                    <div key={item.index} className='bg-gray-16 text-sm flex px-3 py-1 justify-between '>
                                        <div>
                                            <p className='w-40'>{item.itemName}</p>
                                        </div>
                                        <div className='flex space-x-1 text-center'>
                                            <p className='w-16'>{item.itemQuantity}</p>
                                            <p className='w-16'>{item.itemRate}</p>
                                            <p className='w-16'>{item.itemSgst}</p>
                                            <p className='w-16'>{item.itemCgst}</p>
                                            <p className='w-16'>{item.itemAmount.toFixed(2)}</p>
                                        </div>
                                    </div>);
                            })}
                            <div className='flex justify-end'>
                                <div className='w-[calc(fit-content+5px)]'>
                                    {data.subTotalData.serviceChargeVal && <p>{data.subTotalData.serviceCharge}</p>}
                                    {data.subTotalData.otherTaxVal && <p>{data.subTotalData.otherTax}</p>}
                                    {data.subTotalData.discountVal && <p>{data.subTotalData.discount}</p>}
                                    {data.subTotalData.subTotalVal && <p>{data.subTotalData.subTotal}</p>}
                                </div>
                                <div className='w-[calc(fit-content+5px)]'>
                                    <p>{data.subTotalData.serviceChargeVal}</p>
                                    <p>{data.subTotalData.otherTaxVal}</p>
                                    <p>{data.subTotalData.discountVal}</p>
                                    <p>{data.subTotalData.subTotalVal}</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </PdfContainer>
            </Dialog>
        </div >
    );
};
export default View;