package com.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayHomepageLocators {
	
	//Selenium PageFactory
	
	//Search Text Box
	@FindBy(xpath="//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;
	
	
	//Search Button
	@FindBy(xpath="//input[@value='Search']")
	public WebElement btnSearch;

	//Click by Category
	@FindBy(xpath="//button[@id='gh-shop-a']")
	public WebElement clickByCategory;
	
	//Select Category
	@FindBy(xpath="//a[@title='Your shopping destination for the best selection and value in electronics and accessories']")
	public WebElement SelectCategory;

}
