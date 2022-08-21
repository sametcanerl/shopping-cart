import styled from "styled-components";
import { sm } from "../../responsive";

export const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${sm({padding:"0",flexDirection:"column",marginTop:"20px"})}
`

