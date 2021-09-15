import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";

const defaultAlert = () => (
  <Alert
    className="width-500"
    onClose={action("close")}
    description="this is alert info"
  />
);

const alertWithType = () => (
  <div>
    <Alert
      onClose={action("close")}
      description="this is alert"
      type="success"
    />
    <Alert
      onClose={action("close")}
      className="mt-20"
      description="this is alert"
      type="warning"
    />
    <Alert
      onClose={action("close")}
      className="mt-20"
      description="this is alert"
      type="default"
    />
    <Alert
      onClose={action("close")}
      className="mt-20"
      description="this is alert"
      type="danger"
    />
  </div>
);

const alertWithCloseble = () => (
  <Alert className="width-500" closeable description="this is alert info" />
);

const alertWithTitle = () => (
  <Alert
    className="width-500"
    onClose={action("close")}
    description="this is alert"
    title="标题"
    type="success"
  />
);

storiesOf("Alert 警告提示", module)
  .addParameters({
    info: {
      text: `
    ## 引用方法
    ~~~js
    import {Alert} from 'luo-ui'
    ~~~
    `,
    },
  })
  .add("默认的 Alert", defaultAlert)
  .add("不同类型的 Alert", alertWithType)
  .add("可关闭的 Alert", alertWithCloseble)
  .add("带有标题的 Alert", alertWithTitle);
