import { Container, Section, Button } from "../../global";
import {
    FeatureContainer,
    ImageContainer,
    HomeData,
    HomeHeader,
    Title,
    SubTitle,
    FooterTitle,
    Text,
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
                            <div>
                                <FooterTitle>Overview</FooterTitle>
                                <Text>{data.text}</Text>
                                <Button flex>
                                    <ButtonIcon>
                                        <i className="ri-shopping-bag-line"></i>
                                    </ButtonIcon>
                                    <span>
                                        Add to Bag
                                    </span>
                                    <HomePrice>$299</HomePrice>
                                </Button>
                            </div>
                        </Fade>
                    </HomeData>
                </FeatureContainer>
            </Container>
        </Section>
    );
};