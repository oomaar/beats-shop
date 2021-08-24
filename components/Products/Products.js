import { Button, Container, Section, SectionTitle } from "../../global";
import Fade from 'react-reveal/Fade';
import {
    ProductsContainer,
    ProductsCard,
    ProductsContent,
    Img,
    ProductsTitle,
    ProductsPrice,
} from "./styledProducts";

export const Products = ({ data }) => {
    const productsData = data.map(product => (
        <ProductsCard key={product.id}>
            <ProductsContent>
                <Img src={product.img} alt={product.title} />
                <ProductsTitle>{product.title}</ProductsTitle>
                <ProductsPrice>${product.price}</ProductsPrice>
                <Button flex products>
                    <i className="ri-shopping-bag-line"></i>
                </Button>
            </ProductsContent>
        </ProductsCard>
    ));

    return (
        <Section id="products">
            <Fade down>
                <SectionTitle gradient>Choose <br /> Your Style</SectionTitle>
            </Fade>

            <Container>
                <Fade up>
                    <ProductsContainer>
                        {productsData}
                    </ProductsContainer>
                </Fade>
            </Container>
        </Section>
    );
};