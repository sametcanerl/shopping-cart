import Navbar from "../../components/navbar/Navbar";
import PopularProducts from "../../components/popularproducts/PopularProducts";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "./ProductList.style";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
          </FilterText>
          <Select>
            <Option disabled selected >Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products:
          </FilterText>
          <Select>
            <Option disabled selected >Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc) </Option>
          
          </Select>
        </Filter>
      </FilterContainer>
      <PopularProducts />
    </Container>
  );
};

export default ProductList;
