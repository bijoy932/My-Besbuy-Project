package com.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySearchResultLocators {

	
	
	//Check box BrandHP
	@FindBy(xpath="//a[contains(text(),'HP')]")
	public WebElement cbxBrandHp;
	
	
	//Select Product
	@FindBy(xpath="//*[@id=\"s0-27_1-9-0-1[3]-0-0\"]/ul/li[9]/div[1]/div[2]/a/h3")
	public WebElement SelectProduct;
	
	
	//Select Quantity
	@FindBy(xpath="//select[@id='vi-quantity__select-box-0']")
	public WebElement SelectQty;
	
	
	//Add to Cart
	@FindBy(xpath="//a[contains(text(), 'Add to cart')]")
	public WebElement addToCart;
	
	//Select Laptop
	@FindBy(xpath="//*[@id=\"srp-river-results\"]/ul/li[4]/div/div[1]/div/a/div")
	public WebElement selectLaptop;

}
