import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import SchoolDropdown from "@components/DropdownsContainer/SchoolDropdown/SchoolDropdown";

const preloadedState = {
  countries: { loaded: false, countries: [], selectedCountry: null },
  camps: {
    loaded: true,
    camps: [],
    selectedCamp: null,
  },
  schools: {
    loaded: true,
    records: [],
    selectedSchool: null,
    detailsOptions: {
      selectedSchool: null,
      selectedMonth: null,
    },
  },
};

describe("Render school dropdown", () => {
  it("has only all option", () => {
    const { container } = renderWithProviders(<SchoolDropdown />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();

    const selectElement = container
      .getElementsByClassName("ant-select-selector")
      .item(0);

    expect(selectElement).toBeInTheDocument();

    if (selectElement) {
      act(() => {
        userEvent.click(selectElement);
      });
    }

    expect(screen.getByText("ALL")).toBeInTheDocument();
  });

  it("has options", () => {
    const { container, store } = renderWithProviders(<SchoolDropdown />, {
      preloadedState: {
        ...preloadedState,
        countries: {
          ...preloadedState.countries,
          countries: ["Egypt", "Kenya"],
          selectedCountry: "Egypt",
        },
        camps: {
          ...preloadedState.camps,
          camps: ["Omaka"],
          selectedCamp: "Omaka",
        },
        schools: {
          ...preloadedState.schools,
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
        },
      },
    });

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const selectElement = container
      .getElementsByClassName("ant-select-selector")
      .item(0);

    expect(selectElement).toBeInTheDocument();

    if (selectElement) {
      act(() => {
        userEvent.click(selectElement);
      });
    }

    const selectItems =
      container.parentElement?.getElementsByClassName("ant-select-item");
    expect(selectItems).toHaveLength(2);

    const element = screen.getAllByText("Rapaura School").at(1);

    if (element) {
      act(() => {
        userEvent.click(element);
      });
    }

    expect(store.getState().schools.selectedSchool).toBe("Rapaura School");
  });
});
