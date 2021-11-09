import { Button, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import storiedman from '../../Images/storiedman.png'
import SmallHeader from '../SmallHeader';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {   

    const prevScrollY = useRef(0);

    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // debugger
            if (currentScrollY > 0) {
                document.getElementById('header').style.display = 'none'
                document.getElementById('fixedHeader').style.display = 'block'


            }
            if (currentScrollY === 0) {
                // document.getElementById('header').style.height = '182px'
                document.getElementById('header').style.display = 'flex'
                document.getElementById('fixedHeader').style.display = 'none'

            }
            prevScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        // <div className='headerMainContainer'>
        <div>
        <div className='headerContainer' id='header'> 
        <div className='headerImageContainer'>
            <img src={storiedman} alt="man" className='headerImage'/>
            
        </div>
        <div className='headerContentContainer'>
        <Typography variant='h2' title='Doctor Test'>Doctor Test</Typography>
        <Typography variant='h6' title='Doctor Test'>B:13 March 1950</Typography>
        <Typography variant='h6' title='Doctor Test'>D: unknown</Typography>
        <Typography variant='h6' title='Doctor Test'>Your great-grandfather</Typography>
        
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>  
        <Button style={{ borderRadius: '7px', padding: '3px', backgroundColor: '#fff', color: '#000', marginRight: '15px', marginBottom: '18px' }} variant='contained'>Stories</Button>
        <Button style={{ borderRadius: '7px', padding: '3px', color: '#fff', backgroundColor: '#000', marginRight: '15px', marginBottom: '18px' }} variant='contained'>Details</Button>
        <Button style={{ borderRadius: '7px', padding: '3px', backgroundColor: '#fff', color: '#000', marginBottom: '18px' }} variant='contained'>Research</Button> 
        </div>
        <div>
        <Button startIcon={<SearchIcon />} style={{ borderRadius: '7px', padding: '3px', backgroundColor: '#fff', color: '#000', marginRight: '15px', marginBottom: '18px' }} variant='contained'>Search</Button>
        <Button style={{ borderRadius: '7px', padding: '3px', backgroundColor: '#fff', color: '#000', marginBottom: '18px' }} variant='contained'>View Tree</Button>
        </div>
        </div>
        <hr style={{width:'70vw', marginTop: '-12px' }} />     
        </div>
        
        </div>
        <SmallHeader id='fixedHeader'/>
        </div>
    )
}

export default Header;