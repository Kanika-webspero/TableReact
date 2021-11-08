import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import { setAuth } from '../../services';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import lg from '../../Images/lg.jpg'

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
        <div className='mainHeaderContainer'>
        <img src={lg} className='mainHeaderImage' alt="storiedLogo" />
        <div>
        <Button style={highlightTabs === '/' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={textButton} >Text</Button>
        <Button style={highlightTabs === '/about' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={aboutButton} >About</Button>
        <Button style={highlightTabs === '/dataTable' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={familyButton} >Family</Button>
        <Button style={highlightTabs === '/other' ? {backgroundColor: 'lightgray'} : {color:'gray'}}  onClick={otherButton} >Other</Button>
        </div>
        <div>
        <AccountCircleIcon className='mainHeaderSignOut' onClick={signOutButton} />
        </div>
        </div>
        </div>
    )
}

export default MainHeader;