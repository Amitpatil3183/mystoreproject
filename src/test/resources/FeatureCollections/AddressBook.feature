#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Items feature.
#Date Created: 21/4/2019
@AddressBook
Feature: Address Book feature

  Background: user is successfully logged in
    Given user opens the "chrome" browser
    Given user enters the url 

     @ST
  Scenario: Verify if user can search Item using searchbox & select
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    And user clicks on View My Customer Account link
    And user clicks on My Addresses menu
    And user clicks on Add a new Addresses button
    And user enters Address as "Street 1"
    And user selects City as "Pune"
    And user selects State as "Alaska"
    And user enters Zip/Postal Code as "12345"
    And user enters Home phone Code as "545454545"
    And user enters Mobile phone Code as "989898989"
    And user clicks on the Save button
    Then user navigates to the My Addresses page
     