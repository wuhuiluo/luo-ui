import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "./fix_info.scss";
import "../src/styles/index.scss";
import React from "react";

const wrapperStyle = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn) => {
  return (
    <div style={wrapperStyle}>
      <h3>组件演示</h3>
      {stroyFn()}
    </div>
  );
};
addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });

const loaderFn = () => {
  const allExports = [require("../src/welcome.stories.tsx")];
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
