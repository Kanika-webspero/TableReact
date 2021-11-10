import { Button, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import storiedman from '../../Images/storiedman.png'
import SmallHeader from '../SmallHeader';
import SearchIcon from '@mui/icons-material/Search';

const Header = (props) => {

    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0) {
                document.getElementById('header').style.display = 'none'
                document.getElementById('fixedHeader').style.display = 'block'
            }
            if (currentScrollY === 0) {
                document.getElementById('header').style.display = 'flex'
                document.getElementById('fixedHeader').style.display = 'none'
            }
            prevScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div>
            <div className='headerContainer' id='header'>
                <div className='headerImageContainer'>
                    <img src={storiedman} alt="man" className='headerImage' />

                </div>
                <div className='headerContentContainer'>
                    <Typography variant='h2' title='Doctor Test'>Doctor Test</Typography>
                    <Typography variant='h6' title='Doctor Test'>B:13 March 1950</Typography>
                    <Typography variant='h6' title='Doctor Test'>D: unknown</Typography>
                    <Typography variant='h6' title='Doctor Test'>Your great-grandfather</Typography>

                    <div className='headerTabsContainer'>
                        <div>
                            <Button onClick={() => props.handleTab('stories')} className='headerTabs' variant='contained'>Stories</Button>
                            <Button onClick={() => props.handleTab('details')} className='headerTabs'  variant='contained'>Details</Button>
                            <Button onClick={() => props.handleTab('research')} className='headerTabs' variant='contained'>Research</Button>
                        </div>
                        <div>
                            <Button startIcon={<SearchIcon />} className='headerTabs' variant='contained'>Search</Button>
                            <Button className='headerTabs' variant='contained'>View Tree</Button>
                        </div>
                    </div>
                    <hr className='headerLine'/>
                </div>

            </div>
            <SmallHeader id='fixedHeader' />
        </div>
    )
}

export default Header;