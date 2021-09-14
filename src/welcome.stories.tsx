import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome Page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h2>欢迎来到 luo-ui 组件库</h2>
        <h4>安装试一试</h4>
        <code>npm install luo-ui --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
