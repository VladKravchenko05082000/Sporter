import React from 'react';
import './style.scss';

const Modals = ({ active, setActive, children }) => {
   return (
      <div
         className={active ? 'Modal active' : 'Modal'}
         onClick={() => setActive(false)}
      >
         <div
            className={active ? 'Modal__container active' : 'Modal__container'}
            onClick={(e) => e.stopPropagation()}
         >
            {children}
         </div>
      </div>
   );
};
export default Modals;
