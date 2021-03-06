import React from "react";
import Icon from "./components/Icon/icon";
import Button from "../src/components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import Alert from "./components/Alert/alert";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
      <Alert title='我是标题' description="输入666" closeable></Alert>
      <header className="App-header">
        <Menu
          defaultOpenSubMenu={["3"]}
          defaultIndex="0"
          mode="vertical"
          onSelect={(index) => alert(index)}
        >
          <MenuItem>code link 1</MenuItem>
          <MenuItem disabled>code link 2</MenuItem>
          <MenuItem>code link 3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>code link777</MenuItem>
            <MenuItem>code link777</MenuItem>
          </SubMenu>
        </Menu>

        <Button disabled>我是button</Button>
        <Button>Button</Button>
        <Button btnType="primary" size="lg">
          我是button
        </Button>

        <Icon icon="life-ring" theme="danger" size="10x" />
      </header>
    </div>
  );
}

export default App;
