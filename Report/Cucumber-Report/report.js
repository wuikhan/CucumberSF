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
  "duration": 2738466323,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 3082381701,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "duration": 30003851,
  "status": "passed"
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
  "duration": 45667454,
  "status": "passed"
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
  "duration": 47007809,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 5482388504,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "duration": 19379756,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_quit()"
});
formatter.result({
  "duration": 1081112575,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a valid user I should be able to login to the applications",
  "description": "",
  "id": "test-login-functionality;as-a-valid-user-i-should-be-able-to-login-to-the-applications",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 692126100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 13723143482,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_home_page()"
});
formatter.result({
  "duration": 25546,
  "status": "passed"
});
});