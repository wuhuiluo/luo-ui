import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
