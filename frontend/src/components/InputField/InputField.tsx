
import styled from 'styled-components';

interface InputFieldProps {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

const InputField: React.FC<InputFieldProps> = ({ type, onChange }) => {

  return (
    <StyledInput
      type={type}
      onChange={onChange}
    />
  );
};

export default InputField;
