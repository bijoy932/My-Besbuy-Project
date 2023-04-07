package com.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayCartLocators {
	
	//Select Quantity
	@FindBy(xpath="//input[@id='qtyTextBox']")
	public WebElement selectQty;
	
	
	//Add to Cart
	@FindBy(xpath="//span[contains(text(),'Add to cart')]")
	public WebElement addToCart;
	
}
