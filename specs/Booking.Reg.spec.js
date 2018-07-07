import RegistrationPage from '../pageobjects/Booking/registration.page'

require('chai').should();

var assert = require('chai').assert

describe.skip('PositiveTestRegistration', () => {

	it('Open site', () => {
		RegistrationPage.open()
		browser.element('#logo_no_globe_new_logo').should.exist
	})

	it('Modal window open',() =>{
		RegistrationPage.openModal()
		browser.element('div[aria-label="Зарегистрироваться"]').should.exist
	})

	it('Positive registration and signout', () => {
		RegistrationPage.emailInput.setValue('9jockoussama.jos@1.emailfake.ml')
		RegistrationPage.passwordInput.setValue('111222333')	
		RegistrationPage.submitButton.click()
		
			browser.waitForExist('#wl252-modal-name');
		
			browser.isExisting('.modal-wrapper .wl252-modal__skip')
			browser.click('.modal-wrapper .wl252-modal__skip')
			browser.click('.modal-wrapper .wl252-modal__skip')
			browser.click('.modal-wrapper .wl252-btn-done')
		    browser.element('span[header_name="Ваш аккаунт"] .user_firstname .ge-no-yellow-bg').should.exist
			browser.click('.header-user-menu-link-s-logged-in')
			browser.click('form.profile-menu__item--signout')
			
	})

})
