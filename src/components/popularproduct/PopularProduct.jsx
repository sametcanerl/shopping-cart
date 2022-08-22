import {
  AddShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import {  Container, Icon, Image, Info } from "./PopularProduct.style";
import {useNavigate} from "react-router-dom";
const PopularProduct = ({ item }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <AddShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined onClick={()=>navigate("/product",{state:item})} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default PopularProduct;
