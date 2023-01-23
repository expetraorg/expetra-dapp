import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { Container } from '../../globalStyles'


export const Nav = styled.nav`
    background: #0C0C0C;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    align-items: center;
    margin-left: 24px;
`

export const MobileIcon = styled.div`
    display: none;
    z-index: 50;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        margin-top: auto;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: ${({click}) => (click ? '100%' : 0)};
        transition: all 0.5s ease;
        background: #000;
	}
`

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 768px){
        width: 100%;

		&:hover {
			border: none;
		}
    }
`

export const NavLinks = styled(LinkR)`//linkS
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active { 
        border-bottom: 3px solid #6D42EA;
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        list-style: none;
        transition: 0.2 ease-in-out;
        color: #fff;
        cursor: pointer;

		&:hover {
			color: #6D42EA;
			transition: all 0.3s ease;
		}
    }
`
export const NavBtn = styled.li`
    font-size: 1.5rem;
    @media screen and (max-width: 768px){
        display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
    }
`


export const NavBtnLink = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-variant: small-caps;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`