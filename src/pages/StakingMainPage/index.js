import React from 'react'
import Footer from '../../components/Footer'
import { Button } from '../../globalStyles'
import { Container, Gradient, H1Text, Card, Wrapper, CardHeaderText, CardText, BgTriangleWrapper} from './StakeMainPageElements'

const StakeMainPage = () => {
    return (
        <>
            <Container> 
                <H1Text>
                    <Gradient>Expetra </Gradient>
                    - Custom Staking Contract</H1Text>
                <Wrapper>
                    <Card>
                        <CardHeaderText>Mint a new NFT</CardHeaderText>
                        <CardText>Use the NFT Drop Contract to claim an NFT from the collection.</CardText>
                        <Button medium primary>mint nft</Button>
                    </Card>
                    <Card>
                        <CardHeaderText>Stake Your NFTs</CardHeaderText>
                        <CardText>Use the custom staking contract deployed via thirdweb Deploy to stake your NFTs</CardText>
                        <Button medium primary>stake nft</Button>
                    </Card>
                </Wrapper>
                <Footer />
            </Container>
        </>
    )
}

export default StakeMainPage