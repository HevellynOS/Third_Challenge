import { styled } from "styled-components";
import searchIcon from '../../assets/images/search.png';

interface InputSearchProps {
  type?: string;
  placeholder?: string;
}

const InputStyled = styled.div`
  background-color: white;
  position: relative;
  width: 626px;
  height: 49px;
  border: solid 1px black; 
  display: flex;
  justify-content: space-between;
  padding: 15px 25px 15px 25px;
  border-radius: 40px;
  color: #808080;
  &:focus-within {
    border-color: #FC8019; 
    box-shadow: 0 0 8px #FC8019; 
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 30px);
  height: 100%;
  padding-left: 30px;
  border: none;
  outline: none;
  border-radius: inherit;
  color: inherit;
  
`;

const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${searchIcon});
  background-size: cover;
  margin-left: 10px;
  position: absolute;
  right: 15px; 
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const InputSearch: React.FC<InputSearchProps> = ({ type, placeholder }) => {
  return (
    <InputStyled>
      <SearchInput type={type} placeholder={placeholder} />
      <SearchIcon />
    </InputStyled>
  );
};

export default InputSearch;
