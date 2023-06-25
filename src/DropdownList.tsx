import React from 'react';
type dropDownListPropsType = {
  menuList: Array<string>;
  showMenuFlag: boolean;
  onMouseLeave: () => void;
};
export default function DropdownList(props: dropDownListPropsType) {
  const activeItem = 3;
  return (
    <div onMouseLeave={props.onMouseLeave}>
      <ul className={props.showMenuFlag ? 'MenuList active' : 'MenuList'} >
        {props.menuList.map((item, itemIndex) => {
          return (
            <li key={itemIndex} className={itemIndex === activeItem - 1 ? 'menuItem menuItemActiv' : 'menuItem'}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
