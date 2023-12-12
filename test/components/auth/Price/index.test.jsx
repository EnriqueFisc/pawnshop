import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Prices } from "../../../../src/components/price";

describe("Test in Prices Component", () => {
  test("should match with snapshot", () => {
    const component = render(<Prices />);
    expect(component.container).toMatchSnapshot();
  });
});
