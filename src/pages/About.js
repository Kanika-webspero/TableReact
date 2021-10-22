import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Table from '../components/DataTable/table';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum, add, sub, multiple, divide, reset} from '../redux/actions/count';
import {randomName} from '../components/DataTable/MainData'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const emptyItem = {
    title: '',
    description: ''
}

const emptyInput = {
    numberOne: '',
    numberTwo: ''
}

const About = (props) => {

    const myState = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [edit, setEdit] = React.useState(false)
    const [newItem, setNewItem] = React.useState(emptyItem);
    const [operator, setOperator] = React.useState('');
    const [enterValue, setEnterValue] = React.useState(emptyInput);

    const handelOperator = (getOperator) => {
        setOperator(getOperator);
    }

    const inputValue = (e) => {
        const {name, value} = e.target
        setEnterValue({
            ...enterValue,
            [name] : Number(value)
        })
    }

    const handelEnter = () => {
        switch(operator) {
            case 'add' :
                dispatch(add(enterValue.numberOne, enterValue.numberTwo))
                break;
            case 'sub' :
                dispatch(sub(enterValue.numberOne, enterValue.numberTwo))
                break;
            case 'multi' :
                dispatch(multiple(enterValue.numberOne, enterValue.numberTwo))
                break;
            case 'divide' :
                dispatch(divide(enterValue.numberOne, enterValue.numberTwo))
                break;
                default: break
        }
    }

    const handelReset = () => {
        dispatch(reset());
        setEnterValue(emptyInput);
        setOperator('')
    }

    const handleOpen = () =>{
        setOpen(true);
        setEdit(false)
    } 
    const handleClose = () => setOpen(false);

    const saveButton = () => {
        const newData = JSON.parse(JSON.stringify(data));
            newData.push(newItem)
            setData(newData);
            setNewItem(emptyItem)
            setOpen(false)
             setEdit(false)

    }

    const updateButton = () => {

        const newData = JSON.parse(JSON.stringify(data));
        newData[edit] = newItem
        setData(newData)
        setNewItem(emptyItem)
        setOpen(false)
        setEdit(false)
    }

    const toDoData = (e) => {
        const {name, value} = e.target;
        
        setNewItem({
            ...newItem,
            [name]: value
        })
    }
   

    const handelEdit = (ele, index) => {
      
        setEdit(index)
        setNewItem(ele)
        setOpen(true)
    }

    let checkEdit = edit === false ? false : true;

    const deleteValue = (ele, index) => {
        const newData = JSON.parse(JSON.stringify(data));

        const deleteValue = newData.filter((ele, idx) => idx !== index)
        setData(deleteValue)
    }

    const enterDisable = enterValue.numberOne && enterValue.numberTwo && operator !== '' ? false : true

    return (
        <div style={{marginTop: '90px'}}>
        <div>About</div>
            <Button onClick={handleOpen}>Add modal</Button>
        <div>
        
        <Table deletevalue={deleteValue} handeledit={handelEdit} columns={["Title", "Description", "Action"]} data={data} keys={["title", "description", "action"]} />
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {checkEdit ?  "Edit Todo" : "Add Todo"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField value={newItem.title} name="title" onChange={toDoData} id="filled-basic" label="Title" variant="filled" />
            <TextField value={newItem.description} name="description" onChange={toDoData} id="standard-basic" label="Description" variant="standard" />
            
            </Typography>
            <Button disabled={newItem === null} onClick={checkEdit ? updateButton :saveButton} style={{marginTop: '10px'}} variant="contained">{checkEdit ? "Update" : "Save"}</Button>
            </Box>
        </Modal>

        <div>
        <div>
        <h4>Increment/Decrement</h4>
       
        <div>
        <p>{myState.count}</p>
        <Button onClick={() => dispatch(decNum(myState.count))}>Sub</Button>
        <Button onClick={() => dispatch(incNum(myState.count))}>Add</Button>

        </div>
        <div>
       <input name='numberOne' onChange={inputValue} value={enterValue.numberOne} type="number"></input>
        <button className={operator === 'add' ? 'btnHighlight' : null} onClick={() => handelOperator('add')}>Add</button>
        <button className={operator === 'sub' ? 'btnHighlight' : null} onClick={() => handelOperator('sub')}>Sub</button>
        <button className={operator === 'multi' ? 'btnHighlight' : null} onClick={() => handelOperator('multi')}>Multi</button>
        <button className={operator === 'divide' ? 'btnHighlight' : null} onClick={() => handelOperator('divide')}>Divide</button>
        <input name='numberTwo' onChange={inputValue} value={enterValue.numberTwo} type="number"></input>
        <button disabled={enterDisable} onClick={handelEnter}>Enter</button>
        <button  disabled={enterDisable} onClick={handelReset}>Reset</button>
        <p>Result: {myState.calculate} </p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default About;