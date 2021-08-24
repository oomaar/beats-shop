import { Button, Container, Section } from "../../global";
import Fade from "react-reveal/Fade";
import {
    DiscountContainer,
    DiscountTitle,
    DiscountText,
} from "./styledDiscount";

export const Discount = () => {
    return (
        <Section>
            <Container>
                <DiscountContainer>
                    <Fade left>
                        <div>
                            <DiscountTitle>Immerse yourself in <br /> your music</DiscountTitle>
                            <DiscountText>Get it now, up to 50% off.</DiscountText>

                            <Button flex>
                                <i className="ri-shopping-bag-line"></i>
                                Shop Now
                            </Button>
                        </div>
                    </Fade>

                    <Fade right>
                        <img src="/img/discount.png" alt="Discount" />
                    </Fade>
                </DiscountContainer>
            </Container>
        </Section>
    );
};