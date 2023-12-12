import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { LoginFormContaine } from "../../../../src/components/Auth/components/Login";
import { BrowserRouter } from "react-router-dom";

describe("Test in LoginFormContaine Component", () => {
  test("should match with snapshot", () => {
    const component = render(
      <BrowserRouter>
        <LoginFormContaine />
      </BrowserRouter>
    );
    expect(component.container).toMatchSnapshot();
  });
});
