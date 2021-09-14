import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button";
import { withInfo } from "@storybook/addon-info";

const defaultButton = () => (
  <Button onClick={action("clicked")}>default button</Button>
);

const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType="danger">danger button</Button>
    <Button btnType="primary">primary button</Button>
    <Button btnType="link">link button</Button>
  </>
);

storiesOf("Button Component", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: "this is a very nice component",
      inline: true,
    },
  })
  .add("默认 Button", defaultButton)
  .add("不同大小的 Button", buttonWithSize)
  .add("不同情况下的 Button", buttonWithType);
