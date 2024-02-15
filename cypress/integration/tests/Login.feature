Feature: Authentication

  Scenario Outline: Standard user can login and log out
    Given I navigate to the page: "Login"
    Then I see text "<welcomeMessage>" on the page
    When I login as a "<user>" user
    Then I see text "<text>" on the page
    When I log out
    Then I see text "<welcomeMessage>" on the page

    Examples: 
      | user     | text     | welcomeMessage |
      | Standard | Products | Swag Labs      |

  Scenario Outline: Locked user cannot login, and sees the error message
    Given I navigate to the page: "Login"
    Then I see text "<welcomeMessage>" on the page
    When I login as a "<user>" user
    Then I see text "<errorMessage>" on the page

    Examples: 
      | user   | errorMessage                          | welcomeMessage |
      | Locked | Sorry, this user has been locked out. | Swag Labs      |

  Scenario Outline: Invalid user cannot login, and sees the error message
    Given I navigate to the page: "Login"
    Then I see text "<welcomeMessage>" on the page
    When I login as a "<user>" user
    Then I see text "<errorMessage>" on the page

    Examples: 
      | user             | errorMessage                                                | welcomeMessage |
      | Invalid_Password | Username and password do not match any user in this service | Swag Labs      |
      | Invalid_Username | Username and password do not match any user in this service | Swag Labs      |
