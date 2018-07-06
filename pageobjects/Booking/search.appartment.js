import Page from '../page';

class SearchAppartment extends Page {
	get Nameapp() {return browser.element('#ss');}
	 verifyOnPage () {return browser.element('#logo_no_globe_new_logo');}
	get Searchinput () {return browser.element('.c-autocomplete__input .sb-searchbox__input .sb-destination__input #')} 

	open(){

		super.open('/')
	}
}

export default new SearchAppartment()
