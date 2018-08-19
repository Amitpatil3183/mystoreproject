package MyStore.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	

WebDriver localdriverobject;
	
	public LoginPage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
		this.localdriverobject=driver;
		System.out.println("INSIDE LoginPage CONSTRUCTOR$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		System.out.println("driver is: "+driver);
	}
	
	//=======================Your personal information==========================	
	@FindBy(how=How.XPATH, using=".//*[@title='Log in to your customer account']")
	public WebElement SignInLink;
	
	@FindBy(how=How.XPATH, using="//input[@id='email_create']")
	public WebElement Create_Account_Email;
	
	@FindBy(how=How.XPATH, using="//button[@id='SubmitCreate']")
	public WebElement Create_Account_button;
		
	@FindBy(how=How.XPATH, using="//input[@id='id_gender1']")
	public WebElement title_mr;
	
	@FindBy(how=How.XPATH, using="//input[@id='id_gender2']")
	public WebElement tittle_mrs;
	
	@FindBy(how=How.XPATH, using="//input[@id='customer_firstname']")
	public WebElement cust_first_name;
	
	@FindBy(how=How.XPATH, using="//input[@id='customer_lastname']")
	public WebElement cust_last_name;
	
	@FindBy(how=How.XPATH, using="//input[@id='email']")
	public WebElement email;
	
	@FindBy(how=How.XPATH, using="//input[@id='passwd']")
	public WebElement password;
	
	//==============Your address===================================================
	@FindBy(how=How.XPATH, using="//input[@id='firstname']")
	public WebElement address_fname;
	
	@FindBy(how=How.XPATH, using="//input[@id='lastname']")
	public WebElement address_lname;
	
	@FindBy(how=How.XPATH, using="//input[@id='company']")
	public WebElement company;
	
	@FindBy(how=How.XPATH, using="//input[@id='address1']")
	public WebElement address1;
	
	@FindBy(how=How.XPATH, using="//input[@id='address2']")
	public WebElement address2;
	
	@FindBy(how=How.XPATH, using="//input[@id='city']")
	public WebElement city;
	
	@FindBy(how=How.XPATH, using="//select[@id='id_state']")
	public WebElement state;
	
	@FindBy(how=How.XPATH, using="//input[@id='postcode']")
	public WebElement post_code;
	
	@FindBy(how=How.XPATH, using="//select[@id='id_country']")
	public WebElement country;
	
	@FindBy(how=How.XPATH, using=".//select[@id='id_state']")
	public WebElement State_Name;
	
	@FindBy(how=How.XPATH, using="//input[@id='phone_mobile']")
	public WebElement mobile_phone;
	
	@FindBy(how=How.XPATH, using="//input[@id='alias']")
	public WebElement alias_address;
	
	@FindBy(how=How.XPATH, using="//button[@id='submitAccount']")
	public WebElement Register_button;
	
	@FindBy(how=How.XPATH, using=".//*[@id='create_account_error']")
	public WebElement invalidEmail_error;
	

}
