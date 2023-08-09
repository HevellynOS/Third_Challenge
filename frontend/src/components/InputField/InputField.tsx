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
`;

const InputField: React.FC<InputFieldProps> = ({ type }) => {
  const [data, setData] = useState('');

  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
    console.log(data)
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
