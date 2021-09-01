import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
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
      </header>
    </div>
  );
}

export default App;
