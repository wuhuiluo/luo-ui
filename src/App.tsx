import React from "react";
import Icon from "./components/Icon/icon";
import Button, {
  ButtonType,
  ButtonSize,
} from "../src/components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <div className="App">
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
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          我是button
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>
          百度
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com1">
          百度
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
          百度
        </Button>

        <Icon icon="life-ring" theme="danger" size="10x" />
      </header>
    </div>
  );
}

export default App;
