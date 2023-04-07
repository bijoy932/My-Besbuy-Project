package com.ebay.stepDef;

import com.ebay.pageAction.EbayCartActions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EbayCartSteps {
	
	EbayCartActions EbayCartActionsObj;
	
	@When("^Select Quantity$")
	public void select_Quantity() throws Throwable {
		EbayCartActionsObj.switchNewWindow();
		EbayCartActionsObj.SelectQty();

	}

	@Then("^Should able to cart the laptop$")
	public void should_able_to_cart_the_laptop() throws Throwable {
		EbayCartActionsObj.AddToCart();
	}

}
