$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BestbuyBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Bestbuy Brand Outline",
  "description": "\r\nDescription: User should able to filter items by Brand",
  "id": "bestbuy-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Filter items by Brand",
  "description": "",
  "id": "bestbuy-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of \"\u003cBrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bestbuy-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 15,
      "id": "bestbuy-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Phones",
        "Samsung"
      ],
      "line": 16,
      "id": "bestbuy-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "tvs",
        "LG"
      ],
      "line": 17,
      "id": "bestbuy-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Laptops",
        "HP"
      ],
      "line": 18,
      "id": "bestbuy-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4772021300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 70919300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Filter items by Brand",
  "description": "",
  "id": "bestbuy-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Phones\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"Samsung\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of \"Samsung\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Phones",
      "offset": 12
    }
  ],
  "location": "BestbuyHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 8229406000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 11
    }
  ],
  "location": "BestbuySearchingSteps.filter_by(String)"
});
formatter.result({
  "duration": 306982500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung",
      "offset": 34
    }
  ],
  "location": "BestbuySearchingSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 486735200,
  "status": "passed"
});
formatter.after({
  "duration": 1869448500,
  "status": "passed"
});
formatter.before({
  "duration": 5687054900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 443500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Filter items by Brand",
  "description": "",
  "id": "bestbuy-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"tvs\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"LG\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of \"LG\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tvs",
      "offset": 12
    }
  ],
  "location": "BestbuyHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 8378918100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LG",
      "offset": 11
    }
  ],
  "location": "BestbuySearchingSteps.filter_by(String)"
});
formatter.result({
  "duration": 366133300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LG",
      "offset": 34
    }
  ],
  "location": "BestbuySearchingSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 871410900,
  "status": "passed"
});
formatter.after({
  "duration": 1776103600,
  "status": "passed"
});
formatter.before({
  "duration": 5277720300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 161100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Filter items by Brand",
  "description": "",
  "id": "bestbuy-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Search for \"Laptops\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Filter by \"HP\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Item list should have product of \"HP\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops",
      "offset": 12
    }
  ],
  "location": "BestbuyHomepageSteps.search_for(String)"
});
formatter.result({
  "duration": 7860327200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP",
      "offset": 11
    }
  ],
  "location": "BestbuySearchingSteps.filter_by(String)"
});
formatter.result({
  "duration": 721791700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP",
      "offset": 34
    }
  ],
  "location": "BestbuySearchingSteps.item_list_should_have_product_of(String)"
});
formatter.result({
  "duration": 228434300,
  "status": "passed"
});
formatter.after({
  "duration": 1764366400,
  "status": "passed"
});
formatter.uri("BestbuyCreditApply.feature");
formatter.feature({
  "line": 2,
  "name": "Bestbuy Credit Cards",
  "description": "\r\nDescription: User should able to Credit Cards option",
  "id": "bestbuy-credit-cards",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    }
  ]
});
formatter.before({
  "duration": 5270589600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Apply for Credit card with invalid Credential",
  "description": "",
  "id": "bestbuy-credit-cards;apply-for-credit-card-with-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Select Credit Card option \u0026 user should be able to see next page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Apply Today and user on the sign in page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click on apply now option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "provide invalid email id",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "provide invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Sing in Button \u0026 user should see an Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 294200,
  "status": "passed"
});
formatter.match({
  "location": "BestbuyHomepageSteps.select_Credit_Card_option_user_should_be_able_to_see_next_page()"
});
formatter.result({
  "duration": 2484715000,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.click_on_Apply_Today_and_user_on_the_sign_in_page()"
});
formatter.result({
  "duration": 2251024500,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.click_on_apply_now_option()"
});
formatter.result({
  "duration": 5933026200,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.provide_invalid_email_id()"
});
formatter.result({
  "duration": 2130379200,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.provide_invalid_password()"
});
formatter.result({
  "duration": 2103803300,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.click_on_Sing_in_Button_user_should_see_an_Error_message()"
});
formatter.result({
  "duration": 2113908400,
  "status": "passed"
});
formatter.after({
  "duration": 1371486800,
  "status": "passed"
});
formatter.uri("BestbuyOrderStatus.feature");
formatter.feature({
  "line": 2,
  "name": "Bestbuy Order status functionality",
  "description": "\r\nDescription: User should able to Check Order status with invalid Credential",
  "id": "bestbuy-order-status-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@US-246"
    }
  ]
});
formatter.before({
  "duration": 5294499000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should able to Check Order status with invalid Credential",
  "description": "",
  "id": "bestbuy-order-status-functionality;user-should-able-to-check-order-status-with-invalid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Click Order status option \u0026 user should be able to see next option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Continue button user should be on next page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on Continue button Find a Guest Order",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Provide invalid Order Number",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Provide invalid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Provide Invalid phone number",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Find Button \u0026 user should see an Error message",
  "keyword": "Then "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 189200,
  "status": "passed"
});
formatter.match({
  "location": "BestbuyHomepageSteps.click_Order_status_option_user_should_be_able_to_see_next_option()"
});
formatter.result({
  "duration": 3392273800,
  "status": "passed"
});
formatter.match({
  "location": "BestbuyHomepageSteps.click_on_Continue_button_user_should_be_on_next_page()"
});
formatter.result({
  "duration": 6269744000,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.click_on_Continue_button_Find_a_Guest_Order()"
});
formatter.result({
  "duration": 2146891400,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.provide_invalid_Order_Number()"
});
formatter.result({
  "duration": 2376236300,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.provide_invalid_Last_Name()"
});
formatter.result({
  "duration": 2137606400,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.provide_Invalid_And_Provide_valid()"
});
formatter.result({
  "duration": 2153658900,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.click_on_Find_Button_user_should_see_an_Error_message()"
});
formatter.result({
  "duration": 108248300,
  "status": "passed"
});
formatter.after({
  "duration": 1247699200,
  "status": "passed"
});
formatter.uri("BestbyCartDropDown.feature");
formatter.feature({
  "line": 2,
  "name": "Bestbuy Cart Functionality",
  "description": "\r\nDescription: User should able to add items in cart",
  "id": "bestbuy-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 5951436100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open Bestbuy Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BestbuyHomepageSteps.open_Bestbuy_Homepage()"
});
formatter.result({
  "duration": 162200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Bestbuy cart functionality",
  "description": "",
  "id": "bestbuy-cart-functionality;bestbuy-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Search for Phones",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select the category",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Select brand",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Carrier Compatibility",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Condition",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select Model Family",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Internal Storage Capacity",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Features",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Color",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Operating System",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "See details",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "BestbuyHomepageSteps.search_for_Phones()"
});
formatter.result({
  "duration": 6973334300,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_the_category()"
});
formatter.result({
  "duration": 2990499500,
  "status": "passed"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_brand()"
});
formatter.result({
  "duration": 338123200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027brand_facet-Samsung-1\u0027]\"}\n  (Session info: chrome\u003d111.0.5563.65)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027PAUL-HP\u0027, ip: \u0027192.168.1.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\paulb\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62221}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4436dd42e499444ece6118e29cf12bc3\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027brand_facet-Samsung-1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.ebay.pageAction.BestbuySearchingActions.SelectBrand(BestbuySearchingActions.java:48)\r\n\tat com.ebay.stepDef.BestbuySearchingSteps.select_brand(BestbuySearchingSteps.java:33)\r\n\tat ✽.And Select brand(BestbyCartDropDown.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Carrier_Compatibility()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Condition()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Model_Family()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Internal_Storage_Capacity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Features()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Color()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.select_Operating_System()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.see_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BestbuySearchingSteps.add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2312471600,
  "status": "passed"
});
formatter.uri("EbayCart.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay laptop Cart Functionality",
  "description": "\r\nDescription: User should able to cart laptop",
  "id": "ebay-laptop-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 6135629900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-laptop-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Search for a laptop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select first laptop",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should able to cart the laptop",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 4269234800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.search_for_a_laptop()"
});
formatter.result({
  "duration": 2059292000,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_first_laptop()"
});
formatter.result({
  "duration": 646364500,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartSteps.select_Quantity()"
});
formatter.result({
  "duration": 1616200,
  "error_message": "java.lang.NullPointerException\r\n\tat com.ebay.stepDef.EbayCartSteps.select_Quantity(EbayCartSteps.java:14)\r\n\tat ✽.And Select Quantity(EbayCart.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayCartSteps.should_able_to_cart_the_laptop()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2162142200,
  "status": "passed"
});
formatter.uri("EbaySearch.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Cart Functionality",
  "description": "\r\nDescription: User should able to cart product by category",
  "id": "ebay-cart-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@us-248"
    }
  ]
});
formatter.before({
  "duration": 5632539900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Select Shop by category and user should be category page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the category for products user should see product related page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select brand from product brand user see product related brand",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select the product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select quantity",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should able to cart the product",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomepageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 4282842500,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.select_Shop_by_category_and_user_should_be_category_page()"
});
formatter.result({
  "duration": 595748400,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomepageSteps.select_the_category_for_products_user_should_see_product_related_page()"
});
formatter.result({
  "duration": 1737656500,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_product_from_product_brand_user_see_brand_related_product()"
});
formatter.result({
  "duration": 3087524000,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_the_product()"
});
formatter.result({
  "duration": 41824400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"s0-27_1-9-0-1[3]-0-0\"]/ul/li[9]/div[1]/div[2]/a/h3\"}\n  (Session info: chrome\u003d111.0.5563.65)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027PAUL-HP\u0027, ip: \u0027192.168.1.51\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\paulb\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62577}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: de59c73bd1f4c29cb8b283fb4b8681c0\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"s0-27_1-9-0-1[3]-0-0\"]/ul/li[9]/div[1]/div[2]/a/h3}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat com.ebay.pageAction.EbaySearchResultActions.SelectProduct(EbaySearchResultActions.java:30)\r\n\tat com.ebay.stepDef.EbaySearchResultSteps.select_the_product(EbaySearchResultSteps.java:20)\r\n\tat ✽.And Select the product(EbaySearch.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbaySearchResultSteps.select_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbaySearchResultSteps.user_should_able_to_cart_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1850284800,
  "status": "passed"
});
formatter.uri("OrderApi.feature");
formatter.feature({
  "line": 2,
  "name": "store order API Testing",
  "description": "",
  "id": "store-order-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 5463252400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Store order CRUD API",
  "description": "",
  "id": "store-order-api-testing;store-order-crud-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Create store order",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get order",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Delete order",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderApiSteps.create_store_order()"
});
formatter.result({
  "duration": 2853426600,
  "status": "passed"
});
formatter.match({
  "location": "OrderApiSteps.get_order()"
});
formatter.result({
  "duration": 161287500,
  "status": "passed"
});
formatter.match({
  "location": "OrderApiSteps.delete_order()"
});
formatter.result({
  "duration": 138177200,
  "status": "passed"
});
formatter.after({
  "duration": 1160826800,
  "status": "passed"
});
formatter.uri("PetApi.feature");
formatter.feature({
  "line": 2,
  "name": "Pet API Testing",
  "description": "",
  "id": "pet-api-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.before({
  "duration": 5933914400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Pet CRUD API",
  "description": "",
  "id": "pet-api-testing;pet-crud-api",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Create pet",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Get pet",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Update pet",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Get pet",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Delete pet",
  "keyword": "And "
});
formatter.match({
  "location": "PetApiSteps.create_pet()"
});
formatter.result({
  "duration": 161999700,
  "status": "passed"
});
formatter.match({
  "location": "PetApiSteps.get_pet()"
});
formatter.result({
  "duration": 156699300,
  "status": "passed"
});
formatter.match({
  "location": "PetApiSteps.update_pet()"
});
formatter.result({
  "duration": 175680400,
  "status": "passed"
});
formatter.match({
  "location": "PetApiSteps.get_pet()"
});
formatter.result({
  "duration": 141242300,
  "status": "passed"
});
formatter.match({
  "location": "PetApiSteps.delete_pet()"
});
formatter.result({
  "duration": 137447600,
  "status": "passed"
});
formatter.after({
  "duration": 1545419500,
  "status": "passed"
});
});