import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Table from '../Components/DataTable/table'

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

const About = (props) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const saveButton = () => {
        setOpen(false)
    }

    const toDoData = (e) => {
        setData(e.target.value)
    }

    return (
        <div style={{marginTop: '90px'}}>
        <div>About</div>
            <Button onClick={handleOpen}>Open modal</Button>
        <div>
        <Table columns={["Title", "Description"]} data={[]} keys={["title", "description"]} />
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Todo
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField onChange={toDoData} id="filled-basic" label="Title" variant="filled" />
            <TextField onChange={toDoData} id="standard-basic" label="Description" variant="standard" />
            <p>{data}</p>
            </Typography>
            <Button onClick={saveButton} style={{marginTop: '10px'}} variant="contained">Save</Button>
            </Box>
        </Modal>
        </div>
    )
}

export default About;