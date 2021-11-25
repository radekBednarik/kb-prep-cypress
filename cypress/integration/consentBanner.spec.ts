import { Homepage } from "../pageObjects/homepage.basePage";

describe("consent banner", () => {
  const homepage = new Homepage();
  beforeEach(() => {
    homepage.visit();
  });

  it("should be visible on first visit", () => {
    homepage.consentBanner.isBannerVisible();
  });

  it("should not be visible after accepting", () => {
    homepage.consentBanner.accept();
    homepage.consentBanner.isBannerNotVisible();
  });
});
