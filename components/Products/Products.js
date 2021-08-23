import { Button, Container, Section, SectionTitle } from "../../global";
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
            <SectionTitle gradient>Choose <br /> Your Style</SectionTitle>

            <Container>
                <ProductsContainer>
                    {productsData}
                </ProductsContainer>
            </Container>
        </Section>
    )
}
