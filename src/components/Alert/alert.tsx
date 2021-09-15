import React, { useState } from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

interface AlertProps {
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
    <button onClick={handleClose}>
      <span className="alert-icon">关</span>
    </button>
  ) : null;

  return !close ? (
    <div className={classes}>
      <span className="alert-title">{title}</span>
      <span className="alert-desc">{description}</span>
      {closeIcon}
    </div>
  ) : null;
};

Alert.defaultProps = {
  type: "default",
  closeable: false,
};

export default Alert;
