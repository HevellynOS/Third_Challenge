import React from "react";
import styled from "styled-components";

interface CardStyledProps {
  children: React.ReactNode;
}

const CardStyled = styled.div`
  width: 307px;
  height: 474px;
  border-radius: 10px;
  background: #F8F8F8;
  ;
  display: flex;
  gap: 10px;
    & li {
      display: flex;
      flex-direction: column;
      justify-content: center;
    } 
    & h2 {
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
    }


`;

const FitMeCard: React.FC<CardStyledProps> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

export default FitMeCard;
