export class ConsentBanner {
  private selectors: Selectors;

  constructor() {
    this.selectors = {
      linkAccept: 'a[id*="approveLink"]',
    };
  }

  isBannerVisible() {
    cy.get(this.selectors.linkAccept).should("be.visible");
  }

  isBannerNotVisible() {
    cy.get(this.selectors.linkAccept).should("not.be.visible");
  }

  accept() {
    cy.get(this.selectors.linkAccept).click();
  }
}
