package MyStore.StepDefinitions;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import MyStore.PageObjects.ItemsPage;
import MyStore.PageObjects.LoginPage;
import MyStore.PageObjects.MyAccountsPage;
import MyStore.PageObjects.ShoppingCartPage;
import MyStore.config.Config;
import MyStore.config.GeckoConfiguration;
import MyStore.config.HTMLReportGenerator;
import MyStore.config.TakeScreenShot;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Items {
	
	LoginPage loginpageobj = null;
	public static WebDriver driver = null;
	final static Logger logger = Logger.getLogger(ShoppingCart.class);
	int counter = 1;
	MyAccountsPage myaccountpageobj=null;
	ShoppingCartPage shoppingcartpageobj = null;
	ItemsPage itemspageobj = null;
	
	
	@Then("^user enters \"(.*)\" into the Global Item searchbox$")
	public void SearchItem(String ItemText) throws IOException {
		
		try {
			Thread.sleep(1000);
			itemspageobj.ItemSearch.sendKeys(ItemText);
			String message = "Step:"+(counter++)+"PASSED- user enters the text";
			logger.info(message);
			Thread.sleep(1000);
		  	HTMLReportGenerator.StepDetails("PASS", "SearchItem", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)+ " FAILED- user failed to enter the text\nException Details:" + ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "SearchItem", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And("^user selects Printed Chiffon Item from the list$")
	public void SelectItem(String ItemText) throws IOException {
		
		try {
			Thread.sleep(1000);
			itemspageobj.PrintedChiffonDress.click();
			String message = "Step:"+(counter++)+"PASSED- user enters the text";
			logger.info(message);
			Thread.sleep(1000);
		  	HTMLReportGenerator.StepDetails("PASS", "SearchItem", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)+ " FAILED- user failed to enter the text\nException Details:" + ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "SearchItem", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	
	@And("\"(.*)\" is displayed in Details view$")
	public void VerifyPrintedChiffonDress(String ItemName) throws IOException {
		
		try {
			Thread.sleep(1000);
			String ActualItemName= itemspageobj.PrintedChiffonDressonDetailsPage.getText();
			String message = "Step:"+(counter++)+"PASSED-";
			logger.info(message);
			Thread.sleep(1000);
			Assert.assertEquals(ItemName, ActualItemName);			
		  	HTMLReportGenerator.StepDetails("PASS", "VerifyPrintedChiffonDress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)+ " FAILED- failed\nException Details:" + ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "VerifyPrintedChiffonDress", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}
	}
	
	

}
