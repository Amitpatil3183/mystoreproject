package MyStore.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AddressBookPage {
	

	WebDriver localdriverobject;

	public AddressBookPage (WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.localdriverobject=driver;
		System.out.println("INSIDE Address Book CONSTRUCTOR");

}
	
	@FindBy(how = How.XPATH, using = "//a[@title='View my customer account']")
	public WebElement MyCustomerAccountLink;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'My addresses')]")
	public WebElement MyAddressesMenu;
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Add a new address')]")
	public WebElement AddNewAddressesButton;
	
	@FindBy(how = How.XPATH, using = "//input[@id='address1']")
	public WebElement FirstAddress;
	
	@FindBy(how = How.XPATH, using = "//input[@id='city']")
	public WebElement City;
	
	@FindBy(how = How.XPATH, using = "//select[@id='id_state']")
	public WebElement State;
	
	@FindBy(how = How.XPATH, using = "//input[@id='postcode']")
	public WebElement ZipCode;
	
	@FindBy(how = How.XPATH, using = "//input[@id='phone']")
	public WebElement HomePhone;
	
	@FindBy(how = How.XPATH, using = "//input[@id='phone_mobile']")
	public WebElement MobilePhone;
	
	@FindBy(how = How.XPATH, using = "//input[@id='phone_mobile']")
	public WebElement AddressSave;
	
	
	
	
	
	
}
