import { afterEach, describe, expect, it, vi } from "vitest";
import { calculateAge } from "@/pages/EarlyAccess";

describe("Early access age eligibility", () => {
  afterEach(() => vi.useRealTimers());

  it("reaches the 18-and-over threshold on the eighteenth birthday", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 19));
    expect(calculateAge(new Date(2008, 9, 19))).toBe(18);
  });

  it("remains under 18 until the eighteenth birthday", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 19));
    expect(calculateAge(new Date(2008, 9, 20))).toBe(17);
  });
});