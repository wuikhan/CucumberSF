package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BaseClass;


public class LoginTest extends BaseClass {

	@Given("^I open the browser$")
	public void i_open_the_browser() {
//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/Drivers/chromedriver");
//		driver = new ChromeDriver();

		DesiredCapabilities caps = new DesiredCapabilities();
        caps.setJavascriptEnabled(true); // not really needed: JS enabled by default
        caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, System.getProperty("user.dir") + "/Drivers/phantomjs");
        driver = new PhantomJSDriver(caps);
        
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^I go to the application$")
	public void i_go_to_the_application() {
		driver.get("https://login.salesforce.com");
		
	}

	@Then("^I should see the logo$")
	public void i_should_see_the_logo() {
		boolean isLogoPresent = driver.findElement(By.id("logo")).isDisplayed();
		Assert.assertTrue(isLogoPresent);
	}

	@When("^I enter \"([^\"]*)\" username$")
	public void I_enter_username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);
	}

	@When("^I enter \"([^\"]*)\" password$")
	public void I_enter_password(String password) {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() {
		driver.findElement(By.id("Login")).click();
	}

	@Then("^I should see the logout link$")
	public void I_should_see_the_logout_link() {
		boolean isLoggedIn = driver.findElement(By.id("setupLink")).isDisplayed();
		Assert.assertTrue(isLoggedIn);
	}

	@Then("^I quit$")
	public void i_quit() {
	    driver.quit();
	}
	@Then("^I should see the home page$")
	public void i_should_see_the_home_page()  {
		Assert.assertTrue(false);
	}
}
