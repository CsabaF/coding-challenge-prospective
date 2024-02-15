import { waitForAllXhrRequests } from "../../helpers/wait.js";
import { selectValue, selectElementFromArrayByText, checkDropdownSelectedValue } from "../../element_interactions.js";
import { getCurrentPage, setNewPage } from "../../page.js";

export const sortItemsBy = (dropdownOption) => {
    cy.log("Step--------------Selecting option " + dropdownOption + " from the dropdown");
    selectValue("Sorting", dropdownOption);
    waitForAllXhrRequests();
}

export const checkSelectedDropdownValue = (value) => {
    cy.log("Step--------------Checking selected value of dropdown to be: " + value);
    checkDropdownSelectedValue("Sorting", value);
}

export const selectProductByName = (productName) => {
    cy.log("Step--------------Selecting product with name ''" + productName + "' from the list of products");
    selectElementFromArrayByText("ProductsNamesList", productName);
    waitForAllXhrRequests();
    setNewPage("ProductDetails");
}

export const checkPricesSortedBy = (sorting) => {
    cy.log("Step--------------Checking if the products are indeed sorted by : " + sorting);
    const page = getCurrentPage();
    const locator = page.elements["ProductsPriceList"];

    let arr1 = new Array()

    switch (sorting) {
        case 'ascending':
            cy.get(locator.CSS).each(elements => { arr1.push(parseFloat(elements.text().replace("$", "").trim())); });
            cy.wrap(arr1).should("deep.equal", arr1.sort());
            break;
        case 'descending':
            cy.get(locator.CSS).each(elements => { arr1.push(parseFloat(elements.text().replace("$", "").trim())); });
            cy.wrap(arr1).should("deep.equal", arr1.sort());
            break;
        default:
            cy.log("Wrong sorting method provided, terminating!")
            Cypress.runner.stop()
    }
}
