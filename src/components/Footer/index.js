import React from 'react'
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, WebsiteRights, SocialIcons, SocialIconLink, SocialMedia, SocialMediaWrap, Logo } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Logo>
                            <img src={require('../../assets/expetra.png')} style={{ height: "80px" }} alt='logo'></img>
                            <WebsiteRights> ©Expetra, Inc. {new Date().getFullYear()}.  All rights reserved.</WebsiteRights>
                        </Logo>                    
                        <SocialIcons>
                            <SocialIconLink href="https://twitter.com/ExpetraOfficial" target="_blank" area-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://t.me/expetraPortal" target="_blank" area-label="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href="https://instagram.com/expetra_org" target="_blank" area-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/ExpetraOfficial" target="_blank" area-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                        <FooterLinksContainer>
                    {/* <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>Download Our App</FooterLinkTitle>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                            <FooterLink to="/signin">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> */}
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                            <FooterLink href="https://docs.expetra.org/">Terms of Service</FooterLink>
                            <FooterLink href="/https://docs.expetra.org/">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    </SocialMediaWrap>
                </SocialMedia>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer