import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem>code link 1</MenuItem>
          <MenuItem>code link 2</MenuItem>
          <MenuItem>code link 3</MenuItem>
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
