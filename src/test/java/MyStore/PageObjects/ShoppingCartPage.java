package MyStore.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ShoppingCartPage {
	
	WebDriver localdriverobject;

	public ShoppingCartPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.localdriverobject=driver;
		System.out.println("INSIDE MyAccountsPage CONSTRUCTOR");
		
	}
	
	
	@FindBy(how = How.XPATH, using = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 last-line last-item-of-tablet-line last-mobile-line hovered']//span[contains(text(),'Quick view')]")
	public WebElement ItemSelection;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Add to cart')]")
	public WebElement AddToCartButton;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'There is 1 item in your cart.')]")
	public WebElement ItemAddConformPopup;

}
