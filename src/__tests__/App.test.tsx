// src/__tests__/App.test.tsx
// This file tests the main voting app rendering, searching, and voting features.

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { VotingProvider } from "../context/VotingContext";

function renderApp() {
  return render(
    <VotingProvider>
      <App />
    </VotingProvider>
  );
}

describe("Movie & TV Series Voting App", () => {
  test("renders the app title", () => {
    renderApp();

    expect(
      screen.getByText(/Movie & TV Series Voting App/i)
    ).toBeInTheDocument();
  });

  test("filters movies using the search box", async () => {
    const user = userEvent.setup();

    renderApp();

    const searchInput = screen.getByPlaceholderText(
      /Search movies or TV series/i
    );

    await user.type(searchInput, "Interstellar");

    expect(screen.getByText("Interstellar")).toBeInTheDocument();
    expect(screen.getByText("1 results")).toBeInTheDocument();
  });

  test("updates vote count when vote button is clicked", async () => {
    const user = userEvent.setup();

    renderApp();

    const voteButtons = screen.getAllByText(/Vote/i);

    await user.click(voteButtons[0]);

    expect(screen.getByText(/43 votes/i)).toBeInTheDocument();
  });
});