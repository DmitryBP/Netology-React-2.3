import React, { useState } from 'react';
import DropdownList from './DropdownList';

type dropDownPropsType = {
  menuList: Array<string>;
};

export default function Dropdown(props: dropDownPropsType) {
  const [showList, setShowList] = useState(false);
  const onClickHandler = () => (showList ? setShowList(false) : setShowList(true));
  const onMouseLeave = () =>
    setTimeout(() => {
      setShowList(false);
    }, 300);
  return (
    <div>
      <button className="btn" onClick={onClickHandler}>
        account settings
        <DropdownList menuList={props.menuList} showMenuFlag={showList} onMouseLeave={onMouseLeave} />
      </button>
      
    </div>
  );
}
