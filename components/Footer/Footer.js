import { Button, Container, Section } from "../../global";
import {
    FooterContainer,
    Logo,
    FooterContent,
    FooterTitle,
    FooterLinks,
    FooterLink,
    Form,
    Input,
    FooterSocial,
    SocialLink,
    FooterCopy,
    HSix,
} from "./styledFooter";

export const Footer = ({ data }) => {
    const productsLinks = data.productsLinks.map(link => (
        <li key={link.id}>
            <FooterLink href="#">{link.title}</FooterLink>
        </li>
    ));

    const supportLinks = data.supportLinks.map(link => (
        <li key={link.id}>
            <FooterLink href="#">{link.title}</FooterLink>
        </li>
    ));

    const socialLinks = data.socialLinks.map(link => (
        <SocialLink key={link.id}>
            <i className={link.icon}></i>
        </SocialLink>
    ));
    return (
        <Section>
            <Container>
                <FooterContainer>
                    <Logo href="#">
                        <img src="/img/logo.png" alt="Logo" />
                    </Logo>

                    <FooterContent>
                        <FooterTitle>Products</FooterTitle>

                        <FooterLinks>
                            {productsLinks}
                        </FooterLinks>
                    </FooterContent>

                    <FooterContent>
                        <FooterTitle>Support</FooterTitle>

                        <FooterLinks>
                            {supportLinks}
                        </FooterLinks>
                    </FooterContent>

                    <FooterContent>
                        <Form action="">
                            <Input type="email" placeholder="Email Address" />
                            <Button flex>
                                <i className="ri-send-plane-line"></i>
                                Subscribe
                            </Button>
                        </Form>

                        <FooterSocial>
                            {socialLinks}
                        </FooterSocial>
                    </FooterContent>
                </FooterContainer>

                <FooterCopy>
                    <HSix>&#169; Beats. All Rights Reserved</HSix>
                </FooterCopy>
            </Container>
        </Section>
    )
}
