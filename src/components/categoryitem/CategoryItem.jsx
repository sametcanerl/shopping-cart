import { Button, Container, Image, Info, Title } from "./CategoryItem.style"
import {useNavigate} from "react-router-dom";
const CategoryItem = ({id,img,title}) => {

  const navigate = useNavigate()
  return (
    <Container>
        <Image src={img}/>
        <Info>
            <Title> {title} </Title>
            <Button onClick={()=>navigate("/comingsoon")} >SHOP NOW </Button>
        </Info>

    </Container>
  )
}

export default CategoryItem