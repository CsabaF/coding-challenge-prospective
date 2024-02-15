import pages from "./all_page_elements.json";
import { useState } from "./helpers/stateManager";

export const goToPage = (pageName) => {
  const page = getPage(pageName);
  cy.visit(page.path);
  setNewPage(pageName);
};

export const getPage = (pageName) => {
  const page = pages[pageName];
  return {
    path: page.Path,
    buttons: {
      ...page.Buttons,
      ...pages.Common.Buttons,
    },
    fields: {
      ...page.Fields,
      ...pages.Common.Fields,
    },
    selects: {
      ...page.Selects,
      ...pages.Common.Selects,
    },
    elements: {
      ...page.Elements,
      ...pages.Common.Elements,
    }
  };
};

const [getPageName, setPageName] = useState("Login");

export const getCurrentPage = () => {
  cy.log("The current page is ====== " + getPageName());
  return getPage(getPageName());
};

export const setNewPage = (newPageName) => {
  setPageName(newPageName);
};

export const checkTextOnThePage = (text) => {
  cy.contains(text);
};