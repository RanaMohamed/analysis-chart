import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";

import Details from "@pages/details/Details";

const preloadedState = {
  layout: { theme: "light" },
  countries: { loaded: true, countries: [], selectedCountry: "Egypt" },
  camps: {
    loaded: true,
    camps: [],
    selectedCamp: "Omaka",
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
      selectedSchool: "Rapaura School",
      selectedMonth: "Apr",
    },
  },
};

describe("Render details component", () => {
  describe("Render details component without data", () => {
    it("has back link", () => {
      renderWithProviders(<Details />);

      const link = screen.getByText("Back");

      expect(link).toBeInTheDocument();
    });

    it("has message", () => {
      renderWithProviders(<Details />);
      expect(screen.getByText("No selected data to show")).toBeInTheDocument();
    });
  });

  describe("Render details component with data", () => {
    it("has one record per month", () => {
      renderWithProviders(<Details />, { preloadedState });
      expect(screen.getByText("Rapaura School")).toBeInTheDocument();
      expect(screen.getByText("Egypt")).toBeInTheDocument();
      expect(screen.getByText("Omaka")).toBeInTheDocument();
      expect(screen.getByText("Apr")).toBeInTheDocument();
      expect(screen.getByText("95")).toBeInTheDocument();
    });

    it("has multiple records per month", () => {
      renderWithProviders(<Details />, {
        preloadedState: {
          ...preloadedState,
          schools: {
            ...preloadedState.schools,
            records: [
              ...preloadedState.schools.records,
              {
                id: "620af3a431887e1d5b993e75",
                month: "Apr",
                camp: "Omaka",
                country: "Egypt",
                school: "Rapaura School",
                lessons: 75,
              },
            ],
          },
        },
      });
      expect(screen.getByText("Rapaura School")).toBeInTheDocument();
      expect(screen.getByText("Egypt")).toBeInTheDocument();
      expect(screen.getByText("Omaka")).toBeInTheDocument();
      expect(screen.getByText("Apr")).toBeInTheDocument();
      expect(screen.getByText(75 + 95)).toBeInTheDocument();
    });

    it("has multiple records for different months", () => {
      renderWithProviders(<Details />, {
        preloadedState: {
          ...preloadedState,
          schools: {
            ...preloadedState.schools,
            records: [
              ...preloadedState.schools.records,
              {
                id: "620af3a431887e1d5b993e75",
                month: "Nov",
                camp: "Omaka",
                country: "Egypt",
                school: "Rapaura School",
                lessons: 75,
              },
            ],
          },
        },
      });
      expect(screen.getByText("Rapaura School")).toBeInTheDocument();
      expect(screen.getByText("Egypt")).toBeInTheDocument();
      expect(screen.getByText("Omaka")).toBeInTheDocument();
      expect(screen.getByText("Apr")).toBeInTheDocument();
      expect(screen.getByText("95")).toBeInTheDocument();
    });
  });
});
