

import { useEffect } from 'react';
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './Register.style'

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="user name" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequatur? <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register