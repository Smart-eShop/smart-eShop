import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    SMART E-SHOP
        </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        HOME
          </NavLink>
                    <NavLink to='/about' activeStyle>
                        ABOUT
          </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        CONTACT US
          </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavLink to='/login' activeStyle>
                        SIGN IN
          </NavLink>
            </Nav>
        </>
    );
};

export default Navbar;