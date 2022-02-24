import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtRN lhIHIX"
        scale="md"
      >
        <input
          checked=""
          class="sc-gsDKAQ sSEDA"
          scale="md"
          type="checkbox"
        />
        <div
          class="sc-bdvvtL cjXrWJ"
          scale="md"
        />
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtRN NoRIx"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gsDKAQ kxtPlg"
          scale="sm"
          type="checkbox"
        />
        <div
          class="sc-bdvvtL gAeElx"
          scale="sm"
        />
      </div>
    </DocumentFragment>
  `);
});
