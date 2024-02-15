import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  goToPage,
  checkTextOnThePage,
  setNewPage,
} from "../page";
import { clickButton } from "../element_interactions";
import { waitForAllXhrRequests } from "../helpers/wait";

Given(`I navigate to the page: {string}`, (pageName) => {
  goToPage(pageName);
  cy.viewport(1320, 2000);
  waitForAllXhrRequests();
});

Then(`I see text {string} on the page`, (text) => {
  checkTextOnThePage(text);
});

When(`I click on the cart button in the header`, () => {
  clickButton("Cart");
  waitForAllXhrRequests();
  setNewPage("Cart");
})