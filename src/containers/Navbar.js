import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

import logo from '../pictures/svg/logo.svg'

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Home } from '@material-ui/icons';

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
        // <a href="/#about">
        //     About
        // </a>,
        // <Link to={{
        //     pathname: '/',
        //     hash: '#about'
        // }}>
        //     About
        // </Link>,
        // <Link to={{
        //     pathname: '/about',
        // }}>
        //     About
        // </Link>,
        // <NavLink to='about'>
        //     About
        // </NavLink>,
        <NavLink to='/projects'>
            Projects
        </NavLink>,
        // windowWidth < 1200 ? <NavLink to='/'> Home </NavLink> : <a href='/' alt='Home Page'> <img src={logo} className='logo' /> </a>,
        // <a href='/' alt='Home Page'>
        //     <img src={logo} className='logo' />
        // </a>,
        <NavLink to='/blogs'>
            Blogs
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

                {/* <MenuItem onClick={handleClose} id='drop-menu'>
                    <NavLink to='/'> Home </NavLink>
                </MenuItem> */}
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} id='drop-menu'>
                        {/* <NavLink to='/'> Home </NavLink> */}
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
            <div className='logo-con'>
                <a href='/' alt='Home Page'>
                    <img src={logo} className='logo' />
                </a>
            </div>
            {windowWidth < 1200 ? portrait : landscape}
        </div>
    )
}

export default Navbar;