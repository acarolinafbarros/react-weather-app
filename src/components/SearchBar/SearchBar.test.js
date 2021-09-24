import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

const SearchBarProps = {
  searchSubmit: jest.fn(),
  inputStatusError: false,
  inputMessageError: "mock error",
};

describe("SearchBar Component", () => {
  let searchBar;
  let searchLabel;
  let searchInput;
  let searchButton;
  let searchError;

  beforeEach(() => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <SearchBar {...SearchBarProps} />
      </MemoryRouter>
    );

    searchBar = getByTestId("search-bar");
    searchLabel = getByTestId("search-label");
    searchInput = getByTestId("search-input");
    searchButton = getByTestId("search-button");
    searchError = container.querySelector("search-input-error");
  });

  it("should display the search bar container", () => {
    expect(searchBar).not.toBeNull();
  });

  it("should display the search label equal to 'Enter city:'", () => {
    expect(searchLabel).toHaveTextContent("Enter city:");
  });

  it("should display the search input", () => {
    expect(searchInput).not.toBeNull();
  });

  it("should display the search button with the text equal to 'Search'", () => {
    expect(searchButton).toHaveTextContent("Search");
  });

  it("should not render the message input error", () => {
    expect(searchError).toBeNull();
  });
});
