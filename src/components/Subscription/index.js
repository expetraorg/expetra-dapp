import React from 'react'
import { SubscriptionContainer, SubscriptionH1, SubWrapper, SubCard, SubCardH2, SubPrice, SubTextWrapper, SubText} from './SubscriptionElements' 
const Subscription = () => {
  return (
    <SubscriptionContainer id='subscription'>
        <SubscriptionH1>Subscription</SubscriptionH1>
        <SubWrapper>
            <SubCard>
                <SubCardH2>Free</SubCardH2>
                <SubPrice>$0 /month</SubPrice>
                <SubTextWrapper>
                    <SubText>Track your expenses and income</SubText>
                    <SubText>Basic analytics</SubText>
                    <SubText>Support of 2 wallets</SubText>
                    <SubText>Support of 8 categories</SubText>
                    <SubText>Connect 1 web3 wallet</SubText>
                </SubTextWrapper>
            </SubCard>
            <SubCard>
                <SubCardH2>Premium</SubCardH2>
                <SubPrice>$3 /month</SubPrice>
                <SubTextWrapper>
                    <SubText>All on Free</SubText>
                    <SubText>Detailed analytics</SubText>
                    <SubText>Support of unlimted wallets</SubText>
                    <SubText>Unlimeted categories</SubText>
                    <SubText>Unlimited web3 wallet support</SubText>
                </SubTextWrapper>
            </SubCard>
            <SubCard>
                <SubCardH2>Lifetime Premium </SubCardH2>
                <SubPrice>with AELF</SubPrice>
                <SubTextWrapper>
                    <SubText>HOLD 100 $ELF tokens to unlock all in Premium</SubText>
                    <SubText></SubText>
                    <SubText>Additional rewards</SubText>
                    <SubText>TBA</SubText>
                    <SubText>TBA</SubText>
                </SubTextWrapper>
            </SubCard>
        </SubWrapper>
    </SubscriptionContainer>
  )
}

export default Subscription