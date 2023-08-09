import styled from 'styled-components';

interface LabelDataProps {
    data: string;
  }
  const StyledLabel = styled.label`
        
  width: 120px;
  height: 36px;
  font-weight: 600;
  size: 24px;
  line-height: 36px;
  color: #202020;

`;

  export const LabelData: React.FC<LabelDataProps> = ({ data }) => {


    return (
    <StyledLabel>
      <label htmlFor={data}>{data}</label>
    </StyledLabel>
    );
  };

  