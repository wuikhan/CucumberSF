$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "As a valid user , I should be able to login to the application.",
  "id": "test-login-functionality",
  "keyword": "Feature"
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
  "duration": 2673804928,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 4908031666,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_home_page()"
});
formatter.result({
  "duration": 1417471,
  "status": "passed"
});
});