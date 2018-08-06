import Page from "../page";

/*global browser*/

class RegistrationPage extends Page {
	get emailInput() { return browser.element(".user_access_signup_menu .user_access_form_signup input.user_access_email"); }
	get passwordInput() { return browser.element(".user_access_signup_menu .user_access_form_signup .user_signup_password"); }   
	get submitButton() {return browser.element(".user_access_signup_menu .user_access_form_signup input[type=\"submit\"]"); }
	
	openModal() {
		browser.click("li.uc_account-center-item a.signin_cta.profile_menu_trigger");
	}
}

export default new RegistrationPage();
