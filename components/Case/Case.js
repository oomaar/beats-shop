import { Button, Container, Section, SectionTitle } from "../../global";
import {
    CaseContainer,
    Img,
    CaseData,
    Text,
} from "./styledCase";
import Fade from 'react-reveal/Fade';

export const Case = ({ data }) => {
    return (
        <Section id="case">
            <Fade down>
                <SectionTitle gradient>Case</SectionTitle>
            </Fade>

            <Container>
                <CaseContainer>
                    <div>
                        <Img src="/img/case.png" alt="case" />
                    </div>

                    <CaseData>
                        <Text>{data.text}</Text>

                        <Button flex>
                            <i className="ri-information-line"></i>
                            More info
                        </Button>
                    </CaseData>
                </CaseContainer>
            </Container>
        </Section>
    );
};
