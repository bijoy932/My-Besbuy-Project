@regression @smoke @us-248
Feature: Ebay Cart Functionality

Description: User should able to cart product by category
	
	Scenario: Ebay cart functionality
		Given Open Ebay Homepage
		And Select Shop by category and user should be category page
		And Select the category for products user should see product related page
		When Select brand from product brand user see product related brand
		And Select the product
		And Select quantity
		Then user should able to cart the product
		