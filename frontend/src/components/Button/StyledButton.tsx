
import { styled } from "styled-components";

interface ButtonProps {
    buttontype: string;
    color: string;
    backgroundcolor: string;
    width: string;
    height: string;
    radius: string;
  
  }
  

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  background-color: ${(props) => props.backgroundcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  padding: 15px 25px;
  gap: 10px;
  cursor: pointer;
  text-shadow: 1px 2px 4px #87112f;
  margin-top: 15px;
  border: unset;
  &:hover {
    background-color: #ff310b;
    transition: 2s;
  }
`;

export default StyledButton;
