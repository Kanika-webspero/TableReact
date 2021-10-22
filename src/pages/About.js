import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Table from '../components/DataTable/table';
import { useSelector, useDispatch } from 'react-redux';
import { incNum, decNum} from '../redux/actions/count'

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

const About = (props) => {

    const myState = useSelector((state) => state.count)
   console.log(myState, 'myState')
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [edit, setEdit] = React.useState(false)
    const [newItem, setNewItem] = React.useState(emptyItem);
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
        <p>{myState.count}</p>
        <div>
        <Button onClick={() => dispatch(decNum(myState.count))}>Sub</Button>
        <Button onClick={() => dispatch(incNum(myState.count))}>Add</Button>

        </div>
        </div>
        </div>

        </div>
    )
}

export default About;