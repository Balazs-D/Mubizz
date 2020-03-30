// Utilities
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

// Component

import DiagramStep from './DiagramStep';

// Styled Comp

const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  margin: 20px;
`;





const ProcessDiagram = () => {
 



  return (
    <Li>
      <DiagramStep text='User information are necessary for registration and gives access to browsing on Mubizz.' number='1' />
      <DiagramStep text='Profile information gives access to interact with other users and creating references.' number='2' /> 
      <DiagramStep text='Member information are focusing on your professional knowledge and gives access to offering services.' number='3' />
    </Li>
  );
};

export default ProcessDiagram;
