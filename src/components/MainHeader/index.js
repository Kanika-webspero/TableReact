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
        <div style={{display: 'flex',boxShadow: '0 8px 6px -6px black', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px',
        }}>
        <img src={lg} style={{width: '30px', height: '30px', marginTop: '5px'}} alt="storiedLogo" />
        <div>
        <Button style={highlightTabs === '/' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={textButton} >Text</Button>
        <Button style={highlightTabs === '/about' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={aboutButton} >About</Button>
        <Button style={highlightTabs === '/dataTable' ? {backgroundColor: 'lightgray'} : {color:'gray'}} onClick={familyButton} >Family</Button>
        <Button style={highlightTabs === '/other' ? {backgroundColor: 'lightgray'} : {color:'gray'}}  onClick={otherButton} >Other</Button>
        </div>
        <div>
        <AccountCircleIcon style={{fontSize: '44px', color: 'gray'}} onClick={signOutButton} className="signoutbutton"/>
        </div>
        </div>
        </div>
    )
}

export default MainHeader;