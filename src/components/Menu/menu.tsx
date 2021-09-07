import React, { createContext, useEffect, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  defaultOpenSubMenu?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    style,
    mode,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenu,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("luo-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log(childElement);
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  useEffect(() => {
    renderChildren();
  });
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenu: [],
};

export default Menu;
