$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPage.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Functionality",
  "description": "As user , I would like to create account successfully",
  "id": "create-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12516383800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should able to create account with valid information",
  "description": "",
  "id": "create-account-functionality;i-should-able-to-create-account-with-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email address for create account \"Mahesh123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the first name \"Mahesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the last name \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the password \"Mahesh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the address \"seaford road\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the city \"london\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the state \"Hawaii\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the zipcode \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter the phone number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter the alias address \"My-3 address\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am successfully registration with valid information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I can see the my account message \"MY ACCOUNT\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 6447230800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123@gmail.com",
      "offset": 42
    }
  ],
  "location": "CreateAccount.iEnterEmailAddressForCreateAccount(String)"
});
formatter.result({
  "duration": 216206700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 114380900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh",
      "offset": 24
    }
  ],
  "location": "CreateAccount.iEnterTheFirstName(String)"
});
formatter.result({
  "duration": 2945910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 23
    }
  ],
  "location": "CreateAccount.iEnterTheLastName(String)"
});
formatter.result({
  "duration": 174241800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123",
      "offset": 22
    }
  ],
  "location": "CreateAccount.iEnterThePassword(String)"
});
formatter.result({
  "duration": 185589300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seaford road",
      "offset": 21
    }
  ],
  "location": "CreateAccount.iEnterTheAddress(String)"
});
formatter.result({
  "duration": 476167100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 18
    }
  ],
  "location": "CreateAccount.iEnterTheCity(String)"
});
formatter.result({
  "duration": 274201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hawaii",
      "offset": 20
    }
  ],
  "location": "CreateAccount.iSelectTheState(String)"
});
formatter.result({
  "duration": 273286500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 21
    }
  ],
  "location": "CreateAccount.iEnterTheZipcode(String)"
});
formatter.result({
  "duration": 194235700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "CreateAccount.iSelectTheCountry(String)"
});
formatter.result({
  "duration": 126898300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "CreateAccount.iEnterThePhoneNumber(String)"
});
formatter.result({
  "duration": 167856200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My-3 address",
      "offset": 27
    }
  ],
  "location": "CreateAccount.iEnterTheAliasAddress(String)"
});
formatter.result({
  "duration": 138191100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iClickOnRegistrationButton()"
});
formatter.result({
  "duration": 2120259800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccount.iAmSuccessfullyRegistrationWithValidInformation()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 34
    }
  ],
  "location": "CreateAccount.iCanSeeTheMyAccountMessage(String)"
});
formatter.result({
  "duration": 55269900,
  "status": "passed"
});
formatter.after({
  "duration": 826001500,
  "status": "passed"
});
formatter.uri("SignInPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As user, I would like to login With valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3955696100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1293822300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I am successfully navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the authentication message \"AUTHENTICATION\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmSuccessfullyNavigateToLoginPage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 38
    }
  ],
  "location": "SignInSteps.iCanSeeTheAuthenticationMessage(String)"
});
formatter.result({
  "duration": 52944700,
  "status": "passed"
});
formatter.after({
  "duration": 772589500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can see the \"\u003cErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ],
      "line": 26,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 27,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 28,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 29,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 30,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4073636200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1289811500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 20600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can see the \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 94853400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 140299000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 748639600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iCanSeeThe(String)"
});
formatter.result({
  "duration": 33024900,
  "status": "passed"
});
formatter.after({
  "duration": 712018200,
  "status": "passed"
});
formatter.before({
  "duration": 4896931900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 57600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1609556300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 19900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can see the \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 122064400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 108098100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2379921000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 22000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iCanSeeThe(String)"
});
formatter.result({
  "duration": 31416400,
  "status": "passed"
});
formatter.after({
  "duration": 738408500,
  "status": "passed"
});
formatter.before({
  "duration": 4071366100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 9720248200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can see the \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 94763700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 110312100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5565938300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iCanSeeThe(String)"
});
formatter.result({
  "duration": 37702100,
  "status": "passed"
});
formatter.after({
  "duration": 721346600,
  "status": "passed"
});
formatter.before({
  "duration": 4901197800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1656056700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I can see the \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 117174300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 104127800,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2276001500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 15
    }
  ],
  "location": "SignInSteps.iCanSeeThe(String)"
});
formatter.result({
  "duration": 40920100,
  "status": "passed"
});
formatter.after({
  "duration": 719557300,
  "status": "passed"
});
formatter.before({
  "duration": 3625295500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 39400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1732071100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 34300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "I should able to login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I enter username \"Mahesh123@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I enter password \"Mahesh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I am successfully login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I can see the sign out link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 115639700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 112240500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2431614400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmSuccessfullyLoginWithValidCredentials()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iCanSeeTheSignOutLink()"
});
formatter.result({
  "duration": 40108790100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\"header_user_info\"]//a[contains(text(),\u0027Sign out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-2IGPTO53\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [99dbd6b9b7896b5456e4cbe741d831cf, findElement {using\u003dxpath, value\u003d//div[@class\u003d\"header_user_info\"]//a[contains(text(),\u0027Sign out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\sonal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59188}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59188/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 99dbd6b9b7896b5456e4cbe741d831cf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.automation.pages.SignInPage.signOutLinkDisplayed(SignInPage.java:104)\r\n\tat com.automation.steps.SignInSteps.iCanSeeTheSignOutLink(SignInSteps.java:69)\r\n\tat ✽.And I can see the sign out link(SignInPageTest.feature:39)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1326967000,
  "status": "passed"
});
formatter.before({
  "duration": 5830193200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iOnHomePage()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1279541600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "I should able to log out after login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-log-out-after-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I enter username \"Mahesh123@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I enter password \"Mahesh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I am successfully logout the account",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I can see the sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 152821700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh123",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 132968100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 869041900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20024183200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\"header_user_info\"]//a[contains(text(),\u0027Sign out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-2IGPTO53\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bcb08a302d744253a4956725f278e8a3, findElement {using\u003dxpath, value\u003d//div[@class\u003d\"header_user_info\"]//a[contains(text(),\u0027Sign out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\sonal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59244}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59244/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bcb08a302d744253a4956725f278e8a3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.automation.pages.SignInPage.clickOnSignOutButton(SignInPage.java:99)\r\n\tat com.automation.steps.SignInSteps.iClickOnLogoutButton(SignInSteps.java:74)\r\n\tat ✽.And I click on logout button(SignInPageTest.feature:48)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.iAmSuccessfullyLogoutTheAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.iCanSeeTheSignInLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 964248700,
  "status": "passed"
});
formatter.uri("WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Functionality",
  "description": "As user, I would like to shopping on women\u0027s category",
  "id": "women-category-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"\u003cProductName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change the quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the size \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;",
  "rows": [
    {
      "cells": [
        "ProductName",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 18,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 19,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 20,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 21,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 22,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5627221100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 7550405900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1928881100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3101566300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 111323100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 99975800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 84696800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 40100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2032133700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 1452235700,
  "status": "passed"
});
formatter.after({
  "duration": 726399400,
  "status": "passed"
});
formatter.before({
  "duration": 4190741500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change the quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 6599085000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2870875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3109350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 116141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 100359300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 76303000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2043768900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 51074800,
  "status": "passed"
});
formatter.after({
  "duration": 705722600,
  "status": "passed"
});
formatter.before({
  "duration": 4124889600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change the quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 1612957900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 1288814000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3091569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 49167000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 121133200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 86407900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2028120600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 57549000,
  "status": "passed"
});
formatter.after({
  "duration": 768594400,
  "status": "passed"
});
formatter.before({
  "duration": 3836910400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I change the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 1717904100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 105953700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 20032428000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-2IGPTO53\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6d3b89cec20cd2d746f53146c850f62e, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\sonal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59424}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59424/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6d3b89cec20cd2d746f53146c850f62e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.clear(Unknown Source)\r\n\tat com.automation.pages.ProductPage.enterQuantity(ProductPage.java:42)\r\n\tat com.automation.steps.WomenCategoryPageTest.iChangeTheQuantity(WomenCategoryPageTest.java:25)\r\n\tat ✽.And I change the quantity \"2\"(WomenCategoryPageTest.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1013879600,
  "status": "passed"
});
});