import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`

export const Button = styled.button`
    border-radius: 14px;
    background: ${({primary}) => (primary ? 'radial-gradient(91.03% 302.66% at 50.15% 50%, #6D42EA 20.07%, #ABF3FF 100%)' : '#6D42EA')};
    white-space: nowrap;
    padding: 5px 16px;
    color: #fff;
    outline: none;
    font-weight: bold;
    font-size: ${({big, medium}) => (big ? '2rem' : medium ? '1.5rem': '1rem')};
    font-variant: small-caps;
    border: none;
    cursor: pointer;

    @media screen and (max-width:768px){
            width: 100%;
            /* margin: 3rem; */
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#6D42EA' : 'radial-gradient(49.87% 288.1% at 50.13% 100%, #2C484D 0%, #63395F 55.43%, #6D42EA 100%)')};
    }
`

export default GlobalStyle;
