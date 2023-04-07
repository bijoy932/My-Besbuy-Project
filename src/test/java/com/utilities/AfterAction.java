package com.utilities;

import cucumber.api.java.After;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;

public class AfterAction {
	
	TakeScreenShots TakeScreenShotsObj = new TakeScreenShots();
	
	@After
	public void afterActions(Scenario Scenario) throws Exception{
		
		if(Scenario.isFailed()){
			TakeScreenShotsObj.screenshots();
			Scenario.embed(((TakesScreenshot) SetupDrivers.driver).getScreenshotAs(OutputType.BYTES),"image/png");
		}
		
		SetupDrivers.tearDownDriver();
		System.out.println(" ------Test Complete, Browser Closed ");
	}

}
