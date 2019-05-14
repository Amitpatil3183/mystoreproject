package MyStore.StepDefinitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import MyStore.PageObjects.AddressBookPage;
import MyStore.PageObjects.LoginPage;
import MyStore.PageObjects.MyAccountsPage;
import MyStore.config.Config;
import MyStore.config.GeckoConfiguration;
import MyStore.config.HTMLReportGenerator;
import MyStore.config.TakeScreenShot;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class AddressBook {
	
	LoginPage loginpageobj = null;
	public static WebDriver driver = null;
	final static Logger logger = Logger.getLogger(AddressBook.class);
	int counter = 1;
	AddressBookPage addressbookobj = null;
	
	
	
	@And("^user clicks on View My Customer Account link$")
	public void clickOnMyCustomerAccountLink() throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj = new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.MyCustomerAccountLink.click();
			String message = "Step:" + (counter++) + "PASSED- user clicks on View My Customer Account link";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnMyCustomerAccountLink", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			
		} catch (Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on View My Customer Account link\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnMyCustomerAccountLink", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	  
	  
	@And("^user clicks on My Addresses menu$")
	public void clickOnMyAddressMenu() throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj = new AddressBookPage(GeckoConfiguration.driver);
			Thread.sleep(5000);
			addressbookobj.MyAddressesMenu.click();
			String message = "Step:" + (counter++) + "PASSED- user clicks on clicks on My Addresses menu";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnMyAddressMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		} catch (Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on My Addresses menu\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnMyAddressMenu", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And ("^user clicks on Add a new Addresses button$")
	public void clickOnAddNewAddressButton() throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj = new AddressBookPage(GeckoConfiguration.driver);
			
			addressbookobj.AddNewAddressesButton.click();
			
		 //addressbookobj.AddNewAddressesButton.click();
			Thread.sleep(8000);
			String message = "Step:"+(counter++)+"PASSED- user clicks on Add a new Addresses button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnAddNewAddressButton", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)+ " FAILED- user failed to clicks on Add a new Addresses button\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnAddNewAddressButton", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	
	@And ("^And user enters Address as \"(.*)\"$")
	public void EnterFirstAddress(String address) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.FirstAddress.sendKeys(address);
			String message = "Step:"+(counter++)+"PASSED- user enters Address";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterFirstAddress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters Address\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterFirstAddress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}

	
	@And ("^And user enters City as \"(.*)\"$")
	public void EnterCity(String city) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.City.sendKeys(city);
			String message = "Step:"+(counter++)+"PASSED- user enters city";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterCity", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters city\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterCity", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And ("^And user selects State as \"(.*)\"$")
	public void EnterState(String state) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.State.sendKeys(state);
			String message = "Step:"+(counter++)+"PASSED- user enters state";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterState", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters state\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterState", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And ("^And user enters ZipCode as \"(.*)\"$")
	public void EnterZipCode(String zipcode) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.ZipCode.sendKeys(zipcode);
			String message = "Step:"+(counter++)+"PASSED- user enters ZipCode";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterZipCode", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters ZipCode\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterZipCode", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And ("^user enters Homephone as \"(.*)\"$")
	public void EnterHomephone(String Homephone) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.HomePhone.sendKeys(Homephone);
			String message = "Step:"+(counter++)+"PASSED- user enters Homephone";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterHomephone", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters Homephone\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterHomephone", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	@And ("^user enters Mobilephone as \"(.*)\"$")
	public void EnterMobilePhone(String MobilePhone) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			addressbookobj.MobilePhone.sendKeys(MobilePhone);
			String message = "Step:"+(counter++)+"PASSED- user enters Mobile Phone";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "EnterMobilePhone", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to enters Mobile Phone\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "EnterMobilePhone", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	@And ("^user clicks on the Save button$")
	public void clickOnSaveAddress() throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj.AddressSave.click();
			String message = "Step:"+(counter++)+"PASSED- user clicks on the Save button";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnSaveAddress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)+ " FAILED- user failed to click on the Save button\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnSaveAddress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@Then("^user navigates to the My Addresses page and \"(.*)\" text is displayed to the user$")
	public void MyAddressPageNavigation(String Extectedtext) throws IOException {
		try {
			Thread.sleep(1000);
			addressbookobj=new AddressBookPage(GeckoConfiguration.driver);
			//GeckoConfiguration.wait.until(ExpectedConditions.textToBePresentInElement(By.xpath(addressbookobj.MyAddressesText), "MY ADDRESSES"));
			String ActualText = addressbookobj.MyAddressesText.getText();
			String message = "Step:"+(counter++)+"PASSED- user navigates to the my adresss page and text is displayed to the user";
			logger.info(message);
			Assert.assertEquals(Extectedtext, ActualText);
			HTMLReportGenerator.StepDetails("PASS", "MyAddressPageNavigation", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++) + " FAILED- user filed to navigate to the my adresss page\nException Details:"+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "MyAddressPageNavigation", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
}
