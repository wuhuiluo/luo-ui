import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon/icon";
type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /** 是否禁用input */
  disabled?: boolean;
  /** 设置input 大小，支持lg 或者 sm */
  size?: InputSize;
  /** 添加图标，在右侧添加一个图标，用于提示 */
  icon?: IconProp;
  /** 添加前缀 配置固定组合 */
  prepend?: string | ReactElement;
  /** 添加后缀 配置固定组合 */
  append?: string | ReactElement;
  /** 可扩展的类名 */
  className?: string;
  /** input输入发生变化触发的回调 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const fixValue = (value: any) => {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return value;
};

export const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    className,
    ...restProps
  } = props;
  const classes = classNames("luo-input-wrapper", className, {
    [`luo-input-size-${size}`]: size,
    "luo-input-group": prepend || append,
  });
  // 防止value和defaultValue同时出现
  if ("value" in props) {
    delete props.defaultValue;
    restProps.value = fixValue(props.value);
  }
  return (
    <div>
      <div className={classes} style={style}>
        {prepend && <div className="luo-input-group-prepend">{prepend}</div>}
        {icon && (
          <div className="luo-icon-wrapper">
            <Icon icon={icon} title={`title-${icon}`}></Icon>
          </div>
        )}
        <input className="luo-input-inner" disabled={disabled} {...restProps} />
        {append && <div className="luo-input-group-append">{append}</div>}
      </div>
    </div>
  );
};

export default Input;
