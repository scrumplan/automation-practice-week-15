package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantity;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement size;
    @CacheLookup
    @FindBy(xpath = "//a[contains(@class,'color_pick' )]")
    List<WebElement> colour;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCartButton;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement successfullyAddedMessageText;
    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindowTAb;


    public void enterQuantity(String qty) throws InterruptedException {
        log.info("enter the 'QUANTITY' : "+ qty);
        quantity.clear();
        Thread.sleep(3000);
        sendTextToElement(quantity, qty);
    }

    public void selectSize(String siz) {
        log.info("select 'SIZE' from drop down : " + siz);
        selectByVisibleTextFromDropDown(size, siz);
    }

    public void clickOnColour(String colour1) {
        for (WebElement element : colour) {
            if (element.getAttribute("title").equalsIgnoreCase(colour1)) {
                log.info("select 'COLOUR' : " + colour1);
                element.click();
                break;
            }
        }
    }

    public void clickOnAddCart() {
        log.info("click on 'ADD TO CART' button : " + addCartButton.toString());
        clickOnElement(addCartButton);

    }

    public String getVerifySuccessFullyAddedText() {
        log.info("get the text of 'ADD TO CART' text : "+ successfullyAddedMessageText.toString());
        return successfullyAddedMessageText.getAttribute("innerText");
    }

    public void clickOnCloseWindowTab() {
        log.info("click on 'CLOSE WINDOW' button : " + closeWindowTAb.toString());
        clickOnElement(closeWindowTAb);
    }

}
