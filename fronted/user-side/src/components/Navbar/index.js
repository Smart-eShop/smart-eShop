import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
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
                <NavBtn>
                    <NavBtnLink to='/login'> <div className="d-flex align-items-center">
                        <a href="/home" target="_blank" className="btn btn-white d-none d-md-inline-block"><i className="fas fa-book" />SIGN IN</a>
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div></NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;