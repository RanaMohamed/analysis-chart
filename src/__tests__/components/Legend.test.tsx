import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import Legend from "@components/ChartContainer/Legend/Legend";

describe("Render chart container", () => {
  it("show message when no data selected", () => {
    renderWithProviders(
      <Legend
        legendDetails={{ total: 190, selectedCamp: "Kakuma" }}
        containerId={"test"}
        containerClassName={"test"}
        showSummary
      />
    );
    expect(screen.getByText("190")).toBeInTheDocument();
    expect(screen.getByText("Lessons")).toBeInTheDocument();
    expect(screen.getByText("in Kakuma")).toBeInTheDocument();
  });
});
