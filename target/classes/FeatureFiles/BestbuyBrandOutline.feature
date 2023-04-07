@regression @smoke @US-246
Feature: Bestbuy Brand Outline

Description: User should able to filter items by Brand

Background:
      Given Open Bestbuy Homepage
      
      Scenario Outline: Filter items by Brand
      Given Search for "<Items>"
      When Filter by "<Brand>"
      Then Item list should have product of "<Brand>"
      
      Examples:
         |Items   	 |Brand     |
         |Phones   	 |Samsung   |
         |tvs	     |LG	    |
         |Laptops    |HP	    |