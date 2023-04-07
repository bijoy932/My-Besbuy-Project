package com.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.ebay.pageElements.EbayCartLocators;
import com.utilities.SetupDrivers;

public class EbayCartActions {

	EbayCartLocators EbayCartLocatorsObj=new EbayCartLocators();
	
	public EbayCartActions(){
		EbayCartLocators EbayCartLocatorsObj=new EbayCartLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayCartLocatorsObj);
	}
	
	public void switchNewWindow() throws Exception{
		for(String winhandle: SetupDrivers.driver.getWindowHandles()){
		SetupDrivers.driver.switchTo().window(winhandle);	
		Thread.sleep(3000);
		}
	}
	
	public void SelectQty() throws Exception{
		EbayCartLocatorsObj.selectQty.clear();
		EbayCartLocatorsObj.selectQty.sendKeys("2");
		Thread.sleep(3000);
	}
	
	public void AddToCart() throws Exception{
		EbayCartLocatorsObj.addToCart.click();
		Thread.sleep(3000);
	}
}
