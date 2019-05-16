package MyStore.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class GeckoConfiguration {
	public static WebDriver driver=null;
	public static WebDriverWait wait =null;
	public static WebDriver Geckotest(String DriverType){
		if(DriverType.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "C:\\SeleniumResources\\chromedriver.exe");
			driver = new ChromeDriver();
			}
		
		if(DriverType.equalsIgnoreCase("IE"))
		{
			System.setProperty("webdriver.ie.driver", "C:\\SeleniumResources\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			}
		
		else if(DriverType.equalsIgnoreCase("Firefox"))
		{
			System.setProperty("webdriver.gecko.driver","C:\\SeleniumResources\\GeckoDriver\\geckodriver.exe");
			driver = new FirefoxDriver();
			}
		return driver;
		}
	}
