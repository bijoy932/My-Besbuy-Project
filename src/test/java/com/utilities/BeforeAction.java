package com.utilities;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class BeforeAction {
	
	@Before
	public void beforeActions (Scenario scen){
		System.out.println("---->>>> Initializing Driver....");
		SetupDrivers.setupDriver();
		System.out.println("TEst Scenario Name: " + scen.getName());
	}

}
