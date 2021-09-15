import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert, { AlertProps } from "./alert";

describe("Alert 组件", () => {
  it("测试默认情况", () => {
    const testProps: AlertProps = {
      description: "alert提示语",
      onClose: jest.fn(),
      closeable: true,
    };
    const wrapper = render(<Alert {...testProps} />);
    const element = wrapper.getByTestId("alert");
    const closeBtn = wrapper.getByTestId("close");
    expect(element).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
    expect(element).toHaveClass("alert-success");

    fireEvent.click(closeBtn);
    expect(testProps.onClose).toHaveBeenCalled();
    expect(closeBtn).not.toBeInTheDocument();
  });
});
