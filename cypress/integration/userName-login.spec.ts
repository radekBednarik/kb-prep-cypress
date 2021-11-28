import { UserNameLoginPage } from "../pageObjects/userNameLoginPage.basePage";

let usernamePage: UserNameLoginPage;

describe("login - user name page", () => {
  before(() => {
    usernamePage = new UserNameLoginPage();
    usernamePage.visit();
  });

  it("username input is visible", () => {
    usernamePage.inputIsVisible();
  });

  it("username input is enabled", () => {
    usernamePage.inputIsEnabled();
  });

  it("remember me checkbox is not checked", () => {
    usernamePage.checkboxIsNotChecked();
  });

  it("remember me checkbox is enabled", () => {
    usernamePage.checkboxIsEnabled();
  });

  it("continue button is visible", () => {
    usernamePage.continueBttnIsVisible();
  });

  it("continue button is not enabled", () => {
    usernamePage.continueBttnIsNotEnabled();
  });
});
