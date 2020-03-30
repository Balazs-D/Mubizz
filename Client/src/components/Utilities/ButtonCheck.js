// Utilities
import React, { useState } from 'react';

// Components
import CheckBox from '../Utilities/CheckBox'

const ButtonCheck = ({text, value, onClick, ...props }) => {

  const [checkedItem, setCheckedItem ] = useState(false);
  const handleCheckboxChange = e => setCheckedItem( e.target.checked );


console.log(checkedItem)
   return (
     <div style={{ fontFamily: 'system-ui' }}>
       <label>
         <CheckBox
           checked={checkedItem}
           onClick={onClick}
           onChange={handleCheckboxChange}
           text={text}
           value={value}
           {...props}
           
         />
        
       </label>
     </div>
   );
};

export default ButtonCheck;

