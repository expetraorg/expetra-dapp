import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
} from './NavbarElements.js';
import { useUserAuth } from '../../contexts/AuthContext';
import {AuthLogo, Logo, SignInBtn, SignOutBtn} from './AuthNav.js';

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const  {user}  = useUserAuth();

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        {user ? <AuthLogo/> : <Logo/>}
                        <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">
                                    Home</NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to="/subs">Download</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinks to="/subscription">Subscription</NavLinks>
                            </NavItem>
                            {user ? <SignOutBtn/> : <SignInBtn/>}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;