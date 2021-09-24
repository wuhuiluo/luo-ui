import React, { FC, ReactText, useState, MouseEvent } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

export interface TagProps {
  closeable?: boolean;
  onClose?: (e: MouseEvent) => void;
  children: ReactText;
}

export const Tag: FC<TagProps> = (props) => {
  const { closeable, onClose, children } = props;
  const [tagShow, setTagShow] = useState(true);
  const classes = classNames("luo-tag", "default", {
    "is-closable": closeable,
  });
  const handleClose = (e: MouseEvent) => {
    setTagShow(false);
    onClose && onClose(e);
  };
  return tagShow ? (
    <span className={classes}>
      {children}
      {closeable && (
        <div onClick={handleClose} className="icon-wrapepr">
          <Icon icon="times" size="sm" theme="dark" />
        </div>
      )}
    </span>
  ) : null;
};

export default Tag;
