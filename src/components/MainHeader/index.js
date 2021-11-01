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

    const otherButton = () => {
        history.push('/other')
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={textButton} variant="outlined">Text</Button>
        <Button onClick={aboutButton} variant="outlined">About</Button>
        <Button onClick={familyButton} variant="outlined">Family</Button>
        <Button onClick={otherButton} variant="outlined">Other</Button>
        </div>
    )
}

export default MainHeader;