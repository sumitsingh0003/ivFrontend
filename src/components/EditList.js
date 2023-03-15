import React from 'react';
import TextField from '@mui/material/TextField';
import EditBottomInvoice from './EditBottomInvoice';
import DeleteIcon from '@mui/icons-material/Delete';

const EditList = ({ setState, state }) => {
    // const [itemList, setItemList] = useState(state.data.items);
    const { items } = state.data;
    // console.log("items", items);
    const Amount = items.reduce((start, item) => {
        return start + +item.itemAmount;
    }, (0));


    const AddItem = {
        index: new Date().getTime().toString() + 1,
        itemName: '',
        itemQuantity: '',
        itemRate: '',
        itemCgst: '',
        itemSgst: '',
        itemAmount: 0
    };
    const handleAdd = () => {
        // setIndex(index + 1);
        // setState([...items, AddItem]);
        setState({ ...state, data: { ...state.data, items: [...items, AddItem] } });
        // console.log("Item added", itemList);
    };

    const handleChange = (e, _index) => {
        const newItemList = [...items];
        const index = newItemList.findIndex(object => {
            return object.index === _index;
        });
        // console.log("index,", index);  
        if (index !== -1) {
            newItemList[index][e.target.name] = e.target.value;
            const SingleAmount = newItemList[index].itemQuantity * newItemList[index].itemRate + newItemList[index].itemSgst * newItemList[index].itemQuantity * newItemList[index].itemRate / 100 + newItemList[index].itemCgst * newItemList[index].itemQuantity * newItemList[index].itemRate / 100;
            newItemList[index].itemAmount = SingleAmount;
            setState({ ...state, data: { ...state.data, items: newItemList } });
            // console.log("hello", itemList);
        };
    };
    const handleDel = (_index) => {
        const New = items.filter((item) => item.index !== _index);
        setState({ ...state, data: { ...state.data, items: New } });
    };
    return (
        <>
            {items?.map((item) => {
                return (
                    <div key={item.index} className='relative multiple bg-gray-100 flex justify-between border-b-[1px] hover:bg-gray-300 border-b-gray-800 space-x-1 py-1 px-3 group' >
                        <TextField fullWidth InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black' } } }} variant="standard" type="text" onChange={(e) => handleChange(e, item.index)} value={item.itemName} name="itemName" placeholder="Enter Item / Product Name" />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemQuantity} name="itemQuantity" placeholder="QTY" />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemRate} name="itemRate" placeholder="Price" />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemCgst} name="itemCgst" placeholder="%" />
                        <TextField InputProps={{ sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" onChange={(e) => handleChange(e, item.index)} value={item.itemSgst} name="itemSgst" placeholder="%" />
                        <TextField InputProps={{ readOnly: true, sx: { "& input": { fontSize: "12px", color: 'black', textAlign: 'center', width: '150px', } } }} variant="standard" type="number" placeholder='Item Prize' readOnly value={(item.itemAmount).toFixed(2)} name="itemAmount" />
                        <span onClick={() => handleDel(item.index)} className={`absolute ${items.length === 1 ? "hidden" : ""} -right-7 cursor-pointer`}><DeleteIcon /></span>
                    </div>);
            })
            }
            <span className='text-sm text-blue-500 px-1 cursor-pointer font-semibold' onClick={handleAdd}>+ Add Row</span>
            <EditBottomInvoice setState={setState} state={state} Amount={Amount} />
        </>
    );
};

export default EditList;
