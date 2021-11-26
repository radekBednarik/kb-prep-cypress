export class ConsentBanner {
  private selectors: Selectors;

  constructor() {
    this.selectors = {
      linkAccept: 'a[id*="approveLink"]',
      divBanner: "div#cookie-law",
    };
  }

  get divBanner() {
    return cy.get(this.selectors.divBanner, { timeout: 10000 });
  }

  get linkAccept() {
    return cy.get(this.selectors.linkAccept, { timeout: 10000 });
  }

  isVisible() {
    this.divBanner.should("be.visible");
  }

  isNotVisible() {
    this.divBanner.should("not.be.visible");
  }

  accept() {
    this.linkAccept.click().should("not.exist");
    cy.getCookie("cookieLawAccepted");
  }
}
