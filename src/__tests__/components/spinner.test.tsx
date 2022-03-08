import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsDKAQ dFzOKQ"
      >
        <svg
          class="sc-bdvvtL bDLLMB sc-dkPtRN bOPIJ"
          color="text"
          viewBox="0 0 32 32"
          width="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href="data:image/png;base64,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s"
            width="32"
          />
        </svg>
      </div>
    </DocumentFragment>
  `);
});
