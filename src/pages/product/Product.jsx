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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../redux/actions/ProductCounterActions";
import { addCart } from "../../redux/actions/cartActions";

const Product = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.productCounterReducer.counter);
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={state.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem, ipsum.</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            vero.
          </Desc>
          <Price>{counter * 20} $ </Price>
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
              {counter === 1 ? (
                <Remove disabled />
              ) : (
                <Remove onClick={() => dispatch(decrement())} />
              )}

              <Amount>{counter}</Amount>
              <Add onClick={() => dispatch(increment())} />
            </AmountContainer>
            <Button onClick={() => {
              dispatch(addCart(state))
              navigate("/cart",{state:state})
              }}>
          
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
