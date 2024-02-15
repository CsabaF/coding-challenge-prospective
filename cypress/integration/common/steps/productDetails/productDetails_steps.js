import { When } from "cypress-cucumber-preprocessor/steps";
import { checkElementExists, clickButton } from "../../element_interactions";

When(`I click the Add to cart button`, () => {
    clickButton("AddToCart");
});

Then(`I expect the Remove button to replace the Add to cart button`, () =>{
    checkElementExists("Remove");
})
