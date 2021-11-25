export class ConsentBanner {
  private selectors: Selectors;

  constructor() {
    this.selectors = {
      linkAccept: 'a[id*="approveLink"]',
      divBanner: 'div[id*="cookiePanelUP"]',
    };
  }

  get divBanner() {
    return cy.get(this.selectors.divBanner);
  }

  get linkAccept() {
    return cy.get(this.selectors.linkAccept);
  }

  isBannerVisible() {
    this.divBanner.should("be.visible");
  }

  isBannerNotVisible() {
    this.divBanner.should("not.be.visible");
  }

  accept() {
    this.linkAccept.click();
  }
}
