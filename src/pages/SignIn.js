import React, { useState } from 'react';
import monument from '../Images/b.jpg'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MyGrid from "./Grid";
import { getUser, setAuth } from '../services';

const SignIn = (props) => {


    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const history = useHistory()

    const signUpRecommendation = () => {
        history.push('/signup')
    }

    const signInButton = () => {
       const user = getUser();
        if(user.email === values.weight && user.password === values.password) {
           props.setIsAuth(true);
           setAuth(true)
           history.push('/home')
        } else {
            alert ('Invalid Credentials')
        }
    }

    const forgotPassword = () => {
        history.push('/forgotpassword')
    }

    return (
   
        <MyGrid
            leftSide={<img src={monument} alt="monument" width="100%" />}
            rightSide={
                <div className="container">               
                     <Typography variant="h4" component="h4">Sign in</Typography>                      
                     <FormControl style={{width: '100%'}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                         <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                         <OutlinedInput
                             id="outlined-adornment-weight"
                             value={values.weight}
                             onChange={handleChange('weight')}
                             aria-describedby="outlined-weight-helper-text"
                             inputProps={{
                                 'aria-label': 'weight',
                             }}
                         />
                     </FormControl>                     
                     <FormControl style={{width: '100%'}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                         <OutlinedInput
                             id="outlined-adornment-password"
                             type={values.showPassword ? 'text' : 'password'}
                             value={values.password}
                             onChange={handleChange('password')}
                             endAdornment={
                                 <InputAdornment position="end">
                                     <IconButton
                                         aria-label="toggle password visibility"
                                         onClick={handleClickShowPassword}
                                         onMouseDown={handleMouseDownPassword}
                                         edge="end"
                                     >
                                         {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                     </IconButton>
                                 </InputAdornment>
                             }
                             label="Password"
                         />
                         <div className="signUpRecommendation">
                             <Typography onClick={signUpRecommendation}>If you are not registered, please click here to sgn up.</Typography>
                         </div>
                         <div className="signInButton">
                             <Button onClick={forgotPassword} variant="text">Forgot Password</Button>
                         </div>
                         <div className="signInButton">
                             <Button onClick={signInButton} variant="contained">Sign In</Button>
                         </div>
                     </FormControl>
             </div>
            }
        />
    )
}

export default SignIn;