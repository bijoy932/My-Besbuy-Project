@regression @api
Feature: Pet API Testing

Scenario: Pet CRUD API
	
	Given Create pet
	And Get pet
	When Update pet
	Then Get pet
	And Delete pet