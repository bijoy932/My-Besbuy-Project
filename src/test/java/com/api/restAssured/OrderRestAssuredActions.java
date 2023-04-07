package com.api.restAssured;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;

import java.io.File;

public class OrderRestAssuredActions {
	
	public void createOrder(){
		
		given().														//Request Payload
			body(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiRequestPayloads/CreateOrderRequest.json")).
		when().															//Setting the Header & Request url
			header("Content-Type", "application/json").
			post("https://petstore.swagger.io/v2/store/order").
		then().															//Printing Response in console
			log().body().
		and().															//Verify status code
			assertThat().statusCode(200).
		and().															//Verify Response using json schema
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/CreateOrderResponse.json")));
	}
	
	public void getOrder(){
		
		given().														//Request Payload
		when().															//Setting the Header & Request url
			header("Content-Type", "application/json").
			get("https://petstore.swagger.io/v2/store/order/5").
		then().															//Printing Response in console
			log().body().
		and().															//Verify status code
			assertThat().statusCode(200).
		and().															//Verify Response using json schema
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/GetOrderResponse.json")));
	}
	
	public void deleteOrder(){
		
		given().														//Request Payload
		when().															//Setting the Header & Request url
			header("Content-Type", "application/json").
			delete("https://petstore.swagger.io/v2/store/order/5").
		then().															//Printing Response in console
			log().body().
		and().															//Verify status code
			assertThat().statusCode(200).
		and().															//Verify Response using json schema
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/DeleteOrderResponse.json")));
	}

}
