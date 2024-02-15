import { getCurrentPage } from "./page";

export const clickButton = (buttonName) => {
    cy.log("Step--------------clicking button " + buttonName);
    const page = getCurrentPage();
    const locator = page.buttons[buttonName];
    cy.wait(500);
    cy.get(locator.CSS).should("not.be.disabled");
    cy.get(locator.CSS).scrollIntoView().click();
};

export const enterIntoField = (fieldName, text) => {
    cy.log(
        "Step--------------entering into field " + fieldName + " text " + text
    );
    const page = getCurrentPage();
    const locator = page.fields[fieldName];

    cy.get(locator.CSS).should("be.enabled");
    cy.get(locator.CSS).clear();
    cy.get(locator.CSS).should("be.enabled");
    cy.get(locator.CSS).scrollIntoView().type(`${text}`);
};

export const checkElementExists = (elementName) => {
    cy.log("Step--------------Checking if element " + elementName + " exists.");
    const page = getCurrentPage();
    const locator = page.buttons[elementName];

    cy.get(locator.CSS).should("be.visible");
    cy.get(locator.CSS).should("be.enabled");
}

export const selectValue = (selectName, value) => {
    cy.log("Step--------------Selecting " + value + " in field " + selectName);
    const page = getCurrentPage();
    const locator = page.selects[selectName];

    cy.get(locator.CSS).should("be.enabled");
    cy.get(locator.CSS).select(value);
};

export const checkDropdownSelectedValue = (selectName, value) => {
    cy.log("Step--------------Checking dropdown " + selectName + " to have selected value " + value);
    const page = getCurrentPage();
    const locator = page.selects[selectName];

    cy.get(locator.CSS).should("be.enabled");
    cy.get(locator.CSS).invoke('val').should("eq", value);
};

export const selectElementFromArrayByIndex = (selectName, productIndex) => {
    cy.log("Step--------------Selecting product with index " + productIndex + " from array of " + selectName);
    const page = getCurrentPage();
    const locator = page.elements[selectName];

    cy.get(locator.CSS).eq(productIndex).scrollIntoView().click();
};

export const selectElementFromArrayByText = (selectName, productName) => {
    cy.log("Step--------------Selecting product with index " + productName + " from array of " + selectName);
    const page = getCurrentPage();
    const locator = page.elements[selectName];

    cy.get(locator.CSS).contains(productName).click();
};