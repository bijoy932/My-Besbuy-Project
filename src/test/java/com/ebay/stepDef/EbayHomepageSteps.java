package com.ebay.stepDef;

import com.ebay.pageAction.EbayHomepageActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class EbayHomepageSteps {
	
	EbayHomepageActions EbayHomepageActionsobj=new EbayHomepageActions();
	
	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {
		EbayHomepageActionsobj.loadEbayHomepage();
	}
	
	@Given("^Select Shop by category and user should be category page$")
	public void select_Shop_by_category_and_user_should_be_category_page() throws Throwable {
		EbayHomepageActionsobj.ShopByCategory();
	}
	
	@Given("^Select the category for products user should see product related page$")
	public void select_the_category_for_products_user_should_see_product_related_page() throws Throwable {
		EbayHomepageActionsobj.SelectCategory();
	}
	
	@Given("^Search for a laptop$")
	public void search_for_a_laptop() throws Throwable {
		EbayHomepageActionsobj.searchLaptop();
	}

}
