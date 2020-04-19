// Utilities
import React from 'react';
import styled, {keyframes} from 'styled-components';

const BlinkInfoField = ({ text }) => {
  return <P>{text}</P>;
};

export default BlinkInfoField;

// Styled Comp

const Blink = keyframes`
0% {
		opacity: 0;
	}

	20% {
		opacity: 0;
	}

	50% {
		opacity: 1;
    }
    80% {
		opacity: 1;
    }

    100% {
		opacity: 0;
    }
    
    
    `;

const P = styled.p`
  color: ${(props) => props.theme.colors.info};
  font-size: ${(props) => props.theme.fontSizes.xm};
  border: 1px solid ${(props) => props.theme.colors.info};
  padding: 1px 3px;
  border-radius: 3px;
  opacity: 1;
  animation: ${Blink} 4s infinite;
  
`;
