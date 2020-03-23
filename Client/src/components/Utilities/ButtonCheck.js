// Utilities
import React, { useState } from 'react';

// Components
import CheckBox from '../Utilities/CheckBox'

const ButtonCheck = ({text, value }) => {

  const [checked, setChecked ] = useState(false);
  const handleCheckboxChange = e => setChecked( e.target.checked );
  const handleClick = e => {
    console.log(e.target.value);
    console.log(checked);
  };

   return (
     <div style={{ fontFamily: 'system-ui' }}>
       <label>
         <CheckBox
           checked={checked}
           onClick={handleClick}
           onChange={handleCheckboxChange}
           text={text}
           value={value}
         />
        
       </label>
     </div>
   );
};

export default ButtonCheck;

