import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const defaultInput = () => (
  <Input
    className="width-500"
    onChange={action("change")}
    placeholder="请输入"
  />
);

const InputWithDisabled = () => (
  <Input
    className="width-500"
    onChange={action("change")}
    disabled
    placeholder="请输入"
  />
);

const InputWithIcon = () => (
  <Input placeholder="带图标带输入框" className="width-500" icon="search" />
);

const InputWithSize = () => (
  <div className="width-500">
    <Input defaultValue="large size" size="lg" />
    <Input className="mt-20" defaultValue="small size" size="sm"></Input>
  </div>
);

const InputWithPend = () => (
  <div>
    <Input defaultValue="prepend text" prepend="https://" />
    <Input className="mt-20" defaultValue="append text" append=".com" />
  </div>
);

storiesOf("Input 输入框", module)
  .add("默认的 Input", defaultInput)
  .add("被禁用的 Input", InputWithDisabled)
  .add("带图标的 Input", InputWithIcon)
  .add("大小不同的 Input", InputWithSize)
  .add("带前后缀的 Input", InputWithPend);
