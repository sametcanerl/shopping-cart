import { useEffect } from "react";
import { Button, Container, Form, Input, Link, Title, Wrapper } from "./Login.style";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="passsword" />

          <Button>LOGIN</Button>
          <Link> DO NOT YOU REMEMBER THE PASSWORD? </Link>
          <Link> CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
