#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Login feature
#Date Created: 19/8/2018
@Login
Feature: Login Feature

  Background: user is successfully logged in
    Given user opens the "firefox" browser
    Given user enters the url "http://automationpractice.com/index.php"

  @ST
  Scenario: Register a user with Valid email address
    Given user is on the application login page
    And user clicks on Sign in link
    And user enters an email address as "testb092@gmail.com"
    And user clicks on Create an account button
    And user selects title as Mr.
    And user enters Customer FirstName as "Amit"
    And user enters Customer LastName as "Patil"
    And user enters Password as "windows@123"
    And user enters Company as "Yahoo"
    And user enters Address as "First Lane Narhe"
    And user enters City as "Romulus"
    And user selects State as "Alabama"
    And user enters ZipCode as "35006"
    And user selects Country as "United States"
    And user enters Mobile as "9898989898"
    And user enters AliasAddress as "Test Address"
    And user clicks on Register button
    Then user lands on the MyAccount page

  @ST
  Scenario: Register a user with invalid email address
    Given user is on the application login page
    And user clicks on Sign in link
    And user enters an email address as "testuser04@.com"
    And user clicks on Create an account button
    Then user receives an errormessage saying "Invalid email address."

  @SmokeTest
  Scenario: Verify that the Summer Dresses mega menu works
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    And user clicks on Dresses mega menu
    And user clicks on Summer Dresses mega menu
    Then Summer Dresses page opens with text as "SUMMER DRESSES "
  