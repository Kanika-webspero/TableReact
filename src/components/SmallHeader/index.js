import { Button, Typography } from '@mui/material';
import React from 'react';
import storiedman from '../../Images/storiedman.png'
import SearchIcon from '@mui/icons-material/Search';

const SmallHeader = (props) => {

    return (

        <div id={props.id} className='smallHeaderMainContainer'>
            <div className='smallHeaderContainer'>
                <div className='smallHeaderContent'>
                    <div className='imageContainer'>
                        <img className='smallHeaderImage' src={storiedman} alt="man" />
                    </div>
                    <div className='content'>
                        <Typography variant='h6' title='Doctor Test'>Doctor Test</Typography>
                    </div>
                </div>

                <div>
                    <Button className='smallHeaderLeftButton' variant='contained'>Stories</Button>
                    <Button className='smallHeaderDetailButton' variant='contained'>Details</Button>
                    <Button className='smallHeaderLeftButton' variant='contained'>Research</Button>
                </div>
                <div>
                    <Button startIcon={<SearchIcon />} className='smallHeaderRightButton' variant='contained'>Search</Button>
                    <Button className='smallHeaderRightButton' variant='contained'>View Tree</Button>

                </div>
            </div>
        </div>
    )
}

export default SmallHeader;