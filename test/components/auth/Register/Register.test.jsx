import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { RegisterFormContaine } from "../../../../src/components/Auth/components/Register";
import { BrowserRouter } from "react-router-dom";

describe("Test in RegisterFormContaine Component", () => {
  test("should match with snapshot", () => {
    const component = render(
      <BrowserRouter>
        <RegisterFormContaine />
      </BrowserRouter>
    );
    expect(component.container).toMatchSnapshot();
  });
});
