package com.ebay.pageAction;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.ebay.pageElements.EbayHomepageLocators;
import com.utilities.SetupDrivers;

public class EbayHomepageActions {
	
	EbayHomepageLocators EbayHomepageLocatorsobj;
	
	
	public EbayHomepageActions() {
		EbayHomepageLocatorsobj=new EbayHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomepageLocatorsobj);
		
	}
	
	public void loadEbayHomepage() throws Exception {
		SetupDrivers.driver.get("https://www.ebay.com/");
		Thread.sleep(3000);
		
	}
	
	public void ShopByCategory(){
		EbayHomepageLocatorsobj.clickByCategory.click();
	}
	
	public void SelectCategory(){
		EbayHomepageLocatorsobj.SelectCategory.click();
	}
	
	public void searchLaptop(){
		EbayHomepageLocatorsobj.txtbxSearch.sendKeys("hp envy x360 i7");
		EbayHomepageLocatorsobj.btnSearch.click();
	}
	
}
