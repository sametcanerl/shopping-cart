import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Image,
  Slide,
  Desc,
  Button,
  Title,
} from "./Slider.style";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../../data";
import {useNavigate} from "react-router-dom"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate()
  const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : sliderItems.length-1 )
    }else{
        setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex + 1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex = {slideIndex} >
        {sliderItems.map((item) => {
            const {id,img,title,desc,bg} = item
          return (
            <Slide key={id} bg={bg}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>
                  {desc}
                </Desc>
                <Button onClick={()=>navigate("/comingsoon")} >SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
