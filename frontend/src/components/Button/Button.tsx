import React from 'react';
import StyledButton from './StyledButton';

interface ButtonProps { 
  text: string;
  click: (event: React.FormEvent) => Promise<void>;
  color: string;
  backgroundcolor: string;
  width: string;
  height: string;
  radius: string;
}

const Button: React.FC<ButtonProps> = ({ text, click, color, backgroundcolor, width, height, radius }) => {

  return (
    <StyledButton
      color={color}
      backgroundcolor={backgroundcolor}
      width={width}
      height={height}
      radius={radius}
      onClick={click}
    >
      {text}
    </StyledButton>
  
  );
};

export default Button;