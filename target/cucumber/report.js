$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/AddressBook.feature");
formatter.feature({
  "name": "Address Book feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddressBook"
    }
  ]
});
formatter.background({
  "name": "user is successfully logged in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the \"chrome\" browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.OpenBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if user can create a new address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddressBook"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is on the application login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in link",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an existing user enters an email address as \"testuser04@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.existingUserEmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an existing user enters an password as \"windows@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.existingUserPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.clickOnSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on My Addresses menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnMyAddressMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Add a new Addresses button",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnAddNewAddressButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Address as \"Street 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters City as \"Romulus\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_City(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects State as \"Alabama\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SelectState(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ZipCode as \"35006\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_ZipCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects Country as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SelectCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Homephone as \"545454545\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.EnterHomephone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Mobilephone as \"989898989\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.EnterMobilePhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnSaveAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the My Addresses page and \"My Addresses\" text is displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "AddressBook.MyAddressPageNavigation(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat MyStore.StepDefinitions.AddressBook.MyAddressPageNavigation(AddressBook.java:254)\r\n\tat ✽.user navigates to the My Addresses page and \"My Addresses\" text is displayed to the user(src/test/resources/FeatureCollections/AddressBook.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});