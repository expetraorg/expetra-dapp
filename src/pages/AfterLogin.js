import React, { useState, useEffect } from 'react'
import { redirect } from 'react-router-dom'
import Video from '../assets/video.mp4'
import { Button } from '../globalStyles'
import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from '../components/HeroSection/HeroElements'
import { useUserAuth } from "../contexts/AuthContext"
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import { HasModal, NoModal } from '../components/Modal/Modal.js';
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
    useAddress,
    useUser,
    useLogin,
    useLogout,
    useMetamask,
  } from "@thirdweb-dev/react";


const activeChainId = ChainId.BinanceSmartChainTestnet;
const contractAddress = "0xFeF73CcFB94D033ff1A663B40431941834694e04";

const AfterLogin = () => {
    const address = useAddress();
    const connect = useMetamask();
  
    const login = useLogin();
    const logout = useLogout();
    const { userWeb3 } = useUser();

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            redirect('/home')
        }

        if (!authToken) {
            redirect('/signin')
        }
        
    }, )

    //Connect Wallet
    
    //Get balance    

    async function checkBalance (sdk, address) {
        console.log(address)
        
        const editionDrop = await sdk.getNFTDrop(contractAddress);
        //.getEditionDrop(contractAddress  );
      
        const balance = await editionDrop.balanceOf(address, 0);//, 0);
      
        // gt = greater than
        console.log(balance)
        

        setIsOpen(true)
        if (balance.gt(0)) {
            updatePremium()
            setHas(true)
        }
        else {
            setHas(false)
            setIsOpen(true)
        }
        //return balance.gt(0);
    }
      


    const user = useUserAuth().user


    function updatePremium() {
        const docRef = doc(db, "users", user.uid)
        updateDoc(docRef, { isPremiumUser: true })

    }

    const [isOpen, setIsOpen] = useState(false)
    const [has, setHas] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    

    const sdk = ThirdwebSDK.fromPrivateKey(
        "1eb079bca5b3f94623d5265de4697caf8b76de10636dead83722865bfda932a4",
        "binance-testnet"
    );
    console.log(sdk);

    


    return (
        <>
         
        
        
        
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Welcome, {user.email}!</HeroH1>
                    <HeroP>Connect your wallet!</HeroP>
                    <HeroBtnWrapper>
                        <ConnectWallet big primary accentColor="#F21364" />;
                        
                        <br />
                        <Button big primary onClick={ ()=> checkBalance(sdk, address)} >get premium</Button>
                        {has ? <HasModal open={isOpen} onClose={() => setIsOpen(false)} /> : <NoModal open={isOpen} onClose={() => setIsOpen(false)} />}
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
            <Subscription />
            <Footer />
            
        </>
    )
}

export default AfterLogin