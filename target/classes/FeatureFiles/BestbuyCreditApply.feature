@regression @smoke @US-246
Feature: Bestbuy Credit Cards

Description: User should able to Credit Cards option

      
      Scenario: Apply for Credit card with invalid Credential
	      Given Open Bestbuy Homepage
	      And Select Credit Card option & user should be able to see next page
	      When Click on Apply Today and user on the sign in page
	      And Click on apply now option
	      And provide invalid email id
	      And provide invalid password
	      Then Click on Sing in Button & user should see an Error message