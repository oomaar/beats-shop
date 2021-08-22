import { Container, Section, SectionTitle } from "../../global";
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
        <Section>
            <SpecsContainer>
                <SectionTitle gradient>Specs</SectionTitle>

                <div>
                    <Container>
                        <SpecsSubContainer>
                            <SpecsContent>
                                {specsData}
                            </SpecsContent>

                            <div>
                                <Img src="/img/specs.png" alt="" />
                            </div>
                        </SpecsSubContainer>
                    </Container>
                </div>
            </SpecsContainer>
        </Section>
    );
};