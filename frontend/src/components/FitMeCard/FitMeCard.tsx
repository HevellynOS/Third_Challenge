import React, { ReactNode } from "react";
import styled from "styled-components";

interface FitMeCardProps {
  children: ReactNode;
}

const CardStyled = styled.div`
  width: 307px;
  height: 474px;
  border-radius: 10px;
  background-color: #F8F8F8;
  gap: 10px;
`;

const FitMeCard: React.FC<FitMeCardProps> = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

export default FitMeCard;
