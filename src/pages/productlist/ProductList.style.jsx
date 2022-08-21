import styled from "styled-components";
import { sm } from "../../responsive";

export const Container = styled.div`

`;
export const Title = styled.h1`
margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content:space-between;
`;
export const Filter = styled.div`
margin: 20px;
${sm({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`;

export const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;
    margin-right:20px;
    ${sm({marginRight:"0px"})}
`

export const Select = styled.select`
    padding:10px;
    margin-right:20px;
    font-size:15px;
    ${sm({margin:"10px 0"})}
`
export const Option = styled.option`

`
