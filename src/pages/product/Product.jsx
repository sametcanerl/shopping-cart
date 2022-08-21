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

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem, ipsum.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            vero.
          </Desc>
          <Price>20 $ </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
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
