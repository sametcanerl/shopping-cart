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
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/dataSlice";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState({
    color:"Black",
    size:"M",
  });
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleQuantity = (type) => {
    type === "dec"
      ? quantity > 1 && setQuantity((prev) => prev - 1)
      : setQuantity((prev) => prev + 1);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...state, quantity, ...filter }));
    navigate("/cart",{state:state});
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={state.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{state.title}</Title>
          <Desc>{state.desc}</Desc>
          <Price>{state.price} $ </Price>
          <FilterContainer>
            <Filter name="color" onChange={handleFilters}>
              

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
                <FilterSizeOption >M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount> {quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
