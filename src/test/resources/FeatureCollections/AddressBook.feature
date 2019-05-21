#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for My Address feature.
#Date Created: 21/4/2019
@AddressBook
Feature: Address Book feature

    Background: user is successfully logged in
    Given user opens the "chrome" browser
    Given user enters the url "http://automationpractice.com/index.php"


    @ST
    Scenario: Verify if user can create a new address
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    #And user clicks on View My Customer Account link
    And user clicks on My Addresses menu
    And user clicks on Add a new Addresses button
    And user enters Address as "Street 1"
    And user enters City as "Romulus"
    And user selects State as "Alabama"
    And user enters ZipCode as "35006"
    And user selects Country as "United States"
    And user enters Homephone as "545454545"
    And user enters Mobilephone as "989898989"
    And user clicks on the Save button
    Then user navigates to the My Addresses page and "MY ADDRESSES" text is displayed to the user
     