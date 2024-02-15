Feature: Cart

  Scenario Outline: Standard user adds item to cart and views cart
    Given I navigate to the page: "Login"
    Then I see text "<welcomeMessage>" on the page
    When I login as a "<user>" user
    Then I see text "<text>" on the page
    When I sort the products by "<sortOption>"
    Then I expect "<sortOption>" to be selected in the dropdown
    When I select a product from the list by name "<productName>"
    Then I see text "<backButtonText>" on the page
    When I click the Add to cart button
    Then I expect the Remove button to replace the Add to cart button
    When I click on the cart button in the header
    Then I see text "<cartText>" on the page
    Then I see text "<productName>" on the page 

    Examples: 
      | user     | text     | welcomeMessage | sortOption | productName              | backButtonText   | cartText  |
      | Standard | Products | Swag Labs      | hilo       | Sauce Labs Fleece Jacket | Back to products | Your Cart |
