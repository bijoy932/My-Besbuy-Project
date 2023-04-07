package com.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestbuyHomepageLocators {
	
	//Search text box
	@FindBy(xpath="//input[@id='gh-search-input']")
	public WebElement txtbxSearch;
	
	//Search Button
	@FindBy(xpath="//button[@aria-label='submit search']")
	public WebElement btnSearch;
	

	//Credit Card Button
	@FindBy(xpath="//a[contains(text(),'Credit Cards')]")
	public WebElement btnCreditCard;
	
	//Bestbuy Order Status
	
	//Order Status
	@FindBy(xpath="//span[contains(text(),'Order Status')]")
	public WebElement btnOrderStatus;
	
	//Button Continue
	@FindBy(xpath="//a[contains(text(),'Continue')]")
	public WebElement btnContinue;
}
