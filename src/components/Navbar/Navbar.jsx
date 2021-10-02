import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                        Baristas-R-Us
                    </Typography>
                    <div classname={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='primary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
