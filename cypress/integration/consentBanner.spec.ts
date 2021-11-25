import { Homepage } from "../pageObjects/homepage.basePage";

const homepage = new Homepage();

describe("consent banner", () => {
  beforeEach(() => {
    homepage.visit();
  });

  it("should be visible on first visit", () => {
    homepage.consentBanner.isVisible();
  });

  it("should not be visible after accepting", () => {
    homepage.consentBanner.accept();
    homepage.consentBanner.isNotVisible();
  });
});
