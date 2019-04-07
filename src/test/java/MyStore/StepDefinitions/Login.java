package MyStore.StepDefinitions;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.junit.Assert;


import MyStore.PageObjects.LoginPage;
import MyStore.PageObjects.MyAccountsPage;
import MyStore.config.Config;
import MyStore.config.HTMLReportGenerator;
import MyStore.config.TakeScreenShot;
//import MyStore.config.baseclass;
import MyStore.config.GeckoConfiguration;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login {

	LoginPage loginpageobj = null;
//	public static WebDriver driver = null;
	final static Logger logger = Logger.getLogger(Login.class);
	int counter = 1;
	MyAccountsPage myaccountpageobj=null;

	@Given("^user opens the \"([^\"]*)\" browser$")
	public void OpenBrowser(String BrowserName) {
		
		GeckoConfiguration.Geckotest(BrowserName);
		
//		if (BrowserName.equalsIgnoreCase("firefox")) {
//			System.setProperty("webdriver.gecko.driver", "D:\\Users\\SSonawane\\geckoDriver\\geckodriver.exe");
//			baseclass.driver = new FirefoxDriver();
//			}                   
//
//		if (BrowserName.equalsIgnoreCase("chrome")) {
//			System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\Chrome\\chromedriver.exe");
//			baseclass.driver = new ChromeDriver();
//			}
//		if (BrowserName.equalsIgnoreCase("IE")) {
//			System.setProperty("webdriver.ie.driver", "C:\\Program Files\\IEDriver\\IEDriverServer.exe");
//			baseclass.driver = new InternetExplorerDriver();
//			}
		}

	@Given("^user enters the url \"(.*)\"$")
	public void OpenBrowser1(String URL) throws IOException {
		
		GeckoConfiguration.driver.get(URL);
		GeckoConfiguration.driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//		GeckoConfiguration.driver.wait = new WebDriverWait(baseclass.driver, 30);
		GeckoConfiguration.driver.manage().window().maximize();
		
//		baseclass.driver.get(URL);	 
//		baseclass.driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//		baseclass.wait = new WebDriverWait(baseclass.driver, 30);
//		baseclass.driver.manage().window().maximize();
		String message = "Step:" + (counter++) + " PASSED: user enter the url as " + URL;
		logger.info(message);
		HTMLReportGenerator.StepDetails("PASS", "LaunchApplication", message,
				TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
	}

	@Given("^user is on the application login page$")
	public void LoginPage() throws IOException {
		try {
			Thread.sleep(6000);
			loginpageobj = new LoginPage(GeckoConfiguration.driver);
			String message = "Step:" + (counter++) + " PASSED- user is on the application login page";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "LoginPage", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user is NOT on the application login page\nException Details: "
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "LoginPage", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}


	@And("^user clicks on Sign in link$")
	public void SignInLink() throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.SignInLink.click();
			String message = "Step:" + (counter++) + " PASSED- user clicks on SignInLink";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "SignInLink", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception e) {
			String message = "Step:" + (counter++)
					+ "FAILED- user is failed to click on Sign In link\nException Details:" + e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "SignInLink", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}

	}

	@Given("^user clicks on Create an account button$")
	public void clickOnCreateAnAccountButton() throws Exception {
		try {
			Thread.sleep(1000);
			loginpageobj.Create_Account_button.click();
			String message = "Step:" + (counter++) + " PASSED- user clicks on Create an account button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Create and account button", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user failed to click on Create an account button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Create and account button", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);				
		}
	}


	@And("^user enters an email address as \"(.*)\"$")
	public void EnterEmail(String Email) throws IOException {
		try {
			Thread.sleep(6099);
			loginpageobj.Create_Account_Email.sendKeys(Email);	
			String message = "Step:" + (counter++) + " PASSED- user enter " + Email + " as email";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterEmail", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} 
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "Email"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterEmail", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And("^user selects title as Mr.$")
	public void Title() throws IOException {
		try {
			Thread.sleep(2000);
			loginpageobj.title_mr.click();
			String message = "Step:" + (counter++) + " PASSED- user clicks on Title";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Title", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} 
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user fails to select title as Mr. \nException Details:"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Title", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Customer FirstName as \"(.*)\"$")
	public void EnterFirstName(String FirstName) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.cust_first_name.sendKeys(FirstName);
			String message = "Step:" + (counter++) + " PASSED- user enter " + FirstName + " as firstname";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "FirstName", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "FirstName"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "FirstName", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Customer LastName as \"(.*)\"$")
	public void EnterLastName(String LastName) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.cust_last_name.sendKeys(LastName);	
			String message = "Step:" + (counter++) + " PASSED- user enter " + LastName + " as lastname";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "LastName", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "LastName"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "LastName", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Password as \"(.*)\"$")
	public void EnterPassword(String Password) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.password.sendKeys(Password);	
			String message = "Step:" + (counter++) + " PASSED- user enter " + Password + " as password";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterPassword", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "Password" + e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterPassword", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Company as \"(.*)\"$")
	public void EnterCompany(String Company) throws IOException {				
		try {
			Thread.sleep(1000);
			loginpageobj.company.sendKeys(Company);	
			String message = "Step:" + (counter++) + " PASSED- user enter " + Company + " as company";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterCompany", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "Company"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterCompany", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Address as \"(.*)\"$")
	public void EnterAddress(String Address) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.address1.sendKeys(Address);
			String message = "Step:" + (counter++) + " PASSED- user enter " + Address + " as address";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterAddress", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "Address"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterAddress", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}


	@And("^user enters City as \"(.*)\"$")
	public void Enter_City(String City) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.city.sendKeys(City);
			String message = "Step:" + (counter++) + " PASSED- user enter " + City + " as city";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Enter_City", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "City"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Enter_City", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user selects State as \"(.*)\"$")
	public void SelectState(String State) throws InterruptedException, IOException{
		try {
			Thread.sleep(1000);
			Select _state = new Select (loginpageobj.state);
			_state.selectByVisibleText(State);
			loginpageobj.state.sendKeys(Keys.TAB);
			String message = "Step:"+(counter++)+" PASSED- user selects City as "+State;
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "SelectState", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " PASSED- user selects City as " + State + "\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "SelectState", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And("^user enters ZipCode as \"(.*)\"$")
	public void Enter_ZipCode(String ZipCode) throws IOException {
		try {
			loginpageobj.post_code.sendKeys(ZipCode);
			String message = "Step:" + (counter++) + " PASSED- user enter " + ZipCode + " as zip";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Enter_ZipCode", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "ZipCode"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Enter_ZipCode", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user selects Country as \"(.*)\"$")
	public void SelectCountry(String Country) throws InterruptedException, IOException{
		try {
			Thread.sleep(1000);
			Select _country = new Select (loginpageobj.country);
			_country.selectByVisibleText(Country);
			loginpageobj.country.sendKeys(Keys.TAB);
			String message = "Step:"+(counter++)+" PASSED- user selects country as "+Country;
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "SelectCountry", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " PASSED- user selects country as " + Country
					+ "\nException Details:" + ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "SelectCountry", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And("^user enters Mobile as \"(.*)\"$")
	public void Enter_Mobile(String Mobile) throws IOException{
		try {
			Thread.sleep(1000);
			loginpageobj.mobile_phone.sendKeys(Mobile);
			String message = "Step:" + (counter++) + " PASSED- user enter " + Mobile + " as mobile";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Enter_Mobile", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "mobile" + e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Enter_Mobile", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user enters AliasAddress as \"(.*)\"$")
	public void Enter_Alias_Address(String AliasAddress) throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.alias_address.sendKeys(AliasAddress);
			String message = "Step:" + (counter++) + " PASSED- user enter " + AliasAddress + " as aliasadd";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Enter_Alias_Address", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++) + " FAILED- user Failed to enter " + "aliasadd"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Enter_Alias_Address", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@And("^user clicks on Register button$")
	public void Register_button() throws IOException {
		try {
			Thread.sleep(1000);
			loginpageobj.Register_button.click();
			String message = "Step:" + (counter++) + " PASSED- user clicks on Register button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "Register_button", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch (Exception e) {
			String message = "Step:" + (counter++)
					+ " FAILED- user is failed to click on Register button\nException Details:"
					+ e.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "Register_button", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			e.printStackTrace();
			Assert.assertTrue(false);
		}
	}

	@Then("^user lands on the MyAccount page$")
	public void MyAccount() throws IOException {
		try {
			Thread.sleep(1000);
			myaccountpageobj=new MyAccountsPage(GeckoConfiguration.driver);
			String message = "Step:"+(counter++)+" PASSED- user is on the MyAccountPage";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "MyAccount", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user is on the MyAccountPage\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "MyAccount", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@Then("^user receives an errormessage saying \"(.*)\"$")
	public void Invalid_Errror(String errormessage) throws IOException {
		try {
			Thread.sleep(2000);
			String errormsg =loginpageobj.invalidEmail_error.getText();
			Assert.assertEquals(errormessage, errormsg);
			System.out.println(errormsg+" --------------------");
			String _message = "Step:" + (counter++) + " PASSED- user gets error message starting with " + errormsg
					+ " message above the login frame";
			logger.info(_message);
			HTMLReportGenerator.StepDetails("PASS", "Invalid_Errror", errormsg,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String _message = "Step:" + (counter++)
					+ " FAILED- user failed to get the error message\nException Details:" + ex.getLocalizedMessage();
			logger.info(_message);
			HTMLReportGenerator.StepDetails("FAIL", "Invalid_Errror", errormessage,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@Before()
	public void BeforeEveryScenario(Scenario scenario) throws UnknownHostException{
		counter = 1;
		if(Config.listofsuite==null){
			Config.listofsuite=scenario.getSourceTagNames();
			HTMLReportGenerator.TestSuiteStart("C:\\SeleniumResources\\HTMLReportGenResults\\smoke.html", "Test1");
		}
		HTMLReportGenerator.TestSuiteStart("C:\\SeleniumResources\\HTMLReportGenResults\\smoke.html", "Amit");
		HTMLReportGenerator.TestCaseStart(scenario.getName(), scenario.getLines().toString());
		System.out.println("new scenario is started " + scenario.getName());
	}

	@After()
	public void AfterEveryScenario(Scenario scenario) {
		counter = 0;
		GeckoConfiguration.driver.close();
		HTMLReportGenerator.TestCaseEnd();
		HTMLReportGenerator.TestSuiteEnd();
	}
}
