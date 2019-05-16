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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: Chrome version must be between 70 and 73\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.32 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027IP-C613EA08\u0027, ip: \u0027172.31.153.150\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat MyStore.config.GeckoConfiguration.Geckotest(GeckoConfiguration.java:16)\r\n\tat MyStore.StepDefinitions.Login.OpenBrowser(Login.java:44)\r\n\tat ✽.user opens the \"chrome\" browser(src/test/resources/FeatureCollections/AddressBook.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the url \"http://automationpractice.com/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Sign in link",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an existing user enters an email address as \"testuser04@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.existingUserEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an existing user enters an password as \"windows@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.existingUserPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.clickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on My Addresses menu",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnMyAddressMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Add a new Addresses button",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnAddNewAddressButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Address as \"Street 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters City as \"Romulus\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects State as \"Alabama\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SelectState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters ZipCode as \"35006\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_ZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Country as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.SelectCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Homephone as \"545454545\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.EnterHomephone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Mobilephone as \"989898989\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.EnterMobilePhone(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddressBook.clickOnSaveAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to the My Addresses page and \"MY ADDRESSES\" text is displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "AddressBook.MyAddressPageNavigation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:483)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});