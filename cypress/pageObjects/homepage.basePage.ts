import { BasePage } from "./basePage";
import { ConsentBanner } from "../pageComponents/consentBanner";

export class Homepage extends BasePage {
  private url: string;
  public consentBanner: ConsentBanner;

  constructor() {
    super();
    this.url = "/";
    this.consentBanner = new ConsentBanner();
  }

  visit() {
    super.visit(this.url);
  }
}
