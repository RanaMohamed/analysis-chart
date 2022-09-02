import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";

import ChartContainer from "@components/ChartContainer/ChartContainer";

const preloadedState = {
  countries: { loaded: true, countries: [], selectedCountry: null },
  camps: {
    loaded: true,
    camps: [],
    selectedCamp: null,
  },
  schools: {
    loaded: true,
    records: [
      {
        id: "620af3a4634b6e99d523c924",
        month: "Apr",
        camp: "Omaka",
        country: "Egypt",
        school: "Rapaura School",
        lessons: 95,
      },
    ],
    selectedSchool: null,
    detailsOptions: {
      selectedSchool: null,
      selectedMonth: null,
    },
  },
};

jest.mock("src/components/common/Chart/Chart", () => () => "");

describe("Render chart container", () => {
  it("show message when no data selected", () => {
    renderWithProviders(<ChartContainer />);
    expect(
      screen.getByText("Please select country & camp to show lessons chart")
    ).toBeInTheDocument();
  });

  it("show message when only country is selected", () => {
    renderWithProviders(<ChartContainer />, {
      preloadedState: {
        ...preloadedState,
        countries: {
          ...preloadedState.countries,
          selectedCountry: "Egypt",
        },
      },
    });
    expect(
      screen.getByText("Please select country & camp to show lessons chart")
    ).toBeInTheDocument();
  });

  it("show message when only camp is selected", () => {
    renderWithProviders(<ChartContainer />, {
      preloadedState: {
        ...preloadedState,
        camps: {
          ...preloadedState.camps,
          selectedCamp: "Omaka",
        },
      },
    });
    expect(
      screen.getByText("Please select country & camp to show lessons chart")
    ).toBeInTheDocument();
  });

  it("show chart when both country and camp are selected", () => {
    renderWithProviders(<ChartContainer />, {
      preloadedState: {
        ...preloadedState,
        countries: {
          ...preloadedState.countries,
          selectedCountry: "Egypt",
        },
        camps: {
          ...preloadedState.camps,
          selectedCamp: "Omaka",
        },
      },
    });

    expect(screen.getByTestId("chart")).toBeInTheDocument();
  });
});
