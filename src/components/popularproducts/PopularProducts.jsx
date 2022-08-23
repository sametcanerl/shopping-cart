import { Container, Title, Wrapper } from "./PopularProducts.style";
// import { popularProducts } from "../../data";
import PopularProduct from "../popularproduct/PopularProduct";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getPopularProducts } from "../../features/dataSlice";
import { useEffect } from "react";
const PopularProducts = () => {

  const dispatch = useDispatch();
  const  {popularProducts}  = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getPopularProducts());
  }, [dispatch]);
  return (
    <Container>
      <Title>POPULAR PRODUCTS</Title>
      <Wrapper>
      {popularProducts?.map((item) => (
        <PopularProduct key={item.id} item={item} />
      ))}
      </Wrapper>
      
    </Container>
  );
};

export default PopularProducts;
