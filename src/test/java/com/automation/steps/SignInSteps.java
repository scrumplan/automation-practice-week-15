package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {
    @Given("^I on home page$")
    public void iOnHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I am on login page$")
    public void iAmOnLoginPage() {
    }

    @Then("^I am successfully navigate to login page$")
    public void iAmSuccessfullyNavigateToLoginPage() {
    }

    @And("^I can see the authentication message \"([^\"]*)\"$")
    public void iCanSeeTheAuthenticationMessage(String expectedAuthenticationText) {
        Assert.assertEquals("authentication text is not match", expectedAuthenticationText, new SignInPage().getAuthenticationText());
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new SignInPage().enterEmailForSignIn(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPasswordForSignIn(password);
    }

    @And("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I am not able to login with invalid credentials$")
    public void iAmNotAbleToLoginWithInvalidCredentials() {
    }

    @And("^I can see the \"([^\"]*)\"$")
    public void iCanSeeThe(String expectedErrorMessage) {
        Assert.assertEquals("error message is not match", expectedErrorMessage, new SignInPage().getErrorMessage());
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I am successfully login with valid credentials$")
    public void iAmSuccessfullyLoginWithValidCredentials() {
    }

    @And("^I can see the sign out link$")
    public void iCanSeeTheSignOutLink() {
        Assert.assertTrue(new SignInPage().signOutLinkDisplayed());
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new SignInPage().clickOnSignOutButton();
    }

    @Then("^I am successfully logout the account$")
    public void iAmSuccessfullyLogoutTheAccount() {
    }

    @And("^I can see the sign in link$")
    public void iCanSeeTheSignInLink() {
        Assert.assertTrue(new HomePage().signInLinkDisplayed());
    }

    @Then("^I should be able to see sign out link is visible$")
    public void iShouldBeAbleToSeeSignOutLinkIsVisible() {
        String expectedMessage = "Sign out";
        String actualMessage = new SignInPage().verifySignOutLinkIsVisible();
        Assert.assertEquals("sign out link not visible",expectedMessage,actualMessage);
    }
}
