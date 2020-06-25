$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user , I should be able to login to the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I quit",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 17,
      "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "As a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I quit",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 1584749324,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 4144369539,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepDefinition.LoginTest.i_go_to_the_application(LoginTest.java:36)\n\tat ✽.When I go to the application(Feature/login.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_quit()"
});
formatter.result({
  "status": "skipped"
});
});