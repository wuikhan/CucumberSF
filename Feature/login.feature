Feature: Test login functionality
  As a valid user , I should be able to login to the application.

  @Test
  Scenario Outline: As a valid user I should be able to login to the application
    Given I open the browser
    When I go to the application
    Then I should see the logo
    And I enter "<username>" username
    And I enter "<password>" password
    When I click the login button
    Then I should see the logout link
    And I quit

    Examples: 
      | username                | password |
      | batch03@codegator.us.qa | Pa55word |

  Scenario: As a valid user I should be able to login to the applications
    Given I open the browser
    When I go to the application
    Then I should see the home page
    
