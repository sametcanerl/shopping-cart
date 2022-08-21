import React from 'react'
import { Button, Container, Title } from './ComingSoon.sytyle'
import {useNavigate} from "react-router-dom"
const ComingSoon = () => {
  const navigate = useNavigate()
  return (
    <Container>
        <Title>COMİNG SOON</Title>
        <Button onClick={()=>navigate(-1)} >GO BACK </Button>

    </Container>
  )
}

export default ComingSoon