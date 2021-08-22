import { Container, Section } from "../../global";
import {
    SponsorContainer,
    SponsorImage,
} from "./styledSponsor";

export const Sponsor = () => {
    return (
        <Section>
            <Container>
                <SponsorContainer>
                    <SponsorImage src="/img/sponsor1.png" alt="apple" />
                    <SponsorImage src="/img/sponsor2.png" alt="spotify" />
                    <SponsorImage src="/img/sponsor3.png" alt="amazon" />
                    <SponsorImage src="/img/sponsor4.png" alt="youtube" />
                </SponsorContainer>
            </Container>
        </Section>
    );
};