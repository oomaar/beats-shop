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

export const Feature = ({ data }) => {
    return (
        <Section>
            <Container>
                <FeatureContainer>
                    <ImageContainer>
                        <img src="/img/home.png" alt="Home Image" />
                    </ImageContainer>

                    <HomeData>
                        <HomeHeader>
                            <Title>On ear</Title>
                            <SubTitle>Beats 3</SubTitle>
                        </HomeHeader>
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
                    </HomeData>
                </FeatureContainer>
            </Container>
        </Section>
    );
};