import Page from '../page';

require('chai').should();

class SearchAppartment extends Page {
	get searchInput    () {return browser.element('#ss');}
	get searchButton () {return browser.element ('.sb-searchbox__button')}
	// get buyButton () {return browser.element ('#right #top-book .b-button_primary')}

	verifyOnPage() {
		let logoHref = browser.element('#logo_no_globe_new_logo').getAttribute('src');
		logoHref.should.include('booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png');
	}

	search(hotelName) {
		this.searchInput.setValue(hotelName);
      	this.searchButton.click();
	}

	checkResult(elementId) {
		browser.element(elementId).should.exist;
	}

	open() {
		super.open('/')	
	}

	selectHotel(elementId) {
		//hide calendar if exist c2-wrapper-s-hidden
		let calendarDiv = browser.element('.sb-date-field__wrapper .c2-wrapper');
		if(!calendarDiv.getAttribute('class').includes('c2-wrapper-s-hidden')) {
			calendarDiv.element('.sb-searchbox__input').click()
		}
		browser.element(elementId).element('.sr_item_photo_link').click()
	}

	checkNewTab() {
     let handles = browser.windowHandles().value
     handles.length.should.equal(2)
     handles[0].should.equal(browser.getCurrentTabId())
	}

	// pausePage(milliseconds) {
	//     browser.pause(milliseconds)
	// }
}

export default new SearchAppartment()
