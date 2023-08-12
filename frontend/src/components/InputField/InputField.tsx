import React, { useState } from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  type: string;
}

const StyledInput = styled.input`
  width: 553px;
  height: 82px;
  padding: 8px;
  border: 2px dashed #FC8019;
  border-radius: 10px;
  font-size: 16px;
  &:hover {
    border-color: #ff9f5b;
    cursor: pointer; 
  }

  &:focus {
    border-color: #FF5733; 
    outline: none; 
    box-shadow: 0 0 10px rgba(255, 87, 51, 0.5); 
  }

  &:active {
    border-color: #E64A19;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

const InputField: React.FC<InputFieldProps> = ({ type }) => {
  const [data, setData] = useState('');

  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
    console.log(data);
  };

  return (
    <StyledInput
      type={type}
      value={data}
      onChange={inputHandle}
    />
  );
};

export default InputField;
