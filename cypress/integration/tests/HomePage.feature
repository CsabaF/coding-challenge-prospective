Feature: HomePage

  Scenario Outline: Standard user sorts product list
    Given I navigate to the page: "Login"
    Then I see text "<welcomeMessage>" on the page
    When I login as a "<user>" user
    Then I see text "<text>" on the page
    When I sort the products by "<sortOption>"
    Then I expect "<sortOption>" to be selected in the dropdown
    Then I expect the prices of products to be sorted "<descending>"

    Examples: 
      | user     | text     | welcomeMessage | sortOption | productName              | backButtonText   | cartText  |
      | Standard | Products | Swag Labs      | hilo       | Sauce Labs Fleece Jacket | Back to products | Your Cart |
