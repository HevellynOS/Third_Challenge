import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type: string;
}

const StyledButton = styled.button`
  color: #FFFFFF;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  background-color: #FC8019;
  width: 365px;
  height: 66px;
  border-radius: 10px;
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

const Button: React.FC<ButtonProps> = ({ type }) => {
  const registerHandleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('Button clicked');
  };

  return (
    <StyledButton onClick={registerHandleClick}>{type}</StyledButton>
  );
};

export default Button;
