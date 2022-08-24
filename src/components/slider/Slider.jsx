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
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSlidersItems } from "../../features/dataSlice";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [disaple, setDisaple] = useState(false);
  const navigate = useNavigate();
  //Redux Toolkit ve Thunk bilgilerini pekiştirmek  amacı için kullanılmıştır.
  //API'den veri çekme similasyonu gibi düşünülebilir.
  //İlgili Data'yı ilgili componentte direkt import edip kullanabilirdik.
  const dispatch = useDispatch();
  const { sliderItems } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getSlidersItems());
  }, [dispatch]);

  useEffect(() => {
    const slider = setInterval(() => {
      setSlideIndex((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
    
    }, 3000);
    return () => {
     
      clearInterval(slider);
    };
  }, [slideIndex, sliderItems]);

  useEffect(() => {
    const buttonDisapled = setInterval(() => {
      setDisaple(false);
    }, 1500);
    return () => clearInterval(buttonDisapled);
  }, [disaple]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
    setDisaple(true);
  };

  
  return (
    <Container>
      <Arrow
        disabled={disaple}
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.map((item) => {
          const { id, img, title, desc, bg } = item;
          return (
            <Slide key={id} bg={bg}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Button onClick={() => navigate("/comingsoon")}>
                  SHOP NOW
                </Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow
        disabled={disaple}
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
