import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

const MainHeader = () => {

    const [highlightTabs, setHighlightTabs] = useState('white')

    useEffect(() => {
        setHighlightTabs(window.location.pathname)
    },[])

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
        <Button style={highlightTabs === '/' ? {backgroundColor: 'purple'} : null} onClick={textButton} variant="outlined">Text</Button>
        <Button style={highlightTabs === '/about' ? {backgroundColor: 'purple'} : null} onClick={aboutButton} variant="outlined">About</Button>
        <Button style={highlightTabs === '/dataTable' ? {backgroundColor: 'purple'} : null} onClick={familyButton} variant="outlined">Family</Button>
        <Button style={highlightTabs === '/other' ? {backgroundColor: 'purple'} : null} onClick={otherButton} variant="outlined">Other</Button>
        </div>
    )
}

export default MainHeader;