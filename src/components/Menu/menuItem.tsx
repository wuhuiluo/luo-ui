import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu/menu";
export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, classname, style, children } = props;
  const context = useContext(MenuContext);
  console.log(context)
  const classes = classNames("menu-item", classname, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };
  return (
    <li style={style} className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
