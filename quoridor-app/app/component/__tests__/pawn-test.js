import React from "react";
import renderer from "react-test-renderer";

import { Pawn } from "../pawn";

it("renders correctly", () => {
  const tree = renderer
    .create(<Pawn color="red" position="{top: 0, left: 10}" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("<Pawn />", () => {
  it("has no child", () => {
    const tree = renderer
      .create(<Pawn color="red" position="{top: 0, left: 10}" />)
      .toJSON();
    expect(tree.children.length).toBe(0);
  });
});
