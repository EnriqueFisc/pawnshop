import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Notification } from "../../../src/components/Notifications/Notification";

describe("Test in Notification Component", () => {
  test("should match with snapshot", () => {
    const component = render(
      <Notification msg={"Testing"} ok={false} setNotification={() => {}} />
    );
    expect(component.container).toMatchSnapshot();
  });
});
