import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorList from "./ColorList";

test("getBy,queryBy,findBy,finding 0 elements", async () => {
  render(<ColorList />);

  //   screen.getByRole('textbox');

  expect(() => screen.getByRole("textbox")).toThrow();

  expect(screen.queryByRole("textbox")).toEqual(null);

  let errorThrown = false;

  try {
    await screen.findByRole("textbox");
  } catch (err) {
    errorThrown = true;
  }

  expect(errorThrown).toEqual(true);
});
