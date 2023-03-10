import styled from "styled-components";

export const Container = styled.div`
    min-height: 692px;    
    overflow: scroll;
    background-color: #0C0C0C;
    font-size: 100%;

    @media screen and (max-width: 600px){
        padding: 0 10px 0 10px;
    }
`

export const H1Text = styled.div`
    margin-bottom: 40px;
    color: #fff;
    font-size: 3em;
    font-weight: 700;
    text-align: center;
`

export const Gradient = styled.span`
    background: linear-gradient(88.83deg, #ABF3FF -105.34%, #6D42EA 99.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin: 100px; 

    @media screen and (max-width: 930px){
        grid-template-columns: 1fr;
        margin: 50px;
    }
`

export const Card = styled.div`
    display: grid;
    align-items: center;
    background-color: #6643e226;
    backdrop-filter: blur(25px);
    border-radius: 32px;
    min-height: 340px;
    padding: 0 80px;

    @media screen and (max-width: 600px) {
        padding: 30px; 
        font-size: 75%;
    }
`

export const CardHeaderText = styled.div`
    color: #fff;
    font-size: 2.125em;
    text-align: center;
    font-weight: 700;
`

export const CardText = styled.div`
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 1.375em;
    line-height: 28px;
    letter-spacing: 0.35px;

`

export const BgWrapper = styled.div`
    display: flex;
    z-index: -1;
`

export const BgTriangle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    left: 418.13px;
    top: 240px;
    filter: blur(10px);
    transform: rotate(45deg);
    border: 30px solid;
    border-image: radial-gradient(161.58% 231.67% at 38.3% 105.42%, #6D42EA 0%, #ABF3FF 100%) 1;
`

