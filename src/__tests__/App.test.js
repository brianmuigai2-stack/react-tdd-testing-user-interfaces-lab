// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text identifying the content of the image", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of|portrait of|image of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  // Limit the search to <p> elements only to avoid matching the <h1>.
  const bioParagraph = screen.getByText(
    /i am|i'm|passionate|developer|engineer/i,
    { selector: "p" }
  );
  expect(bioParagraph).toBeInTheDocument();
});

test("has a link to my GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("has a link to my LinkedIn page", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
