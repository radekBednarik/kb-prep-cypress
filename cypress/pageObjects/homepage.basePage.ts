import { BasePage } from "./basePage";
import { ConsentBanner } from "../pageComponents/consentBanner";

export class Homepage extends BasePage {
  private url: string;
  public consentBanner: ConsentBanner;

  constructor() {
    super();
    this.url = "https://www.kb.cz/cs";
    this.consentBanner = new ConsentBanner();
  }

  visit() {
    super.visit(this.url);
  }
}
