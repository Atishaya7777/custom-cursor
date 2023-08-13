import { render } from "@testing-library/react";

import Cursor from "./Cursor";

describe("Cursor", () => {
  test("renders the Button component", () => {
    render(<Cursor label='Hello world!' />);
  });
});
