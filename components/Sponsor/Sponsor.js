import { Container, Section } from "../../global";
import {
    SponsorContainer,
    SponsorImage,
} from "./styledSponsor";
import Fade from 'react-reveal/Fade';

export const Sponsor = () => {
    return (
        <Section>
            <Container>
                <Fade down>
                    <SponsorContainer>
                        <SponsorImage src="/img/sponsor1.png" alt="apple" />
                        <SponsorImage src="/img/sponsor2.png" alt="spotify" />
                        <SponsorImage src="/img/sponsor3.png" alt="amazon" />
                        <SponsorImage src="/img/sponsor4.png" alt="youtube" />
                    </SponsorContainer>
                </Fade>
            </Container>
        </Section>
    );
};