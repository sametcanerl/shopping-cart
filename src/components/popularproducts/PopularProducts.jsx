import { Container } from "./PopularProducts.style";
import { popularProducts } from "../../data";
import PopularProduct from "../popularproduct/PopularProduct";
const PopularProducts = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <PopularProduct key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default PopularProducts;
