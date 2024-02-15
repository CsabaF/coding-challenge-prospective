import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {sortItemsBy, selectProductByName, checkSelectedDropdownValue, checkPricesSortedBy } from "../homePage/homePage_actions.js";

When(`I sort the products by {string}`, (dropdownOption) => {
    sortItemsBy(dropdownOption);
});

Then(`I expect {string} to be selected in the dropdown`, (dropdownOptionValue) => {
    checkSelectedDropdownValue(dropdownOptionValue);
}); 

When(`I select a product from the list by name {string}`, (productName) => {
    selectProductByName(productName);
})

Then(`I expect the prices of products to be sorted {string}`, (sorting) => {
    checkPricesSortedBy(sorting);
})
