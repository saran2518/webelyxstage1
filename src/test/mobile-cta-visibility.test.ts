import { describe, expect, it } from "vitest";
import { shouldShowMobileCta } from "@/components/mobile-cta-visibility";

describe("mobile sticky early access", () => {
  it("is hidden while the hero is visible", () => {
    expect(shouldShowMobileCta(true, false, false)).toBe(false);
  });
  it("appears after the hero leaves view", () => {
    expect(shouldShowMobileCta(false, false, false)).toBe(true);
  });
  it("is hidden when the footer enters view", () => {
    expect(shouldShowMobileCta(false, true, false)).toBe(false);
  });
  it("does not cover the open mobile menu", () => {
    expect(shouldShowMobileCta(false, false, true)).toBe(false);
  });
});