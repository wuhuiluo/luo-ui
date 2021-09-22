import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome Page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h2>欢迎来到 luo-ui 组件库</h2>
      </>
    );
  },
  { info: { disable: true } }
);
