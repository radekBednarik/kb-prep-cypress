export class BasePage {
  visit(url: string) {
    cy.visit(url, { timeout: 60000 });
  }

  reload() {
    cy.reload({ timeout: 60000 });
  }

  
}
