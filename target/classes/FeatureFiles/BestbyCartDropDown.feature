@regression @smoke @us-248
Feature: Bestbuy Cart Functionality

Description: User should able to add items in cart

	Background: 
		Given Open Bestbuy Homepage
	
	Scenario: Bestbuy cart functionality
		Given Search for Phones
		When Select the category
		And Select brand
		And Select Carrier Compatibility
		And Select Condition
		And Select Model Family
		And Select Internal Storage Capacity
		And Select Features
		And Select Color
		And Select Operating System
		Then See details
		And Add to cart
		