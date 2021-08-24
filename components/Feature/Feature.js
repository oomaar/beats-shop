import { Container, Section, Button } from "../../global";
import {
    FeatureContainer,
    ImageContainer,
    HomeData,
    HomeHeader,
    Title,
    SubTitle,
    HomeFooter,
    FooterTitle,
    Text,
    ButtonSpan,
    ButtonIcon,
    HomePrice,
} from "./styledFeature";
import Fade from 'react-reveal/Fade';

export const Feature = ({ data }) => {
    return (
        <Section id="home">
            <Container>
                <FeatureContainer>
                    <Fade down>
                        <ImageContainer>
                            <img src="/img/home.png" alt="Home Image" />
                        </ImageContainer>
                    </Fade>

                    <HomeData>
                        <Fade up>
                            <HomeHeader>
                                <Title>On ear</Title>
                                <SubTitle>Beats 3</SubTitle>
                            </HomeHeader>
                        </Fade>
                        <Fade up>
                            <HomeFooter>
                                <FooterTitle>Overview</FooterTitle>
                                <Text>{data.text}</Text>
                                <Button flex>
                                    <ButtonIcon>
                                        <i className="ri-shopping-bag-line"></i>
                                    </ButtonIcon>
                                    <ButtonSpan>
                                        Add to Bag
                                    </ButtonSpan>
                                    <HomePrice>$299</HomePrice>
                                </Button>
                            </HomeFooter>
                        </Fade>
                    </HomeData>
                </FeatureContainer>
            </Container>
        </Section>
    );
};