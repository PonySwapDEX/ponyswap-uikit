import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Card, CardBody, CardHeader, CardFooter } from "../../components/Card";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdvvtL louQmw"
      >
        <div
          class="sc-dkPtRN kHRJBP"
        >
          Header
        </div>
        <div
          class="sc-gsDKAQ bubPPh"
        >
          Body
        </div>
        <div
          class="sc-hKwDye cnJKwA"
        >
          Footer
        </div>
      </div>
    </DocumentFragment>
  `);
});
