$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureCollections/Login.feature");
formatter.feature({
  "tags": [
    {
      "name": "@Login"
    }
  ],
  "description": "",
  "name": "Login Feature",
  "keyword": "Feature"
});
formatter.background({
  "description": "",
  "keyword": "Background",
  "name": "user is successfully logged in"
});
formatter.before({
  "status": "failed",
  "error_message": "java.lang.UnsupportedClassVersionError: com/relevantcodes/extentreports/ExtentReports : Unsupported major.minor version 52.0\r\n\tat java.lang.ClassLoader.defineClass1(Native Method)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:800)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:449)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:71)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:361)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:355)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:354)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:425)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:308)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:358)\r\n\tat MyStore.config.HTMLReportGenerator.TestSuiteStart(HTMLReportGenerator.java:18)\r\n\tat MyStore.StepDefinitions.Login.BeforeEveryScenario(Login.java:488)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.step({
  "keyword": "Given ",
  "name": "user opens the \"firefox\" browser"
});
formatter.match({
  "location": "Login.OpenBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Given ",
  "name": "user enters the url \"http://automationpractice.com/index.php\""
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    }
  ],
  "description": "",
  "keyword": "Scenario",
  "name": "Register a user with Valid email address"
});
formatter.step({
  "keyword": "Given ",
  "name": "user is on the application login page"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Sign in link"
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters an email address as \"testb090@gmail.com\""
});
formatter.match({
  "location": "Login.EnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Create an account button"
});
formatter.match({
  "location": "Login.clickOnCreateAnAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user selects title as Mr."
});
formatter.match({
  "location": "Login.Title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Customer FirstName as \"Amit\""
});
formatter.match({
  "location": "Login.EnterFirstName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Customer LastName as \"Patil\""
});
formatter.match({
  "location": "Login.EnterLastName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Password as \"windows@123\""
});
formatter.match({
  "location": "Login.EnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Company as \"Yahoo\""
});
formatter.match({
  "location": "Login.EnterCompany(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Address as \"First Lane Narhe\""
});
formatter.match({
  "location": "Login.EnterAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters City as \"Romulus\""
});
formatter.match({
  "location": "Login.Enter_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user selects State as \"Alabama\""
});
formatter.match({
  "location": "Login.SelectState(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters ZipCode as \"35006\""
});
formatter.match({
  "location": "Login.Enter_ZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user selects Country as \"United States\""
});
formatter.match({
  "location": "Login.SelectCountry(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters Mobile as \"9898989898\""
});
formatter.match({
  "location": "Login.Enter_Mobile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters AliasAddress as \"Test Address\""
});
formatter.match({
  "location": "Login.Enter_Alias_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Register button"
});
formatter.match({
  "location": "Login.Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Then ",
  "name": "user lands on the MyAccount page"
});
formatter.match({
  "location": "Login.MyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:498)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.background({
  "description": "",
  "keyword": "Background",
  "name": "user is successfully logged in"
});
formatter.before({
  "status": "failed",
  "error_message": "java.lang.UnsupportedClassVersionError: com/relevantcodes/extentreports/ExtentReports\r\n\tat MyStore.config.HTMLReportGenerator.TestSuiteStart(HTMLReportGenerator.java:18)\r\n\tat MyStore.StepDefinitions.Login.BeforeEveryScenario(Login.java:490)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.step({
  "keyword": "Given ",
  "name": "user opens the \"firefox\" browser"
});
formatter.match({
  "location": "Login.OpenBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Given ",
  "name": "user enters the url \"http://automationpractice.com/index.php\""
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    }
  ],
  "description": "",
  "keyword": "Scenario",
  "name": "Register a user with invalid email address"
});
formatter.step({
  "keyword": "Given ",
  "name": "user is on the application login page"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Sign in link"
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user enters an email address as \"testuser04@.com\""
});
formatter.match({
  "location": "Login.EnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Create an account button"
});
formatter.match({
  "location": "Login.clickOnCreateAnAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Then ",
  "name": "user receives an errormessage saying \"Invalid email address.\""
});
formatter.match({
  "location": "Login.Invalid_Errror(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:498)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.background({
  "description": "",
  "keyword": "Background",
  "name": "user is successfully logged in"
});
formatter.before({
  "status": "failed",
  "error_message": "java.lang.UnsupportedClassVersionError: com/relevantcodes/extentreports/ExtentReports\r\n\tat MyStore.config.HTMLReportGenerator.TestSuiteStart(HTMLReportGenerator.java:18)\r\n\tat MyStore.StepDefinitions.Login.BeforeEveryScenario(Login.java:490)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.step({
  "keyword": "Given ",
  "name": "user opens the \"firefox\" browser"
});
formatter.match({
  "location": "Login.OpenBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Given ",
  "name": "user enters the url \"http://automationpractice.com/index.php\""
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@SmokeTest"
    }
  ],
  "description": "",
  "keyword": "Scenario",
  "name": "Verify that the Summer Dresses mega menu works"
});
formatter.step({
  "keyword": "Given ",
  "name": "user is on the application login page"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Sign in link"
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "an existing user enters an email address as \"testuser04@gmail.com\""
});
formatter.match({
  "location": "MyAccounts.existingUserEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "an existing user enters an password as \"windows@123\""
});
formatter.match({
  "location": "MyAccounts.existingUserPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on SignIn button"
});
formatter.match({
  "location": "MyAccounts.clickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Dresses mega menu"
});
formatter.match({
  "location": "MyAccounts.clickOnDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Summer Dresses mega menu"
});
formatter.match({
  "location": "MyAccounts.clickOnSummerDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Then ",
  "name": "Summer Dresses page opens with text as \"SUMMER DRESSES \""
});
formatter.match({
  "location": "MyAccounts.verifySummerDressesPageOpens(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:498)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.uri("src/test/resources/FeatureCollections/MyAccount.feature");
formatter.feature({
  "tags": [
    {
      "name": "@MyAccount"
    }
  ],
  "description": "",
  "name": "My Account Feature",
  "keyword": "Feature"
});
formatter.background({
  "description": "",
  "keyword": "Background",
  "name": "user is successfully logged in"
});
formatter.before({
  "status": "failed",
  "error_message": "java.lang.UnsupportedClassVersionError: com/relevantcodes/extentreports/ExtentReports\r\n\tat MyStore.config.HTMLReportGenerator.TestSuiteStart(HTMLReportGenerator.java:18)\r\n\tat MyStore.StepDefinitions.Login.BeforeEveryScenario(Login.java:490)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.step({
  "keyword": "Given ",
  "name": "user opens the \"Firefox\" browser"
});
formatter.match({
  "location": "Login.OpenBrowser(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Given ",
  "name": "user enters the url \"http://automationpractice.com/index.php\""
});
formatter.match({
  "location": "Login.OpenBrowser1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "tags": [
    {
      "name": "@MyAccount"
    },
    {
      "name": "@SmokeTest"
    }
  ],
  "description": "",
  "keyword": "Scenario",
  "name": "Verify that the Summer Dresses product list is sorted by price"
});
formatter.step({
  "keyword": "Given ",
  "name": "user is on the application login page"
});
formatter.match({
  "location": "Login.LoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Sign in link"
});
formatter.match({
  "location": "Login.SignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "an existing user enters an email address as \"testuser04@gmail.com\""
});
formatter.match({
  "location": "MyAccounts.existingUserEmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "an existing user enters an password as \"windows@123\""
});
formatter.match({
  "location": "MyAccounts.existingUserPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on SignIn button"
});
formatter.match({
  "location": "MyAccounts.clickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Dresses mega menu"
});
formatter.match({
  "location": "MyAccounts.clickOnDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user clicks on Summer Dresses mega menu"
});
formatter.match({
  "location": "MyAccounts.clickOnSummerDressesMegaMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "Summer Dresses page opens with text as \"SUMMER DRESSES \""
});
formatter.match({
  "location": "MyAccounts.verifySummerDressesPageOpens(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "And ",
  "name": "user selects Sort by drop down value \"Price: Lowest first\""
});
formatter.match({
  "location": "MyAccounts.selectSortByValue(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "keyword": "Then ",
  "name": "user verifies that the products are sorted based on the selected Sort by value"
});
formatter.match({
  "location": "MyAccounts.verifyProductSortBasedOnSelectedSortByValue()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "failed",
  "error_message": "java.lang.NullPointerException\r\n\tat MyStore.StepDefinitions.Login.AfterEveryScenario(Login.java:498)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:606)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
});