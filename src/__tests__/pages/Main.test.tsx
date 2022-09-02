import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";

import Main from "@pages/main/Main";

jest.mock("src/components/common/Chart/Chart", () => () => "");

const mockDropdownsContainerComponent = jest.fn();
jest.mock(
  "src/components/DropdownsContainer/DropdownsContainer",
  () =>
    function DropdownsContainerMock(props: unknown) {
      mockDropdownsContainerComponent(props);
      return <></>;
    }
);

const mockChartsContainerComponent = jest.fn();
jest.mock(
  "src/components/ChartContainer/ChartContainer",
  () =>
    function ChartsContainerMock(props: unknown) {
      mockChartsContainerComponent(props);
      return <></>;
    }
);

describe("Render main component", () => {
  it("has main title", () => {
    renderWithProviders(<Main />);
    expect(screen.getByText("Analysis Chart")).toBeInTheDocument();
  });

  it("has secondary title", () => {
    renderWithProviders(<Main />);
    expect(screen.getByText("Number of lessons")).toBeInTheDocument();
  });

  it("has DropdownsContainer", () => {
    renderWithProviders(<Main />);

    expect(mockDropdownsContainerComponent).toHaveBeenCalledTimes(1);
  });

  it("has ChartContainer", () => {
    renderWithProviders(<Main />);
    expect(mockChartsContainerComponent).toHaveBeenCalledTimes(1);
  });
});
