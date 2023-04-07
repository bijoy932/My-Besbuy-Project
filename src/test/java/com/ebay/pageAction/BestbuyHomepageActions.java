package com.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import com.ebay.pageElements.BestbuyHomepageLocators;
import com.utilities.SetupDrivers;

public class BestbuyHomepageActions {
	
	BestbuyHomepageLocators BestbuyHomepageLocatorsObj;
	
	public BestbuyHomepageActions(){
		BestbuyHomepageLocatorsObj=new BestbuyHomepageLocators();
		PageFactory.initElements(SetupDrivers.driver, BestbuyHomepageLocatorsObj);
	}
	
	public void searchPhones(){
		BestbuyHomepageLocatorsObj.txtbxSearch.sendKeys("Phones");
		BestbuyHomepageLocatorsObj.btnSearch.click();
	}
/*	
	public void searchTvSmart(){
		BestbuyHomepageLocatorsObj.txtbxSearch.sendKeys("TvSmart");
		BestbuyHomepageLocatorsObj.btnSearch.click();
	}
	
	public void searchLaptops(){
		BestbuyHomepageLocatorsObj.txtbxSearch.sendKeys("laptops");
		BestbuyHomepageLocatorsObj.btnSearch.click();
	}
	*/
	public void searchItems(String items){
		BestbuyHomepageLocatorsObj.txtbxSearch.sendKeys(items);
		BestbuyHomepageLocatorsObj.btnSearch.click();
	}
	
	//Bestbuy Credit Card
	public void btnCreditCrd(){
		BestbuyHomepageLocatorsObj.btnCreditCard.click();
	}
	
	//Bestbuy Order Status
	public void OrderStatus() throws Exception{
		BestbuyHomepageLocatorsObj.btnOrderStatus.click();
		Thread.sleep(3000);
	}
	public void buttonContinue() throws Exception{
		BestbuyHomepageLocatorsObj.btnContinue.click();
		Thread.sleep(3000);
	}

}
