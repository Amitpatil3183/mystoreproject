#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Login feature
#Date Created: 19/8/2018
@MyAccount
Feature: My Account Feature

  Background: user is successfully logged in
    Given user opens the "Chrome" browser
    Given user enters the url "http://automationpractice.com/index.php"
  
  @SmokeTest
  Scenario: Verify that the Summer Dresses product list is sorted by price
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    And user clicks on Dresses mega menu
    And user clicks on Summer Dresses mega menu
    And Summer Dresses page opens with text as "SUMMER DRESSES "
    #And user selects Sort by drop down value "Price: Highest first"
    And user selects Sort by drop down value "Price: Lowest first"
    #And user selects Sort by drop down value "Reference: Highest first"
    Then user verifies that the products are sorted based on the selected Sort by value