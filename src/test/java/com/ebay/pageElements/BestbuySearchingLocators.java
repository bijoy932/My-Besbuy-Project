package com.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BestbuySearchingLocators {
	
	//Validate phones Items
	@FindBy(xpath="//h1[contains(text(),'phones')]")
	public WebElement txtphones;
	
	//Check box Brand Samsung
	@FindBy(xpath="//input[@aria-label='Samsung']")
	public WebElement cbxBrandSamsung;
	
	
	
	//Validate Tv  Items
	@FindBy(xpath="//h1[contains(text(),'tv')]")
	public WebElement txtTvs;
	
	//Check box Brand LG
	@FindBy(xpath="//input[@aria-label='LG']")
	public WebElement cbxBrandLG;
	
	
	
	//Validate Laptops Items
	@FindBy(xpath="//h1[contains(text(),'laptop')]")
	public WebElement txtLaptops;
	
	//Check box Brand HP
	@FindBy(xpath="//input[@aria-label='HP']")
	public WebElement cbxBrandHp;
	
	
	//Click Category phone
	@FindBy(xpath="//a[contains(text(),'Unlocked Cell Phones')]")
	public WebElement ClickCategoryPhones;
	
	//Check box Brand phone
	@FindBy(xpath="//input[@id='brand_facet-Samsung-1']")
	public WebElement cbxBrandPhones;
	
	//Check box Carrier Compatibility phone
	@FindBy(xpath="//input[@id='carriercompatibilitysv_facet-Unlocked-0']")
	public WebElement cbxCarrierCompatibilityPhones;
	
	
	/*Check box price phone
	@FindBy(xpath="//*[@id=\"currentprice_facet-$1000-$1249.99-0\"]")
	public WebElement cbxpricePhones;*/


	//Check box Condition phone
	@FindBy(xpath="//input[@aria-label='New']")
	public WebElement cbxConditionPhones;

	
	//Check box Model phone
	@FindBy(xpath="//input[@id='modelfamily_facet-Samsung-Galaxy-S23-Ultra-1']")
	public WebElement cbxModelPhones;

	
	//Check box Storage phone
	@FindBy(xpath="//input[@id='mobileinternalmemeory_facet-256-gigabytes-0']")
	public WebElement cbxStoragePhones;

	
	//Check box Feature phone
	@FindBy(xpath="//input[@aria-label='Water Resistant']")
	public WebElement cbxFeaturePhones;
	
	//Check box Color phone
	@FindBy(xpath="//input[@aria-label='Black']")
	public WebElement cbxColorPhones;

	
	//Check box OperatingSystem phone
	@FindBy(xpath="//input[@aria-label='Android']")
	public WebElement cbxOSPhones;

	
	//Button Details
	@FindBy(xpath="//a[contains(text(),'See Details')]")
	public WebElement btnDetailsPhones;
	//button[@data-sku-id='6529721']
	
	//Add Button Cart
	@FindBy(xpath="//*[@id=\"fulfillment-add-to-cart-button-36281609\"]/div/div/div/button")
	public WebElement btnCartPhones;

	//Bestbuy Credit Card
	
	//Button Apply Today
	@FindBy(xpath="//a[contains(text(),'Apply today')]")
	public WebElement btnApplyToday;
	
	//Button Apply Now
	@FindBy(xpath="//a[contains(text(),'Apply Now')]")
	public WebElement btnApplyNow;
	
	//Invali Email 
	@FindBy(xpath="//input[@id='fld-e']")
	public WebElement InvalidEmlId ;
	
	//Invalid Password
	@FindBy(xpath="//input[@id='fld-p1']")
	public WebElement InvalidPswd;
	
	//Button SignIn
	@FindBy(xpath="//button[@data-track='Sign In']")
	public WebElement btnSignIn;
	
	//Order status
	
	//Button Continue as Guest
	@FindBy(xpath="//button[contains(text(),'Continue')]")
	public WebElement btnContinueGst;
	
	//Invalid Order Number
	@FindBy(xpath="//input[@id='orderNumber-id']")
	public WebElement InvalidOrdrNmbr;
	
	// Invalid Last Name
	@FindBy(xpath="//input[@id='lastName-id']")
	public WebElement InvalidLstNme;
	
	//Invalid phone number
	@FindBy(xpath="//input[@id='phoneNumber-id']")
	public WebElement InvalidPhNmbr;
	
	//Find Button
	@FindBy(xpath="//button[contains(text(),'Find')]")
	public WebElement btnFind;
	

}

