import { Container, Title, Wrapper } from "./PopularProducts.style";
import { popularProducts } from "../../data";
import PopularProduct from "../popularproduct/PopularProduct";
const PopularProducts = () => {
  return (
    <Container>
      <Title>POPULAR PRODUCTS</Title>
      <Wrapper>
      {popularProducts.map((item) => (
        <PopularProduct key={item.id} item={item} />
      ))}
      </Wrapper>
      
    </Container>
  );
};

export default PopularProducts;
