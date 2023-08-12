
import { styled } from "styled-components"
import searchIcon from '../../assets/images/search.png';



const InputSearch = () => {

    const InputStyled = styled.div`
      display: flex;
      border: 2px solid #808080;
      align-items: center;
      width: 550px;
      height: 49px;
      border-radius: 10px;
      opacity: 0.75;
    `;
  
    const InputField = styled.input`
    flex: 1;
    border: none;
    padding: 15px 10px;
    border-radius: 10px;
    outline: none;
  `;
  
    const SearchIcon = styled.div`
      width: 20px;
      height: 20px;
      background-image: url(${searchIcon});
      background-size: cover;
      margin-right: 10px;
    `;
  
    return (
      <InputStyled>
        <InputField type="text" placeholder="Enter item or restaurant you are looking for" />
        <SearchIcon />
      </InputStyled>
    );
  };

export default InputSearch