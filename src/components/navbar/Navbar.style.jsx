import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  outline:none;
`;
//*CENTER SIDE
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  font-weight: bold;
`;
//*RIGHT SIDE
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;

  margin-left: 25px;
`;
