#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Shopping Cart feature.
#Date Created: 18/4/2019
@MyAccount
Feature: Shopping Cart

  Background: user is successfully logged in
    Given user opens the "chrome" browser
    Given user enters the url "http://automationpractice.com/index.php"
    
   @ST
  Scenario: Verify if user can search Item using searchbox & select
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    And user clicks on Dresses mega menu
    And user clicks on Summer Dresses mega menu
    And Summer Dresses page opens with text as "SUMMER DRESSES "
    Then user enters "Dress" into the Global Item searchbox
    And user selects Printed Chiffon Item from the list
    Then "Printed Chiffon Dress" is displayed in Details view