$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login to the application with multiple set of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user is on the application login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on Sign in link",
  "keyword": "And "
});
formatter.step({
  "name": "user enters an \"\u003cemailaddress\u003e\" and \"\u003cpassword\u003e\" on already registered section",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on SignIn button",
  "keyword": "And "
});
formatter.step({
  "name": "user lands on the MyAccount page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "testuser04@gmail.com",
        "",
        "windows@123"
      ]
    },
    {
      "cells": [
        "testuser05@gmail.com",
        "",
        "windows@123"
      ]
    },
    {
      "cells": [
        "testuser06@gmail.com",
        "",
        "windows@123"
      ]
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
  "name": "Login to the application with multiple set of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
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
  "name": "user enters an \"testuser04@gmail.com\" and \"windows@123\" on already registered section",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterUsrnameandPassword(String,String)"
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
  "name": "user lands on the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.MyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Login to the application with multiple set of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
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
  "name": "user enters an \"testuser05@gmail.com\" and \"windows@123\" on already registered section",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterUsrnameandPassword(String,String)"
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
  "name": "user lands on the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.MyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Login to the application with multiple set of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
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
  "name": "user enters an \"testuser06@gmail.com\" and \"windows@123\" on already registered section",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterUsrnameandPassword(String,String)"
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
  "name": "user lands on the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.MyAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});