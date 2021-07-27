import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const ITEM_HEIGHT = 48;

    const options = [
        <NavLink to='/'>
            Home
        </NavLink>,
        <NavLink to='/about'>
            About
        </NavLink>,
        <NavLink to='/projects'>
            Projects
        </NavLink>,
        <NavLink to='/resume'>
            Resume
        </NavLink>,
        <NavLink to='/contact'>
            Contact
        </NavLink>
    ];


    let portrait = (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} id='drop-menu'>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

    let landscape = (
        <>
            {options.map(option => option)}
        </>
    )



    return (
        <div className='navbar'>
            {windowWidth < 1200 ? portrait : landscape}
        </div>
    )
}

export default Navbar;