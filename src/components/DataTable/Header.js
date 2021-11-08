import React, { useEffect, useRef } from 'react';
import man from '../../Images/man.jpg'

const Header = () => {   

    const prevScrollY = useRef(0);

    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // debugger
            if (currentScrollY > 0) {
             document.getElementById('header').style.height = '90px'
             document.getElementById('header').style.fontSize = '14px'
            }
            if (currentScrollY === 0) {
                document.getElementById('header').style.height = '110px'
            }

            prevScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div style={{ height:'130px'}}>
        
        <div style={{ display: 'flex', backgroundColor: 'lightgray', width: '100%', fontSize: '50px', top: '0px' }}  id='header'> 
        <div style={{marginLeft: '28px'}}>
            <img src={man} alt="man" style={{height: '130px', borderRadius: '5px'}} />
        </div>
        <div style={{marginLeft: '10px'}}>
        <div style={{fontSize: '32px', fontWeight: '600'}}>Doctor Test</div>
        <div style={{fontSize: '14px'}}>B:13 March 1950</div>
        <div style={{fontSize: '14px'}}>D: unknown</div>
        <div style={{fontSize: '14px'}}>Your great-grandfather</div>
        </div>
        </div>
        </div>
    )
}

export default Header;