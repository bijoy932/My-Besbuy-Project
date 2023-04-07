package com.ebay.stepDef;

import com.ebay.pageAction.BestbuySearchingActions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BestbuySearchingSteps {
	
	BestbuySearchingActions BestbuySearchActionsObj=new BestbuySearchingActions();
	
	@When("^Filter by \"([^\"]*)\"$")
	public void filter_by(String brand) throws Throwable {
		BestbuySearchActionsObj.filterBrand(brand);

	}

	@Then("^Item list should have product of \"([^\"]*)\"$")
	public void item_list_should_have_product_of(String brand) throws Throwable {
		BestbuySearchActionsObj.verifyBrandItems(brand);

	}
	
	
	
	@When("^Select the category$")
	public void select_the_category() throws Throwable {
		BestbuySearchActionsObj.SelectCategory();
	}

	@When("^Select brand$")
	public void select_brand() throws Throwable {
		BestbuySearchActionsObj.SelectBrand();
	}

	@When("^Select Carrier Compatibility$")
	public void select_Carrier_Compatibility() throws Throwable {
		BestbuySearchActionsObj.SelectCarierComp();
	}

/*	@When("^Select Price$")
	public void select_Price() throws Throwable {
		BestbuySearchActionsObj.SelectPrice();
	}*/

	@When("^Select Condition$")
	public void select_Condition() throws Throwable {
		BestbuySearchActionsObj.SelectCondition();
	}

	@When("^Select Model Family$")
	public void select_Model_Family() throws Throwable {
		BestbuySearchActionsObj.SelectModel();
	}

	@When("^Select Internal Storage Capacity$")
	public void select_Internal_Storage_Capacity() throws Throwable {
		BestbuySearchActionsObj.SelectStorage();
	}

	@When("^Select Features$")
	public void select_Features() throws Throwable {
		BestbuySearchActionsObj.SelectFeature();
	}

	@When("^Select Color$")
	public void select_Color() throws Throwable {
		BestbuySearchActionsObj.SelectColor();
	}

	@When("^Select Operating System$")
	public void select_Operating_System() throws Throwable {
		BestbuySearchActionsObj.SelectOs();
	}

	@Then("^See details$")
	public void see_details() throws Throwable {
		BestbuySearchActionsObj.SeeDeatils();
	}

	@Then("^Add to cart$")
	public void add_to_cart() throws Throwable {
		BestbuySearchActionsObj.AddCart();
	}
	
	
	//Credit Card Apply
	@When("^Click on Apply Today and user on the sign in page$")
	public void click_on_Apply_Today_and_user_on_the_sign_in_page() throws Throwable {
		BestbuySearchActionsObj.BtnApplyToday();
	}

	@When("^Click on apply now option$")
	public void click_on_apply_now_option() throws Throwable {
		BestbuySearchActionsObj.BtnApplyNow();
	}

	@When("^provide invalid email id$")
	public void provide_invalid_email_id() throws Throwable {
		BestbuySearchActionsObj.InvalidEmlId();
	}

	@When("^provide invalid password$")
	public void provide_invalid_password() throws Throwable {
		BestbuySearchActionsObj.InvalidPswd();
	}
	@Then("^Click on Sing in Button & user should see an Error message$")
	public void click_on_Sing_in_Button_user_should_see_an_Error_message() throws Throwable {
		BestbuySearchActionsObj.BtnSignIn();
	}

//	Bestbuy Order Status
	
	@When("^Click on Continue button Find a Guest Order$")
	public void click_on_Continue_button_Find_a_Guest_Order() throws Throwable {
		BestbuySearchActionsObj.BtnContinueGst();
	}

	@When("^Provide invalid Order Number$")
	public void provide_invalid_Order_Number() throws Throwable {
		BestbuySearchActionsObj.InvalidOrdrNmbr();
	}

	@When("^Provide invalid Last Name$")
	public void provide_invalid_Last_Name() throws Throwable {
		BestbuySearchActionsObj.InvalidLstNme();
	}

	@When("^Provide Invalid phone number$")
	public void provide_Invalid_And_Provide_valid() throws Throwable {
		BestbuySearchActionsObj.InvalidPhNmbr();
	}

	@Then("^Click on Find Button & user should see an Error message$")
	public void click_on_Find_Button_user_should_see_an_Error_message() throws Throwable {
		BestbuySearchActionsObj.btnFind();
	}
}

