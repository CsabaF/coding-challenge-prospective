import { waitForAllXhrRequests } from "../../helpers/wait.js";
import { selectValue, selectElementFromArrayByIndex, checkDropdownSelectedValue } from "../../element_interactions.js";

export const sortItemsBy = (dropdownOption) => {
    cy.log("Step--------------Selecting option " + dropdownOption + " from the dropdown");
    selectValue("Sorting", dropdownOption);
    waitForAllXhrRequests();
}
