import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

export type AlertType = "success" | "default" | "danger" | "warning";
export interface AlertProps {
  className?: string;
  title?: string;
  description?: string;
  type?: AlertType;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  closeable?: Boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    title,
    description = "默认描述",
    type,
    onClose,
    closeable,
  } = props;

  const [close, setClose] = useState(false);

  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClose) {
      onClose(e);
    }
    setClose(true);
  };

  const closeIcon = closeable ? (
    <button data-testid="close" className="icon-times" onClick={handleClose}>
      <Icon icon="times" theme="dark" size="sm" />
    </button>
  ) : null;

  return !close ? (
    <div data-testid="alert" className={classes}>
      <span className="alert-title">{title}</span>
      <span className="alert-desc">{description}</span>
      {closeIcon}
    </div>
  ) : null;
};

Alert.defaultProps = {
  type: "success",
  closeable: false,
};

export default Alert;