import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const MainHeader = () => {

const history = useHistory();

    const textButton = () => {
        history.push('/')
    }

    const aboutButton = () => {
        history.push('/about')
    }

    const familyButton = () => {
        history.push('/dataTable')
    }
    return (
        <div>
        <Button onClick={textButton} variant="text">Text</Button>
        <Button onClick={aboutButton} variant="contained">About</Button>
        <Button onClick={familyButton} variant="outlined">Family</Button>
        </div>
    )
}

export default MainHeader;