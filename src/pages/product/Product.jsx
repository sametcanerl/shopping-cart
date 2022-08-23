import Navbar from "../../components/navbar/Navbar";
import { Remove, Add } from "@material-ui/icons";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterColorLabel,
  FilterColorOption,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./Product.style";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Product = () => {
  const { state } = useLocation();
  const [filter, setFilter] = useState({});
  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={state} />
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem, ipsum.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            vero.
          </Desc>
          <Price>20 $ </Price>
          <FilterContainer>
            <Filter name="color" onChange={handleFilters}>
              <FilterTitle>Color:</FilterTitle>

              <FilterColor
                name="color"
                type="radio"
                id="Black"
                value="Black"
                hidden
              />
              <FilterColor
                name="color"
                type="radio"
                id="DarkBlue"
                value="DarkBlue"
                hidden
              />
              <FilterColor
                name="color"
                type="radio"
                id="Red"
                value="Red"
                hidden
              />
              <FilterColorLabel htmlFor="Black"></FilterColorLabel>
              <FilterColorLabel htmlFor="DarkBlue"></FilterColorLabel>
              <FilterColorLabel htmlFor="Red"> </FilterColorLabel>
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize name="size" onChange={handleFilters}>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
