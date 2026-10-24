import { fireEvent, render, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Link, useNavigate } from "react-router-dom";
import RouteScroll from "@/components/RouteScroll";

const Controls = () => {
  const navigate = useNavigate();
  return <>
    <Link to="/contact">Contact</Link>
    <Link to="/privacy">Privacy</Link>
    <Link to="/terms">Terms</Link>
    <Link to="/contact#office">Office</Link>
    <Link to="/#office">Same-page anchor</Link>
    <button onClick={() => navigate(-1)}>Back</button>
    <button onClick={() => navigate(1)}>Forward</button>
    <div id="office" />
  </>;
};

afterEach(() => { cleanup(); vi.restoreAllMocks(); });

const setup = () => render(<MemoryRouter><RouteScroll /><Controls /></MemoryRouter>);

describe("route scrolling", () => {
  it.each(["Contact", "Privacy", "Terms"])("opens %s instantly at scrollY 0", (label) => {
    const scroll = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const view = setup();
    fireEvent.click(view.getByText(label));
    expect(scroll).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "instant" });
  });

  it.each(["Office", "Same-page anchor"])("scrolls %s to its hash instead of the top", (label) => {
    const scroll = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const anchorScroll = vi.fn();
    const view = setup();
    const target = document.getElementById("office");
    if (!target) throw new Error("Missing anchor");
    target.scrollIntoView = anchorScroll;
    fireEvent.click(view.getByText(label));
    expect(anchorScroll).toHaveBeenCalledWith({ behavior: "instant", block: "start" });
    expect(scroll).not.toHaveBeenCalled();
  });

  it("does not override initial load or browser back and forward restoration", () => {
    const scroll = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const view = setup();
    expect(scroll).not.toHaveBeenCalled();
    fireEvent.click(view.getByText("Contact"));
    scroll.mockClear();
    fireEvent.click(view.getByText("Back"));
    fireEvent.click(view.getByText("Forward"));
    expect(scroll).not.toHaveBeenCalled();
  });
});