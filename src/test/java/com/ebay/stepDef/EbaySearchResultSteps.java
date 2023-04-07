package com.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import com.ebay.pageAction.EbaySearchResultActions;

public class EbaySearchResultSteps {
	
	EbaySearchResultActions EbaySearchResultActionsobj= new EbaySearchResultActions();
	
	@When("^Select brand from product brand user see product related brand$")
	public void select_product_from_product_brand_user_see_brand_related_product() throws Throwable {
		EbaySearchResultActionsobj.CheckboxBrandHP();
	}

	@When("^Select the product$")
	public void select_the_product() throws Throwable {
		EbaySearchResultActionsobj.switchNewWindow();
		EbaySearchResultActionsobj.SelectProduct();
	}

	@When("^Select quantity$")
	public void select_quantity() throws Throwable {
		EbaySearchResultActionsobj.SelectQuantity();
	}

	@Then("^user should able to cart the product$")
	public void user_should_able_to_cart_the_product() throws Throwable {
		EbaySearchResultActionsobj.addToCart();
	}
	
	@When("^Select first laptop$")
	public void select_first_laptop() throws Throwable {
		EbaySearchResultActionsobj.SelectLaptop();
	}
}
