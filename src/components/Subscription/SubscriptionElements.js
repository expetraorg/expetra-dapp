import styled from "styled-components";

export const SubscriptionContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;

    @media screen and (max-width: 1100px){
        height: 900px;
    }

    @media screen and (max-width: 800px){
        height: 1300px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const SubWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const SubCard = styled.div`
    background: #161616;
    display: grid;
    align-items: center;
    border-radius: 32px;
    min-height: 340px;
    padding: 30px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer; 
        border: 2px solid #6D42EA;
        background: #000;
    }
`

export const SubscriptionH1 = styled.h1`
    font-size: 2.5rem;
    background: -webkit-linear-gradient(88.83deg, #ABF3FF -105.34%, #6D42EA 99.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const SubCardH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    color: #6643e2;
`

export const SubTextWrapper = styled.ul`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
`

export const SubText = styled.li`
   text-align: start;
   list-style: none;
   margin: 10px 0;
`

export const SubPrice = styled.h3`
    color: #fff;
`