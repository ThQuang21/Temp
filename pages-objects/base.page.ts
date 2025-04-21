import { Page } from "@playwright/test";
import { SideBar } from "./components/sidebar";
import { Header } from "./components/header";
export class BasePage {
  readonly page: Page;
  readonly header: Header;
  readonly sideBar: SideBar;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.sideBar = new SideBar(page);
  }
}
