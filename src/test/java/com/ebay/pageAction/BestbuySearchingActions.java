package com.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.ebay.pageElements.BestbuySearchingLocators;
import com.utilities.SetupDrivers;

public class BestbuySearchingActions {
	
	BestbuySearchingLocators BestbuySearchLocatorsObj;
	
	public BestbuySearchingActions(){
		BestbuySearchLocatorsObj=new BestbuySearchingLocators();
		PageFactory.initElements(SetupDrivers.driver, BestbuySearchLocatorsObj);
	}
	
	public void filterBrand(String brand){
		if(brand.equals("Samsung")){
			BestbuySearchLocatorsObj.cbxBrandSamsung.click();
		}else if(brand.equals("LG")){
			BestbuySearchLocatorsObj.cbxBrandLG.click();
		}else if(brand.equals("HP")){
			BestbuySearchLocatorsObj.cbxBrandHp.click();
		}else{
			System.out.println("Brand not found");
		}
	}
	
	public void verifyBrandItems(String brand){
		if(brand.equals("Samsung")){
			Assert.assertTrue(BestbuySearchLocatorsObj.txtphones.isDisplayed());
		}else if(brand.equals("LG")){
			Assert.assertTrue(BestbuySearchLocatorsObj.txtTvs.isDisplayed());
		}else if(brand.equals("HP")){
			Assert.assertTrue(BestbuySearchLocatorsObj.txtLaptops.isDisplayed());
		}else{
			System.out.println("Brand not found");
		}
		
	}
	
	public void SelectCategory() throws Exception{
		BestbuySearchLocatorsObj.ClickCategoryPhones.click();
		Thread.sleep(2000);
	}
	public void SelectBrand() throws Exception{
		BestbuySearchLocatorsObj.cbxBrandPhones.click();
		Thread.sleep(2000);
	}
	public void SelectCarierComp() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxCarrierCompatibilityPhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SelectCondition() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxConditionPhones.isDisplayed());
		Thread.sleep(2000);
	}
/*	public void SelectPrice() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxpricePhones.isDisplayed());
		Thread.sleep(2000);
	}*/
	public void SelectModel() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxModelPhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SelectStorage() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxStoragePhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SelectFeature() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxFeaturePhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SelectColor() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxColorPhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SelectOs() throws Exception{
		Assert.assertTrue(BestbuySearchLocatorsObj.cbxOSPhones.isDisplayed());
		Thread.sleep(2000);
	}
	public void SeeDeatils() throws Exception{
		BestbuySearchLocatorsObj.btnDetailsPhones.click();
		Thread.sleep(2000);
	}
	public void AddCart() throws Exception{
		BestbuySearchLocatorsObj.btnCartPhones.click();
		Thread.sleep(2000);
	}
	
	
	
//Bestbuy Credit CArd Apply
	public void BtnApplyToday() throws Exception{
		BestbuySearchLocatorsObj.btnApplyToday.click();
		Thread.sleep(2000);
	}
	public void BtnApplyNow() throws Exception{
		BestbuySearchLocatorsObj.btnApplyNow.click();
		Thread.sleep(2000);
	}
	public void InvalidEmlId() throws Exception{
		BestbuySearchLocatorsObj.InvalidEmlId.sendKeys("abc@gamil.com");
		Thread.sleep(2000);
	}
	public void InvalidPswd() throws Exception{
		BestbuySearchLocatorsObj.InvalidPswd.sendKeys("A12345698c");
		Thread.sleep(2000);
	}
	public void BtnSignIn() throws Exception{
		BestbuySearchLocatorsObj.btnSignIn.click();
		Thread.sleep(2000);
	} 
	
	//Order Status
	public void BtnContinueGst() throws Exception{
		BestbuySearchLocatorsObj.btnContinueGst.click();
		Thread.sleep(2000);
	}
	public void InvalidOrdrNmbr() throws Exception{
		BestbuySearchLocatorsObj.InvalidOrdrNmbr.sendKeys("ghk5656456");
		Thread.sleep(2000);
	}
	public void InvalidLstNme() throws Exception{
		BestbuySearchLocatorsObj.InvalidLstNme.sendKeys("Paul");
		Thread.sleep(2000);
	}
	public void InvalidPhNmbr() throws Exception{
		BestbuySearchLocatorsObj.InvalidPhNmbr.sendKeys("6465176963");
		Thread.sleep(2000);
	}
	public void btnFind(){
		BestbuySearchLocatorsObj.btnFind.click();
	}
}
