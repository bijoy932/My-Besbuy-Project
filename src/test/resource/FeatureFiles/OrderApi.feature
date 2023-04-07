@regression @api
Feature: store order API Testing

Scenario: Store order CRUD API
	
	Given Create store order
	When Get order
	Then Delete order