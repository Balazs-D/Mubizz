// Utilities
import React, { useState, useContext } from 'react';

// Components
import CheckBox from '../Utilities/CheckBox';
import UserCont from '../../context/user/userContext';

const ButtonCheck = ({text, value, onClick, onChange, ...props }) => {

  const userCont = useContext(UserCont)
  const [checkedItem, setCheckedItem ] = useState(false);
  const handleCheckboxChange = e => {
    setCheckedItem( e.target.checked );
  
       if (userCont.selectedTags.includes(e.target.value)) {
         let index = userCont.selectedTags.indexOf(e.target.value);
         userCont.selectedTags.splice(index, 1);
       } else {
         userCont.selectedTags.push(e.target.value);
       }
       console.log(userCont.selectedTags);
  }


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

