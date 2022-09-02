import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import DropdownsContainer from "@components/DropdownsContainer/DropdownsContainer";

jest.mock("src/components/common/Chart/Chart", () => () => "");

describe("Render dropdowns container", () => {
  it("has 3 dropdowns", () => {
    renderWithProviders(<DropdownsContainer />);
    expect(screen.getByLabelText("Select Country")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Camp")).toBeInTheDocument();
    expect(screen.getByLabelText("Select School")).toBeInTheDocument();
  });
});
