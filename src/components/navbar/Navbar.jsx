import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import React from "react";

import {
  Center,
  Container,
  Language,
  Left,
  Right,
  Wrapper,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./Navbar.style";
import { useSelector } from "react-redux";



const Navbar = () => {
  const counter = useSelector((state) => state.productCounterReducer.counter);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/" >SAMET</Logo>
        </Center>
        <Right>
          <MenuItem to="/register" >REGİSTER</MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={counter} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
