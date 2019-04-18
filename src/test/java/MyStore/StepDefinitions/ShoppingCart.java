
package MyStore.StepDefinitions;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import MyStore.PageObjects.LoginPage;
import MyStore.PageObjects.MyAccountsPage;
import MyStore.PageObjects.ShoppingCartPage;
import MyStore.config.Config;
import MyStore.config.GeckoConfiguration;
import MyStore.config.HTMLReportGenerator;
import MyStore.config.TakeScreenShot;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ShoppingCart {
	
	
	LoginPage loginpageobj = null;
	public static WebDriver driver = null;
	final static Logger logger = Logger.getLogger(ShoppingCart.class);
	int counter = 1;
	MyAccountsPage myaccountpageobj=null;
	ShoppingCartPage shoppingcartpageobj = null;

	
	
	@And ("^user clicks on the Printed Summer Dress Item$")
	public void clickOnSummerDressItem() throws IOException {
		try {
			Thread.sleep(1000);
			Actions action = new Actions(GeckoConfiguration.driver);
			action.moveToElement(shoppingcartpageobj.ItemSelection).build().perform();
			Thread.sleep(1000);
			String message = "Step:"+(counter++)+"PASSED- user clicks on Dresses Mega Menu";
			logger.info(message);
			HTMLReportGenerator.StepDetails("PASS", "clickOnSummerDressItem", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
		}
		catch(Exception ex) {
			String message = "Step:" + (counter++)
					+ " FAILED- user failed to click on clickOnSummerDressItem\nException Details:"
					+ ex.getLocalizedMessage();
			logger.info(message);
			HTMLReportGenerator.StepDetails("FAIL", "clickOnSummerDressItem", message,
					TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			Assert.assertTrue(false);
		}	
	
	}
		@And ("^user clicks on the Add to Cart button$")
		public void clickOnAddToCart() throws IOException {
			try {
				Thread.sleep(1000);
				shoppingcartpageobj.AddToCartButton.click();
				String message = "Step:"+(counter++)+"PASSED- user clicks on Add to Cart buttom";
				logger.info(message);
				HTMLReportGenerator.StepDetails("PASS", "clickOnAddToCart", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			}
			catch(Exception ex) {
				String message = "Step:" + (counter++)+ " FAILED- user failed to click on clickOnAddToCart\nException Details:"	+ ex.getLocalizedMessage();
				logger.info(message);
				HTMLReportGenerator.StepDetails("FAIL", "clickOnAddToCart", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
				Assert.assertTrue(false);
			}
		}

		
		@Then("^There is 1 item in your cart popup message is displayed to the user$")
		public void VerifyItemAddPopup() throws IOException {
			
			try {
				Thread.sleep(1000);
				String Alert = GeckoConfiguration.driver.switchTo().alert().getText();
				String message = "Step:"+(counter++)+"PASSED- user clicks on Add to Cart buttom";
				logger.info(message);
				HTMLReportGenerator.StepDetails("PASS", "VerifyItemAddPopup", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
			}
			catch(Exception ex) {
				String message = "Step:" + (counter++)+ " FAILED- user failed to see the popup\nException Details:" + ex.getLocalizedMessage();
				logger.info(message);
				HTMLReportGenerator.StepDetails("FAIL", "VerifyItemAddPopup", message,TakeScreenShot.TakeScreenShot(Config.getImageFilePath(), GeckoConfiguration.driver));
				Assert.assertTrue(false);
			}
		}
}