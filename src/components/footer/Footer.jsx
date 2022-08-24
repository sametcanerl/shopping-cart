import { LinkedIn, GitHub, Room, Phone, MailOutline } from "@material-ui/icons";
import {
  Center,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  ContactItem,
} from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SCE</Logo>
        <Desc>
          Merhaba, ben Samet Can Erol. Aşağıda ki hesaplardan beni takip edebilirsin.
        </Desc>
        <SocialContainer>
          <SocialIcon
            color="55ACEE"
            href="https://www.linkedin.com/in/samet-can-erol-baa34422b/"
            target="_blank"
          >
            <LinkedIn />
          </SocialIcon>
          <SocialIcon
            color="000"
            href="https://github.com/sametcanerl"
            target="_blank"
          >
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> Lorem ipsum dolor sit amet.
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +12345678
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{ marginRight: "10px" }} /> sametcaneol28@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
