import { Add, Remove } from "@material-ui/icons";

import {
  Bottom,
  Button,
  Container,
  Details,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from "./Cart.style";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addProduct } from "../../features/dataSlice";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.data.products);
  const { state } = useLocation();

  const total = useSelector((state) => state.data.total);
  const bagQuantity = useSelector((state) => state.data.bagQuantity);
  
const handleClick = ()=>{

}
  return (
    <Container>
      <Wrapper>
        <Title> YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate("/")}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({bagQuantity})</TopText>
            <TopText> Your Wishlist (0) </TopText>
          </TopTexts>
          <TopButton onClick={() => navigate("/comingsoon")} type="filled">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {products?.map((product) => {
              const { title, img, quantity, size, color, price, id } = product;

              return (
                <Product key={id}>
                  <ProductDetail>
                    <Image src={img} />
                    <Details>
                      <ProductName>
                        {" "}
                        <b>Product:</b> {title}
                      </ProductName>

                      <ProductColor color={color} />
                      <ProductSize>
                        {" "}
                        <b>Size:</b>
                        {size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{quantity}</ProductAmount>
                      <Add onClick={()=>handleClick} />
                    </ProductAmountContainer>
                    <ProductPrice>$ {price * quantity} </ProductPrice>
                  </PriceDetail>
                  <ProductDetail></ProductDetail>
                </Product>
              );
            })}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMART</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {total} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={() => navigate("/comingsoon")}>CHECK OUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
