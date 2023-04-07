package com.ebay.stepDef;

import com.ebay.pageAction.BestbuyHomepageActions;

import cucumber.api.java.en.Given;

public class BestbuyHomepageSteps {
	
	BestbuyHomepageActions BestbuyHomepageActionsObj=new BestbuyHomepageActions();

	@Given("^Open Bestbuy Homepage$")
	public void open_Bestbuy_Homepage() throws Throwable {
		

	}

	@Given("^Search for \"([^\"]*)\"$")
	public void search_for(String items) throws Throwable {
		BestbuyHomepageActionsObj.searchItems(items);

	}
	
	@Given("^Search for Phones$")
	public void search_for_Phones() throws Throwable {
		BestbuyHomepageActionsObj.searchPhones();
	}

	//Bestbuy Credit Card	
	@Given("^Select Credit Card option & user should be able to see next page$")
	public void select_Credit_Card_option_user_should_be_able_to_see_next_page() throws Throwable {
		BestbuyHomepageActionsObj.btnCreditCrd();
	}
	
	//Bestbuy Order status
	@Given("^Click Order status option & user should be able to see next option$")
	public void click_Order_status_option_user_should_be_able_to_see_next_option() throws Throwable {
		BestbuyHomepageActionsObj.OrderStatus();
	}

	@Given("^Click on Continue button user should be on next page$")
	public void click_on_Continue_button_user_should_be_on_next_page() throws Throwable {
		BestbuyHomepageActionsObj.buttonContinue();
	}
}
