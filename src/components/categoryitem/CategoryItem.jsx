import { Button, Container, Image, Info, Title } from "./CategoryItem.style"

const CategoryItem = ({id,img,title}) => {
  return (
    <Container>
        <Image src={img}/>
        <Info>
            <Title> {title} </Title>
            <Button>SHOP NOW </Button>
        </Info>

    </Container>
  )
}

export default CategoryItem