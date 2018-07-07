import Page from '../page';

class SearchAppartment extends Page {
	get nameApp    () {return browser.element('#ss');}
	verifyOnPage   () {return browser.element('#logo_no_globe_new_logo');}
	clickHotelName () {return browser.element('span.sr-hotel__name*=Hotel Pennsylvania').element("..").click()}
	clickBuyButton () {return browser.element ('#right #top-book .b-button_primary').click()}


open() {super.open('/')	}
}

export default new SearchAppartment()
