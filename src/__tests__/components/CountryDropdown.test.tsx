import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import CountryDropdown from "@components/DropdownsContainer/CountryDropdown/CountryDropdown";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

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

describe("Render country dropdown", () => {
  it("has no options", () => {
    const { container } = renderWithProviders(<CountryDropdown />);
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

    expect(screen.getByText("No Data")).toBeInTheDocument();
  });

  it("has options", () => {
    const { container, store } = renderWithProviders(<CountryDropdown />, {
      preloadedState: {
        ...preloadedState,
        countries: {
          ...preloadedState.countries,
          countries: ["Egypt", "Kenya"],
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

    const element = screen.getAllByText("Egypt").at(1);

    if (element) {
      act(() => {
        userEvent.click(element);
      });
    }

    expect(store.getState().countries.selectedCountry).toBe("Egypt");
  });
});
