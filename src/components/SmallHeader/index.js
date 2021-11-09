import { Button, Typography } from '@mui/material';
import React from 'react';
import storiedman from '../../Images/storiedman.png'
import SearchIcon from '@mui/icons-material/Search';

const SmallHeader = (props) => {

    return (
        
        <div id={props.id} style={{ backgroundColor: 'lightgray', height: '110px',  display: 'none' }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>    
        <div style={{display: 'flex'}}>
                <div style={{marginRight: '50px', marginTop: '5px'}}>
                    <img style={{ width: '75px', borderRadius: '15px' }} src={storiedman} alt="man" />
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h6' title='Doctor Test'>Doctor Test</Typography>
                </div>
            </div>

            <div>
                <Button style={{ borderRadius: '7px', backgroundColor: '#fff', color: '#000', marginRight: '15px' }} variant='contained'>Stories</Button>
                <Button style={{ borderRadius: '7px', color: '#fff', backgroundColor: '#000', marginRight: '15px' }} variant='contained'>Details</Button>
                <Button style={{ borderRadius: '7px', backgroundColor: '#fff', color: '#000' }} variant='contained'>Research</Button>
            </div>
            <div>
            <Button startIcon={<SearchIcon />} style={{ borderRadius: '7px', backgroundColor: '#fff', color: '#000', marginRight: '15px' }} variant='contained'>Search</Button>
            <Button style={{ borderRadius: '7px', backgroundColor: '#fff', color: '#000' }} variant='contained'>View Tree</Button>

            </div>
        </div>
        </div>
    )
}

export default SmallHeader;