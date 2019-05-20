#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Items feature.
#Date Created: 21/4/2019
@Items
Feature: Items

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