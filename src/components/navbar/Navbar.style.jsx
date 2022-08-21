import styled from "styled-components";
import { sm } from "../../responsive";
import { Link } from "react-router-dom";
export const Container = styled.div`
  height: 90px;
  ${sm({ height: "66px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${sm({ padding: "10px 0px" })}
`;
//*LEFT SIDE
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${sm({ display: "none" })}
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
  border: 0.5px solid lightgray;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  ${sm({ width: "50px" })}
`;
//*CENTER SIDE
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled(Link)`
  text-decoration: none;
  color:black;
  font-weight: bold;
  cursor: pointer;
  ${sm({ fontSize: "24px" })}
`;
//*RIGHT SIDE
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${sm({ flex: 2, justifyContent: "center" })}
`;
export const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color:black;

  margin-left: 25px;
  ${sm({ fontSize: "12px", marginLeft: "10px" })}
`;
