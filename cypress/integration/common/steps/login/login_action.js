import userData from "../../../../fixtures/userData.json";
import { waitForAllXhrRequests } from "../../helpers/wait.js";
import { clickButton, enterIntoField } from "../../element_interactions.js";
import { setNewPage } from "../../page.js";

export const loginWithUI = (user) => {
  cy.log("Step--------------Logging in as user: " + user);
  enterIntoField("Username", userData[user].Username);
  enterIntoField("Password", userData[user].Password);
  clickButton("Login");
  waitForAllXhrRequests();
  setNewPage("Home");
};

export const logoutWithUI = () => {
  cy.log("Step--------------Logging out");
  clickButton("Menu");
  clickButton("Logout");
  waitForAllXhrRequests();
  setNewPage("Login");
};
