import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@utils/testUtils";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Dropdown from "@components/common/Dropdown/Dropdown";

describe("Render dropdown", () => {
  it("has no options", () => {
    const onSelect = jest.fn();
    const { container } = renderWithProviders(
      <Dropdown
        id="mock"
        title="Mock"
        onSelect={onSelect}
        data={[]}
        value={null}
      />
    );
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
    expect(onSelect).toBeCalledTimes(0);
  });

  it("has options", () => {
    const onSelect = jest.fn();
    const { container } = renderWithProviders(
      <Dropdown
        id="mock"
        title="Mock"
        onSelect={onSelect}
        data={["Item 1", "Item 2"]}
        value={null}
      />
    );

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

    const element = screen.getAllByText("Item 1")[1];

    if (element) {
      act(() => {
        userEvent.click(element);
      });
    }

    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("Item 1", expect.anything());
  });

  it("has no options with all", () => {
    const onSelect = jest.fn();
    const { container } = renderWithProviders(
      <Dropdown
        id="mock"
        title="Mock"
        onSelect={onSelect}
        data={[]}
        value={null}
        showAll
      />
    );
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
    expect(onSelect).toBeCalledTimes(0);
  });

  it("has options with all", () => {
    const onSelect = jest.fn();
    const { container } = renderWithProviders(
      <Dropdown
        id="mock"
        title="Mock"
        onSelect={onSelect}
        data={["Item 1", "Item 2", "Item 3"]}
        value={null}
        showAll
      />
    );

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
    expect(selectItems).toHaveLength(4);

    const element = screen.getAllByText("Item 1")[1];

    if (element) {
      act(() => {
        userEvent.click(element);
      });
    }

    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("Item 1", expect.anything());
  });
});
