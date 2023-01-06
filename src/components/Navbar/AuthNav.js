import React from 'react'
import { Button } from '../../globalStyles.js';
import {
    NavLogo,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';
import { useUserAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

export const AuthLogo = () => {
    
    return (
        <NavLogo>
            <img src={require('../../assets/expetra.png')} style={{ height: "80px" }} alt='logo'></img>
        </NavLogo>
    )
}

export const Logo = () => {
    return (
        <NavLogo>
            <img src={require('../../assets/expetra.png')} style={{ height: "80px" }} alt='logo'></img>
        </NavLogo>
    )
}

export const SignOutBtn = () => {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <NavBtn >
            <NavBtnLink >
                <Button primary onClick={handleLogout}>sign out</Button>
            </NavBtnLink>
        </NavBtn>
    )
}
export const SignInBtn = () => {
    return (
        <NavBtn >
            <NavBtnLink to="/signin">
                <Button primary >sign in</Button>
            </NavBtnLink>
        </NavBtn>
    )
}


