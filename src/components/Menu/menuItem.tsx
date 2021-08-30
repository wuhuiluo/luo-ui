import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  classname?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, classname, style, children } = props;
  const classes = classNames("menu-item", classname, {
    "is-disabled": disabled,
  });
  return (
    <li style={style} className={classes}>
      {children}
    </li>
  );
};

export default MenuItem;
