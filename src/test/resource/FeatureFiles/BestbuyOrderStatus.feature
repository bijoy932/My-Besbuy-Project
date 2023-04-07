@regression @smoke @US-246
Feature: Bestbuy Order status functionality

Description: User should able to Check Order status with invalid Credential

      
      Scenario: User should able to Check Order status with invalid Credential
	      Given Open Bestbuy Homepage
	      And Click Order status option & user should be able to see next option
	      And Click on Continue button user should be on next page
	      When Click on Continue button Find a Guest Order
	      And Provide invalid Order Number
	      And Provide invalid Last Name
	      And Provide Invalid phone number
	      Then Click on Find Button & user should see an Error message