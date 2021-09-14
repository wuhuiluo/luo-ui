import { configure, addDecorator, addParameters } from "@storybook/react";
// import { withInfo } from '@storybook/addon-info';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "../src/styles/index.scss";
import React from "react";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => {
  return (
    <div style={wrapperStyle}>
      <h3>luo-ui</h3>
      {stroyFn()}
    </div>
  );
};
addDecorator(storyWrapper);
// addDecorator(withInfo);
// addDecorator(withInfo); 

addParameters({ info: { inline: true, header: false } });

const loaderFn = () => {
  const allExports = [require("../src/welcome.stories.tsx")];
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
