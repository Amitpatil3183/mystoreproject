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
formatter.background({
  "name": "user is successfully logged in",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens the \"firefox\" browser",
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
  "name": "Register a user with Valid email address",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user enters an email address as \"testb090@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Create an account button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.clickOnCreateAnAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects title as Mr.",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Title()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat MyStore.StepDefinitions.Login.Title(Login.java:188)\r\n\tat ✽.user selects title as Mr.(src/test/resources/FeatureCollections/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters Customer FirstName as \"Amit\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Customer LastName as \"Patil\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Password as \"windows@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Company as \"Yahoo\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterCompany(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Address as \"First Lane Narhe\"",
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
  "name": "user enters Mobile as \"9898989898\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_Mobile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters AliasAddress as \"Test Address\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Enter_Alias_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on the MyAccount page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.MyAccount()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user opens the \"firefox\" browser",
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
  "name": "Register a user with invalid email address",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user enters an email address as \"testuser04@.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.EnterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Create an account button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.clickOnCreateAnAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user receives an errormessage saying \"Invalid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.Invalid_Errror(String)"
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
  "name": "user opens the \"firefox\" browser",
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
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LAPTOP-APEGPBF8\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 472c6ef1-ed86-4a8b-a91b-e2c03daff1bd\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat MyStore.StepDefinitions.Login.OpenBrowser1(Login.java:78)\r\n\tat ✽.user enters the url \"http://automationpractice.com/index.php\"(src/test/resources/FeatureCollections/Login.feature:10)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat MyStore.StepDefinitions.Login.OpenBrowser1(Login.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that the Summer Dresses mega menu works",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user clicks on Dresses mega menu",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.clickOnDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Summer Dresses mega menu",
  "keyword": "And "
});
formatter.match({
  "location": "MyAccounts.clickOnSummerDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Summer Dresses page opens with text as \"SUMMER DRESSES \"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccounts.verifySummerDressesPageOpens(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LAPTOP-APEGPBF8\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d45.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 472c6ef1-ed86-4a8b-a91b-e2c03daff1bd\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:521)\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:498)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\t... 41 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 56 more\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/FeatureCollections/MyAccount.feature");
formatter.feature({
  "name": "My Account Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MyAccount"
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
  "name": "user opens the \"Firefox\" browser",
  "keyword": "Given "
});
