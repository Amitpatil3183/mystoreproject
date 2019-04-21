package MyStore.PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ItemsPage {
	
		
		WebDriver localdriverobject;

		public ItemsPage (WebDriver driver) {
			PageFactory.initElements(driver, this);
			this.localdriverobject=driver;
			System.out.println("INSIDE ItemsPage CONSTRUCTOR");
			
		}

		
		@FindBy(how = How.XPATH, using = "//input[@id='search_query_top']")
		public WebElement ItemSearch;
		
		@FindBy(how = How.XPATH, using = "//*[@id=\"category\"]/div[2]/ul/li[4]")
		public WebElement PrintedChiffonDress;
		
		@FindBy(how = How.XPATH, using = "//input[@id='search_query_top']")
		public WebElement PrintedChiffonDressonDetailsPage;
		
		
		
		
		
		
		
		
		
}
