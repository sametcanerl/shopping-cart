import {
  AddShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import {  Container, Icon, Image, Info } from "./PopularProduct.style";

const PopularProduct = ({ img }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Icon>
          <AddShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default PopularProduct;
