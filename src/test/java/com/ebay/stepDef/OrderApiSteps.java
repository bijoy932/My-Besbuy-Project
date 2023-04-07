package com.ebay.stepDef;

import com.api.restAssured.OrderRestAssuredActions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderApiSteps {
	
	OrderRestAssuredActions OrderRestAssuredActionsObj = new OrderRestAssuredActions();
	
	@Given("^Create store order$")
	public void create_store_order() throws Throwable {
		OrderRestAssuredActionsObj.createOrder();
	}

	@When("^Get order$")
	public void get_order() throws Throwable {
		OrderRestAssuredActionsObj.getOrder();
	}

	@Then("^Delete order$")
	public void delete_order() throws Throwable {
		OrderRestAssuredActionsObj.deleteOrder();
	}

}
