package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageTest {

    @When("^I click on women link tab$")
    public void iClickOnWomenLinkTab() {
        new HomePage().clickOnWomanTab();
    }

    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product) {
        new WomenCategoryPage().clickOnProduct(product);
    }

    @And("^I change the quantity \"([^\"]*)\"$")
    public void iChangeTheQuantity(String quantity) throws InterruptedException {
        new ProductPage().enterQuantity(quantity);
    }

    @And("^I select the size \"([^\"]*)\"$")
    public void iSelectTheSize(String size) {
        new ProductPage().selectSize(size);
    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour) {
        new ProductPage().clickOnColour(colour);
    }

    @And("^I click on add to card button$")
    public void iClickOnAddToCardButton() {
        new ProductPage().clickOnAddCart();
    }

    @Then("^I am successfully added the product on add to cart basket$")
    public void iAmSuccessfullyAddedTheProductOnAddToCartBasket() {
    }

    @And("^I can see the addtocart message \"([^\"]*)\"$")
    public void iCanSeeTheAddtocartMessage(String expectedAddtoCartText) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("add to cart test is not match",expectedAddtoCartText, new ProductPage().getVerifySuccessFullyAddedText().trim());
    }

    @And("^I close the popup$")
    public void iCloseThePopup() {
        new ProductPage().clickOnCloseWindowTab();
    }
}
