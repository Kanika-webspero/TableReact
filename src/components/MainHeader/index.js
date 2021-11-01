import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { setAuth } from '../../services';

const MainHeader = (props) => {

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

    const signOutButton = () => {
        // alert('hi')
        props.setIsAuth(false)
        setAuth(false);
        history.push('/')
    }

    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button style={highlightTabs === '/' ? {backgroundColor: 'purple'} : null} onClick={textButton} variant="outlined">Text</Button>
        <Button style={highlightTabs === '/about' ? {backgroundColor: 'purple'} : null} onClick={aboutButton} variant="outlined">About</Button>
        <Button style={highlightTabs === '/dataTable' ? {backgroundColor: 'purple'} : null} onClick={familyButton} variant="outlined">Family</Button>
        <Button style={highlightTabs === '/other' ? {backgroundColor: 'purple'} : null} onClick={otherButton} variant="outlined">Other</Button>
        </div>
        <Button onClick={signOutButton} className="signoutbutton" variant="outlined">Sign Out</Button>
        </div>
    )
}

export default MainHeader;