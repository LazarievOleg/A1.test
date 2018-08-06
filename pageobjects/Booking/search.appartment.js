import Page from "../page";
import SearchForm from "../searchform";
/*global browser*/

require("chai").should();

class SearchAppartment extends Page {

	search(hotelName) {
		SearchForm.searchInput.setValue(hotelName);
		SearchForm.searchButton.click();
	}

	checkResult(elementId) {
		browser.element(elementId).isVisible().should.be.true;
	}

	selectHotel(elementId) {
		let calendarDiv = browser.element(".sb-date-field__wrapper .c2-wrapper");
		if(!calendarDiv.getAttribute("class").includes("c2-wrapper-s-hidden")) {
			calendarDiv.element(".sb-searchbox__input").click();
		}
		browser.element(elementId).element(".sr_item_photo_link").click();
	}
}

export default new SearchAppartment();
