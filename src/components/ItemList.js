import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import BottomInvoice from './BottomInvoice';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = ({ setForm, form, setAllData }) => {
    // const [index, setIndex] = useState(0);
    const [itemList, setItemList] = useState([{
        index: new Date().getTime().toString(),
        itemName: '',
        itemQuantity: '',
        itemRate: '',
        // itemCgst: '',
        // itemSgst: '',
        itemAmount: 0
    }]);

    const Amount = itemList.reduce((start, item) => {
        return start + +item.itemAmount;
    }, (0));

    const AddItem = {
        index: new Date().getTime().toString() + 1,
        itemName: '',
        itemQuantity: '',
        itemRate: '',
        // itemCgst: '',
        // itemSgst: '',
        itemAmount: 0
    };
    const handleAdd = () => {
        // setIndex(index + 1);
        setItemList([...itemList, AddItem]);
        // console.log("Item added", itemList);
    };


    // const handleChange = (e, _index) => {
    //     const newItemList = [...itemList];
    //     const index = newItemList.findIndex(object => {
    //         return object.index === _index;
    //     });
    //     // console.log("index,", index);  
    //     if (index !== -1) {
    //         newItemList[index][e.target.name] = e.target.value;
    //         const SingleAmount = newItemList[index].itemQuantity * newItemList[index].itemRate + newItemList[index].itemSgst * newItemList[index].itemQuantity * newItemList[index].itemRate / 100 + newItemList[index].itemCgst * newItemList[index].itemQuantity * newItemList[index].itemRate / 100;
    //         newItemList[index].itemAmount = SingleAmount;
    //         setItemList(newItemList);
    //         console.log("hello", itemList);
    //     };
    // };

    const handleChange = (e, _index) => {
        setItemList(prevItemList => {
            const index = prevItemList.findIndex(object => object.index === _index);
            if (index !== -1) {
                const newItemList = [...prevItemList];
                newItemList[index] = {
                    ...newItemList[index],
                    [e.target.name]: e.target.value
                };
                const SingleAmount =
                    newItemList[index].itemQuantity *
                    newItemList[index].itemRate;
                newItemList[index].itemAmount = SingleAmount;
                return newItemList;
            } else {
                return prevItemList;
            }
        });
    };

    const handleDel = (_index) => {
        const New = itemList.filter((item) => item.index !== _index);
        setItemList(New);
    };

    return (
        <>
            {itemList?.map((item) => {
                return (
                    <div key={item.index} className='animate__animated animate__slideInDown relative multiple bg-gray-100 flex flex-nowrap justify-between border-b-[1px] hover:bg-gray-300 border-b-gray-800 space-x-1 py-1 px-3 group' >
                        <TextField fullWidth InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', width: "full" } } }} variant="standard" type="text" onChange={(e) => handleChange(e, item.index)} value={item.itemName} name="itemName" placeholder="Enter Item / Product Name" />
                        <TextField sx={{ width: "20%" }} InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center' } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemQuantity} name="itemQuantity" placeholder="QTY" />
                        <TextField sx={{ width: "20%" }} InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center' } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemRate} name="itemRate" placeholder="Price" />
                        {/* <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemCgst} name="itemCgst" placeholder="%" />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemSgst} name="itemSgst" placeholder="%" /> */}
                        <TextField sx={{ width: "20%" }} InputProps={{ readOnly: true, sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center' } } }} variant="standard" type="number" placeholder='Item Prize' readOnly value={item.itemAmount.toFixed(2)} name="itemAmount" />
                        <span onClick={() => handleDel(item.index)} className={`absolute ${itemList.length === 1 ? "hidden" : ""} -right-7 cursor-pointer`}><DeleteIcon /></span>
                    </div>);
            })
            }
            {itemList.at(-1).itemAmount !== 0 && <span className='text-sm text-blue-500 px-1 cursor-pointer font-semibold' onClick={handleAdd}>+ Add Row</span>}
            <BottomInvoice setForm={setForm} setAllData={setAllData} Amount={Amount} itemList={itemList} form={form} />
        </>
    );
};
export default ItemList;

