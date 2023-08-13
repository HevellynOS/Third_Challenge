import React from 'react';
import StyledButton from './StyledButton'; // Adjust the import path accordingly

interface ButtonProps {
  buttontype: string;
  color: string;
  backgroundcolor: string;
  width: string;
  height: string;
  radius: string;
}


const Button: React.FC<ButtonProps> = ({ buttontype, color, backgroundcolor, width, height, radius }) => {
  const registerHandleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('Button clicked');
  };

  return (
    <StyledButton
      color={color}
      backgroundcolor={backgroundcolor}
      width={width}
      height={height}
      radius={radius}
      onClick={registerHandleClick}
    >
      {buttontype}
    </StyledButton>
  );
};

export default Button;
