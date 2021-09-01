import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const [menuOpen, setOpen] = useState(false);
  const context = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  const renderChildren = () => {
    const subMenuClasses = classNames("menu-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return childElement;
      } else {
        console.error(
          "warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes}>
      <div onClick={handleClick} className="submenu-title">
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
