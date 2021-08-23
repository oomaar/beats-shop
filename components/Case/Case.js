import { Button, Container, Section, SectionTitle } from "../../global";
import {
    CaseContainer,
    Img,
    CaseData,
    Text,
} from "./styledCase";

export const Case = ({ data }) => {
    return (
        <Section id="case">
            <SectionTitle gradient>Case</SectionTitle>

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
