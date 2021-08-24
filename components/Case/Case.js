import { Button, Container, Section, SectionTitle } from "../../global";
import {
    CaseContainer,
    Img,
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
                    <Fade up>
                        <div>
                            <Img src="/img/case.png" alt="case" />
                        </div>
                    </Fade>

                    <Fade down>
                        <div>
                            <Text>{data.text}</Text>

                            <Button flex>
                                <i className="ri-information-line"></i>
                                More info
                            </Button>
                        </div>
                    </Fade>
                </CaseContainer>
            </Container>
        </Section>
    );
};
