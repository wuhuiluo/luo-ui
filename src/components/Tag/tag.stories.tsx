import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tag from "./tag";

const defaultTag = () => <Tag>我是Tag</Tag>;

const TagWithCloseIcon = () => (
  <Tag closeable onClose={action("close")}>
    123
  </Tag>
);
storiesOf("Tag 标签", module)
  .add("默认的 Input", defaultTag)
  .add("带有关闭的Tag", TagWithCloseIcon);
