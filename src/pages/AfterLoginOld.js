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

const AfterLogin = () => {
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            redirect('/home')
        }

        if (!authToken) {
            redirect('/signin')
        }
    }, [])


    const [aelf, setAelf] = useState({})
    const tokenContractAddress = 'ELF_JRmBduh4nXWi1aXgdUsj5gJrzeZb2LxmrAbf7W99faZSvoAaE';
    let testAddress = '';
    let token = {}
    let hasElf = false

    document.addEventListener('NightElf', result => {
        const aelf = new window.NightElf.AElf({
            httpProvider: ['https://explorer-test.aelf.io/chain'],
            appName: 'Expetra',
            pure: true
        });
        setAelf(aelf)
    })

    // const reload = () => {
    //     if (window.localStorage) {
    //         if (!localStorage.getItem('reload')) {
    //             localStorage['reload'] = true;
    //             window.location.reload();
    //         } else {
    //             localStorage.removeItem('reload');
    //         }
    //     }
    // }; 

    async function connect() {
        // reload()
        await aelf.login({
            chainId: 'AELF',
            payload: {
                method: 'LOGIN',
            }
        }).then(result => {
            console.log('promise then', result);
            testAddress = JSON.parse(result.detail).address;
            setAelf(aelf)
        }).catch(error => {
            console.log('promise catch', error);
        });

        await aelf.chain.getChainStatus((error, result) => {
            console.log(error, result);
        });

        await aelf.chain.getChainStatus().then(result => {
            console.log('promise then', result);
        }).catch(error => {
            console.log('promise catch', error);
        });
    }


    async function getBalance() {
        const wallet = {
            address: testAddress
        };

        await aelf.chain.contractAt(
            tokenContractAddress,
            wallet,
            (error, result) => {
                console.log(error, result);
                token = result
            }
        );

        await token.GetBalance.call(
            {
                symbol: 'ELF',
                owner: testAddress
            },
            (err, balance) => {
                console.log(err, balance);
                if (balance.balance > 0) hasElf = true
                else hasElf = false
            }
        );
        
        setIsOpen(true)
        if (hasElf) {
            updatePremium()
            setHas(true)
        }
        else {
            setHas(false)
            setIsOpen(true)
        }

    };

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

    const refresh = () => {
        window.open("https://chrome.google.com/webstore/detail/aelf-explorer-extension/mlmlhipeonlflbcclinpbmcjdnpnmkpf", '_blanck')
        window.top.location.reload(true)
    }

    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Welcome, {user.email}!</HeroH1>
                    <HeroP>Connect your <a href="https://chrome.google.com/webstore/detail/aelf-explorer-extension/mlmlhipeonlflbcclinpbmcjdnpnmkpf" target={"_blanck"}>NightELF</a> wallet!</HeroP>
                    <HeroBtnWrapper>
                        <Button big primary onClick={refresh}>download wallet</Button>
                        <br/>
                        <Button big primary onClick={connect}>connect wallet</Button>
                        <br />
                        <Button big primary onClick={getBalance}>get premium</Button>
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