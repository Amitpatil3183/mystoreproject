package MyStore.StepDefinitions;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Locale;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import MyStore.PageObjects.LoginPage;
import MyStore.PageObjects.MyAccountsPage;
import MyStore.config.Config;
import MyStore.config.HTMLReportGenerator;
import MyStore.config.TakeScreenShot;
//import MyStore.config.baseclass;
import MyStore.config.GeckoConfiguration;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class MyAccounts {
	
	LoginPage loginpageobj = null;
	public static WebDriver driver = null;
	final static Logger logger = Logger.getLogger(MyAccounts.class);
	int counter = 1;
	MyAccountsPage myaccountpageobj=null;

	@And ("^an existing user enters an email address as \"([^\"]*)\"$")
	public void existingUserEmailAddress(String emailAddress) throws IOException {
		try {
			Thread.sleep(1000);
			myaccountpageobj=new MyAccountsPage(GeckoConfiguration.driver);
			myaccountpageobj.email_Address_Text_Box.sendKeys(emailAddress);
			String message = "Step:"+(counter++)+"PASSED- user enters email id";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "existingUserEmailAddress", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enter email id\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "existingUserEmailAddress", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And ("^an existing user enters an password as \"([^\"]*)\"$")
	public void existingUserPassword(String password) throws IOException {
		try {
			Thread.sleep(1000);
			myaccountpageobj=new MyAccountsPage(GeckoConfiguration.driver);
			myaccountpageobj.password_Text_Box.sendKeys(password);
			String message = "Step:"+(counter++)+"PASSED- user enters password";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "existingUserPassword", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enter password\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "existingUserPassword", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}


	@And ("^user clicks on SignIn button$")
	public void clickOnSignInButton() throws IOException {
		try {
			Thread.sleep(1000);
			myaccountpageobj.signIn_Button.click();
			String message = "Step:"+(counter++)+"PASSED- user clicks on SignIn Button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnSignInButton", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed click Sign In button\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnSignInButton", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And ("^user clicks on Dresses mega menu$")
	public void clickOnDressesMegaMenu() throws IOException {
		try {
			Thread.sleep(1000);
			Actions action = new Actions(GeckoConfiguration.driver);
			action.moveToElement(myaccountpageobj.dresses_Menu).build().perform();
			Thread.sleep(1000);
			String message = "Step:"+(counter++)+"PASSED- user clicks on Dresses Mega Menu";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnDressesMegaMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on Dresses Mega Menu\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnDressesMegaMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And ("^user clicks on Summer Dresses mega menu$")
	public void clickOnSummerDressesMegaMenu() throws IOException {
		try {
			Thread.sleep(1000);
			myaccountpageobj.summer_Dresses_Menu.click();
			String message = "Step:"+(counter++)+"PASSED- user clicks on Summer Dresses Mega Menu";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnSummerDressesMegaMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on Summer Dresses Mega Menu\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnSummerDressesMegaMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}


	@Then("^Summer Dresses page opens with text as \"([^\"]*)\"$")
	public void verifySummerDressesPageOpens(String summerDressesExpectedPageText) throws IOException {
		try {
			Thread.sleep(2000);
			String summerDressesActualPageText = myaccountpageobj.summer_Dresses_Landing_Page.getText();
			Assert.assertEquals(summerDressesExpectedPageText, summerDressesActualPageText);
			String message = "Step:"+(counter++)+"PASSED- user clicks on Summer Dresses Mega Menu";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "verifySummerDressesPageOpens", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on Summer Dresses Mega Menu\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "verifySummerDressesPageOpens", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	@And("^user selects Sort by drop down value \"([^\"]*)\"$")
	public void selectSortByValue(String sortBy) throws Exception {
		try {
			Thread.sleep(2000);
			myaccountpageobj.productSortDropDown.sendKeys(sortBy);
			myaccountpageobj.productSortDropDown.sendKeys(Keys.TAB);
			org.openqa.selenium.Point coordinates = myaccountpageobj.productSortDropDown.getLocation();
			Actions action = new Actions(GeckoConfiguration.driver);
			action.moveToElement(myaccountpageobj.labelProperties).build().perform();
			Thread.sleep(2000);
			String message = "Step:" + (counter++) + "PASSED- user selects " + sortBy + " value";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "selectSortByValue", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user failed select the SortBy Value\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "selectSortByValue", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}

	}

	@Then("^user verifies that the products are sorted based on the selected Sort by value$")
	public void verifyProductSortBasedOnSelectedSortByValue() throws Exception {
		try {
			Thread.sleep(2000);

			// Declaring 2 arrays , 1 for prices with $ sign, so it's a String array i.e.
			// priceList. Another array is declared for storing formatted pricelist i.e.
			// priceListInFloat without $
			ArrayList<String> priceList = new ArrayList<String>();
			ArrayList<Double> priceListInFloat = new ArrayList<Double>();

			int numberOfProducts = myaccountpageobj.productPrice.size();

			for (int i = 0; i < numberOfProducts; i = i + 1) {
				priceList.add(myaccountpageobj.productPrice.get(i).getText());
				String ss = myaccountpageobj.productPrice.get(i).getText();
				Number number = NumberFormat.getCurrencyInstance(Locale.US).parse(ss);
				priceListInFloat.add(i, (Double) number);

			}
			// Copying Array Taken from Webpage to another array
			ArrayList<Double> sortedPriceListInFloat = new ArrayList<Double>(priceListInFloat);

			Collections.sort(sortedPriceListInFloat);
			if (sortedPriceListInFloat.equals(priceListInFloat)) {
				System.out.println("List is sorted");
			} else {
				System.out.println("List is not sorted");
			}

		}
		catch (Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- Product sort failed\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "selectSortByValue", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}

	}

}
