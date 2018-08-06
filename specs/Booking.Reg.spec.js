import RegistrationPage from "../pageobjects/Booking/registration.page";

require("chai").should();

/*global browser*/

describe.skip("PositiveTestRegistration", () => {

	before(() => {
		RegistrationPage.open("/");
		RegistrationPage.verifyOnPage();
	});

	it("Open site", () => {
		RegistrationPage.verifyOnPage();
	});

	it("Modal window open",() =>{
		RegistrationPage.openModal();
	});

	it("Positive registration and signout", () => {
		RegistrationPage.emailInput.setValue("9jockoussama.jos@1.emailfake.ml");
		RegistrationPage.passwordInput.setValue("111222333");	
		RegistrationPage.submitButton.click();
		browser.waitForExist("#wl252-modal-name");
		browser.isExisting(".modal-wrapper .wl252-modal__skip");
		browser.click(".modal-wrapper .wl252-modal__skip");
		browser.click(".modal-wrapper .wl252-modal__skip");
		browser.click(".modal-wrapper .wl252-btn-done");
		browser.element("span[header_name=\"Ваш аккаунт\"] .user_firstname .ge-no-yellow-bg").should.exist;
		browser.click(".header-user-menu-link-s-logged-in");
		browser.click("form.profile-menu__item--signout");	
	});
});
