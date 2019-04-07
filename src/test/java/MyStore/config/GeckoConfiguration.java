package MyStore.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class GeckoConfiguration {
	public static WebDriver driver=null;
	public static WebDriverWait wait =null;
	public static WebDriver Geckotest(String DriverType){
		if(DriverType == "Chrome")
		{
			System.setProperty("webdriver.chrome.driver", "C:\\TestLibs\\chromedriver.exe");
			System.setProperty("webdriver.gecko.driver","C:\\SeleniumResources\\GeckoDriver\\geckodriver.exe");
			if(driver == null)
				driver = new ChromeDriver();
			}
		
		else if(DriverType.equalsIgnoreCase("Firefox"))
		{
			System.setProperty("webdriver.gecko.driver","C:\\SeleniumResources\\GeckoDriver\\geckodriver.exe");
			driver = new FirefoxDriver();
			}
		return driver;
		}
	}
