import { render, fireEvent } from "@testing-library/react";
import DateButton from ".";

const date = new Date(Date.UTC(2020, 5, 10));

describe("DateButton", () => {
  it("renders the given date", () => {
    const { container } = render(
      <DateButton date={date} onChange={() => {}} />
    );

    expect(container).toHaveTextContent("June 2020");
  });

  it("forwards one month when the Next button is clicked", () => {
    const handleChange = jest.fn();

    const { getByRole } = render(
      <DateButton date={date} onChange={handleChange} />
    );

    fireEvent.click(getByRole("button", { name: "Next Month" }));

    expect(handleChange.mock.calls.pop()[0].getMonth()).toBe(
      date.getMonth() + 1
    );
  });

  it("backwards one month when the Previous button is clicked", () => {
    const handleChange = jest.fn();

    const { getByRole } = render(
      <DateButton date={date} onChange={handleChange} />
    );

    fireEvent.click(getByRole("button", { name: "Previous Month" }));

    expect(handleChange.mock.calls.pop()[0].getMonth()).toBe(
      date.getMonth() - 1
    );
  });
});
