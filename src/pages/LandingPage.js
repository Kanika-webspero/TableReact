import { BottomNavigation, Button } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import lg from '../Images/lg.jpg'
import landing1 from '../Images/LandingPage/landing1.jpeg';
import landing2 from '../Images/LandingPage/landing2.jpeg'
import landing3 from '../Images/LandingPage/landing3.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from 'react-router';

const LandingPage = () => {

    const history = useHistory()

    const signIn = () => {
        history.push('/signin')
    }

    const signUp = () => {
        history.push('/signup')
    }

    return (
        <div>
            <div className='mainHeaderContainer'>
            
                <div>
                    <img src={lg} className='mainHeaderImage' alt="storiedLogo" />
                    <span>Storied</span>
                </div>
                <div>
                    <Button onClick={signIn} className='landingButtons' variant='contained'>Sign In</Button>
                    <Button onClick={signUp} className='landingButtons' variant='contained'>Sign Up</Button>
                </div>                          
            </div>
            <Carousel dynamicHeight='35rem' showArrows={true} showThumbs={false}>
            <div>
                <img alt='landing1' src={landing1} />
                
            </div>
            <div>
                <img alt='landing2' src={landing2} />
               
            </div>
            <div>
                <img alt='landing3' src={landing3} />
             
            </div>
        </Carousel>
        <BottomNavigation sx={{ width: '100%', backgroundColor:'black', color: 'white', bottom: '0px', position: 'fixed', zIndex: '9999'}} >
       <div style={{display: 'flex', alignItems: 'center'}}>Powered by webspero</div>
      </BottomNavigation>
        </div>
    )
}

export default LandingPage;