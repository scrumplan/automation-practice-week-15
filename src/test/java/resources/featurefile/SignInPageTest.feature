Feature: Login Functionality
  As user, I would like to login With valid credentials

  Background: Background: I am on Login page of automation practice
    Given     I on home page
    When      I click on login link
    Then      I am on login page

  @sanity @smoke @regression

  Scenario: I should navigate to login page successfully
    When    I am on login page
    Then    I am successfully navigate to login page
    And     I can see the authentication message "AUTHENTICATION"

  @smoke @regression

  Scenario Outline: I should able to login with invalid credentials
    When            I enter username "<Username>"
    And             I enter password "<Password>"
    And             I click on sign in button
    Then            I am not able to login with invalid credentials
    And             I can see the "<ErrorMessage>"

    Examples:
      | Username       | Password | ErrorMessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @regression

  Scenario: I should able to login with valid credentials
    When    I enter username "Mahesh123@gmail.com"
    And     I enter password "Mahesh123"
    And     I click on login button
    Then    I am successfully login with valid credentials
    And     I can see the sign out link


  @regression

  Scenario: I should able to log out after login with valid credentials
    When    I enter username "Mahesh123@gmail.com"
    And     I enter password "Mahesh123"
    And     I click on login button
    And     I click on logout button
    Then    I am successfully logout the account
    And     I can see the sign in link
