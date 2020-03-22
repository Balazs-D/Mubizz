// Utilities
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import CheckBox from '../Utilities/CheckBox'

const ButtonCheck = ({text}) => {

  const [checked, setChecked ] = useState(false);
  const handleCheckboxChange = e => setChecked( e.target.checked );

   return (
     <div style={{ fontFamily: 'system-ui' }}>
       <label>
         <CheckBox
           checked={checked}
           onChange={handleCheckboxChange}
           text={text}
         />
        
       </label>
     </div>
   );
};

export default ButtonCheck;

