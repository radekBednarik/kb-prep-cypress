import { BasePage } from "./basePage";

export class UserNameLoginPage extends BasePage {
  private selectors: Selectors;
  private url: string;

  constructor() {
    super();
    this.url = "https://login.kb.cz/login?sso=MB2&layout=BRAND";
    this.selectors = {
      userNameInput: "input[id=bu9273]",
      rememberMeCheckbox: "input[id=bu9237]",
      continueBttn: "button[name=bu0056]",
    };
  }

  get userNameInput() {
    return cy.get(this.selectors.userNameInput);
  }

  get rememberMeCheckbox() {
    return cy.get(this.selectors.rememberMeCheckbox);
  }

  get continueBttn() {
    return cy.get(this.selectors.continueBttn);
  }

  visit() {
    super.visit(this.url);
  }

  inputIsEnabled() {
    this.userNameInput.should("be.enabled");
  }

  inputIsVisible() {
    this.userNameInput.should("be.visible");
  }

  checkboxIsEnabled() {
    this.rememberMeCheckbox.should("be.enabled");
  }

  checkboxIsNotChecked() {
    this.rememberMeCheckbox.should("not.be.checked");
  }

  continueBttnIsVisible() {
    this.continueBttn.should("be.visible");
  }

  continueBttnIsNotEnabled() {
    this.continueBttn.should("not.be.enabled");
  }
}
