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
		System.out.println("INSIDE ShoppingCart CONSTRUCTOR");
		
	}
	
	
	@FindBy(how = How.XPATH, using = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 last-line last-item-of-tablet-line last-mobile-line hovered']//span[contains(text(),'Quick view')]")
	public WebElement ItemSelection;

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Add to cart')]")
	public WebElement AddToCartButton;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'There is 1 item in your cart.')]")
	public WebElement ItemAddConformPopup;

	@FindBy(how = How.XPATH, using = "//span[@title='Close window']")
	public WebElement CancelOnPopup;
	
	@FindBy(how = How.XPATH, using = "//a[@title='View my shopping cart']")
	public WebElement MiniShoppingCart;
	
	@FindBy(how = How.XPATH, using = "//a[@class='ajax_cart_block_remove_link']")
	public WebElement MiniShoppingCartRemove;
	
	@FindBy(how = How.XPATH, using = "//p[@class='alert alert-warning']")
	public WebElement ShoppingCartEmptyMessage;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Proceed to checkout')]")
	public WebElement ProceedToCheckout;
	
	@FindBy(how = How.XPATH, using = "//i[@class='icon-trash']")
	public WebElement DeleteItemButton;
	
	
}
