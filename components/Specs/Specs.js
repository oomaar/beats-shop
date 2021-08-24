import { Container, Section, SectionTitle } from "../../global";
import Fade from 'react-reveal/Fade';
import {
    SpecsContainer,
    SpecsSubContainer,
    SpecsContent,
    SpecsData,
    Title,
    SubTitle,
    Img,
    Icon,
} from "./styledSpecs";

export const Specs = ({ data }) => {
    const specsData = data.map(spec => (
        <SpecsData key={spec.id}>
            <Icon>
                <i className={spec.icon}></i>
            </Icon>
            <Title>{spec.title}</Title>
            {spec.id === 4 ? (
                <SubTitle>{spec.subTitle} <br /> {spec.text}</SubTitle>
            ) : (
                <SubTitle>{spec.subTitle}</SubTitle>
            )}
        </SpecsData>
    ));

    return (
        <Section id="specs">
            <Fade down>
                <SectionTitle gradient>Specs</SectionTitle>
            </Fade>
            <SpecsContainer>
                <div>
                    <Container>
                        <SpecsSubContainer>
                            <Fade left>
                                <SpecsContent>
                                    {specsData}
                                </SpecsContent>
                            </Fade>
                            <Fade right>
                                <div>
                                    <Img src="/img/specs.png" alt="" />
                                </div>
                            </Fade>
                        </SpecsSubContainer>
                    </Container>
                </div>
            </SpecsContainer>
        </Section>
    );
};