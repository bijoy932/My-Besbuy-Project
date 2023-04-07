package com.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.ebay.pageElements.EbaySearchResultLocators;
import com.utilities.SetupDrivers;

public class EbaySearchResultActions {
	
	EbaySearchResultLocators EbaySearchResultLocatorsobj;
	
	public EbaySearchResultActions(){
		EbaySearchResultLocatorsobj=new EbaySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsobj);
		
	}
	public void switchNewWindow(){
		for(String winhandle: SetupDrivers.driver.getWindowHandles()){
		SetupDrivers.driver.switchTo().window(winhandle);
		}
	}
	
	public void CheckboxBrandHP() throws Exception{
		Assert.assertTrue(EbaySearchResultLocatorsobj.cbxBrandHp.isDisplayed());
		Thread.sleep(3000);
	}
	
	public void SelectProduct() throws Exception{
		Assert.assertTrue(EbaySearchResultLocatorsobj.SelectProduct.isDisplayed());
		Thread.sleep(3000);
	}
	
	public void SelectQuantity() throws Exception{
		Assert.assertTrue(EbaySearchResultLocatorsobj.SelectQty.isDisplayed());
		Thread.sleep(3000);
	}
	
	public void addToCart() throws Exception{
		Assert.assertTrue(EbaySearchResultLocatorsobj.addToCart.isDisplayed());
		Thread.sleep(3000);
	}
	public void SelectLaptop(){
		EbaySearchResultLocatorsobj.selectLaptop.click();
	}
	
}
	


