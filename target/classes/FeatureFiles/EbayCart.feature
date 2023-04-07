@regression @smoke @us-248
Feature: Ebay laptop Cart Functionality

Description: User should able to cart laptop
	
	Scenario: Ebay cart functionality
		Given Open Ebay Homepage
		And Search for a laptop
		When Select first laptop
		And Select Quantity
		Then Should able to cart the laptop
		