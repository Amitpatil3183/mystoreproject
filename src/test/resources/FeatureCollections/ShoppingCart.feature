#Author: Amit Patil
#Keywords Summary :
#Feature: List of scenarios for Login feature
#Date Created: 19/8/2018
@MyAccount
Feature: Shopping Cart

  Background: user is successfully logged in
    Given user opens the "chrome" browser
    Given user enters the url "http://automationpractice.com/index.php"
    
   @SmokeTest
  Scenario: Verify if user can add Items to the cart
    Given user is on the application login page
    And user clicks on Sign in link
    And an existing user enters an email address as "testuser04@gmail.com"
    And an existing user enters an password as "windows@123"
    And user clicks on SignIn button
    And user clicks on Dresses mega menu
    And user clicks on Summer Dresses mega menu
    And Summer Dresses page opens with text as "SUMMER DRESSES "
    And user clicks on the Printed Summer Dress Item
    And user clicks on the Add to Cart button
    Then There is 1 item in your cart popup message is displayed to the user