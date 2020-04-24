// Utilities
import React from 'react';
import styled, {keyframes } from 'styled-components';

// Styled Components

const Pulse = keyframes`
0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(238, 95, 99, 0.7);
	}

	70% {
		transform: scale(1.1);
		box-shadow: 0 0 0 20px rgba(20, 25, 19, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(238, 95, 99, 0);
  }`;
  
  const PulseInside = keyframes`
0% {
		transform: scale(1);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(1);
	}`;

const Button = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 60px;
  width: 100px;
  /* top: 50px;  */
  right: 100px;
  top: 200px;
  z-index: 1001;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transition: all 0.35s ease-in;
  transform: scale(1);
  animation: ${Pulse} 2s infinite;
  border-radius: 10px;
  backface-visibility: hidden;
  image-rendering: -webkit-optimize-contrast;
  outline: none;
  border: none;
  font-family: ${(props) => props.theme.fontFamily[3]};
  font-size: ${(props) => props.theme.fontSizes.large};
  background-color: ${(props) => props.theme.colors.gradientYellow};
  border: 3px solid ${(props) => props.theme.colors.mainPurple};
  @media (min-width: 800px) {
    font-size: ${(props) => props.theme.fontSizes.small};
    transition: all 0.3s ease-in-out;
    /* height: 100%; */

    &:hover {
      background-color: ${(props) => props.theme.colors.infoLight};
      /* animation: none; */
      box-shadow: 0px 0px 10px 1px ${(props) => props.theme.colors.warning};
      border: 3px solid ${(props) => props.theme.colors.mainPurple};
      border-radius: 10px;
    }

    &:active {
      background-color: ${(props) => props.theme.colors.mainRed};
      box-shadow: 0px 0px 40px ${(props) => props.theme.colors.gradientPink};
    }
  }
`;

const Sp = styled.p`
  transform: scale(1);
  animation: ${PulseInside} 2s infinite;
  color: ${(props) => props.theme.colors.mainPurple};
`;

const ButtonSubmit = ({ className, text, onClick, type, component }) => {
  return (
    <Button
      className={className}
      component={component}
      onClick={onClick}
      type={type}
    >
        <Sp>{text}</Sp>
    </Button>
  );
};
export default ButtonSubmit;
