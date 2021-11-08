import React, { useState } from 'react';
import monument from '../Images/b.jpg'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MyGrid from "./Grid";
import { setUser } from '../services';
import { useHistory } from 'react-router';

const SignUp = () => {

    const emptyItem = {
        name: '',
        email: '',
        password: ''
    }

    const [values, setValues] = useState(emptyItem);

    const handleChange = (prop) => (event) => {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        })
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

    const handelSignUp = () => {
        setUser("user", values);
        history.push('/')
    }

    return (
        <MyGrid
            leftSide={<img src={monument} alt="monument" width="100%" />}
            rightSide={
                <div className="container">
                
                     <Typography variant="h4" component="h4">Sign Up</Typography>

                     <FormControl className='inputBox' sx={{ m: 1, width: '25ch' }} variant="outlined">
                     <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                     <OutlinedInput
                         id="outlined-adornment-weight"
                         value={values.name}
                         name="name"
                         onChange={handleChange('name')}
                         aria-describedby="outlined-weight-helper-text"
                         inputProps={{
                             'aria-label': 'weight',
                         }}
                     />
                 </FormControl>
                       
                     <FormControl className='inputBox' sx={{ m: 1, width: '25ch' }} variant="outlined">
                         <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                         <OutlinedInput
                             id="outlined-adornment-weight"
                             value={values.email}
                             name="email"
                             onChange={handleChange('email')}
                             aria-describedby="outlined-weight-helper-text"
                             inputProps={{
                                 'aria-label': 'weight',
                             }}
                         />
                     </FormControl>
                      
                     <FormControl className='inputBox' sx={{ m: 1, width: '25ch' }} variant="outlined">
                         <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                         <OutlinedInput
                             id="outlined-adornment-password"
                             type={values.showPassword ? 'text' : 'password'}
                             value={values.password}
                             name="password"
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
                        <div className="signInButton">
                             <Button onClick={handelSignUp} variant="contained">Sign Up</Button>
                         </div>
                     </FormControl>
             </div>
            }
        />       
    )
}

export default SignUp;