import { Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { getUser } from '../services';
import MyGrid from "./Grid";
import monument from '../Images/b.jpg'
import { useHistory } from 'react-router';

const ForgotPassword = () => {

    const [values, setValues] = useState({
        email: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });   
    };

    const knowPassword = () => {
        const user = getUser();
        if(user.email === values.email) {
            alert('Your password is :' + user.password) 
        } else {
            alert('Invalid credentials')
        }
    }

    const history = useHistory()

    const signin = () => {
        history.push('/')
    }


    return (
        <MyGrid
            leftSide={<img src={monument} alt="monument" width="100%" />}
            rightSide={
                <div className="container">               
                     <Typography variant="h4" component="h4">Forgrt password</Typography>                      
                     <FormControl className='inputBox' sx={{ m: 1, width: '25ch' }} variant="outlined">
                         <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                         <OutlinedInput
                             id="outlined-adornment-weight"
                             value={values.email}
                             onChange={handleChange('email')}
                             aria-describedby="outlined-weight-helper-text"
                             inputProps={{
                                 'aria-label': 'weight',
                             }}
                         />
                     </FormControl>                     
                     <FormControl className='inputBox' sx={{ m: 1, width: '25ch' }} variant="outlined">                        
                         <div className="signInButton">
                             <Button onClick={knowPassword} variant="contained">Know password</Button>
                             <Button onClick={signin} variant="contained">Sign in</Button>
                         </div>
                     </FormControl>
             </div>
            }
        />
    )
}

export default ForgotPassword;