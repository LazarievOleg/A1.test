import Page from "../page";

/*global browser*/

require("chai").should();


class SearchCity extends Page {
	get searchInput    () {return browser.element("#ss");}
	get searchButton () {return browser.element(".sb-searchbox__button");}

	verifyOnPage() {
		let logoHref = browser.element("#logo_no_globe_new_logo").getAttribute("src");
		logoHref.should.include("booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png");
	}

	search(cityName) {
		this.searchInput.setValue(cityName);
		this.searchButton.click();
	}

	equalArray () {
		let allAddresses = $$(".address");
		let addressesTexts = allAddresses.map(element => element.getText());
		let searchResult = addressesTexts.filter(text => text.includes("New York"));
		addressesTexts.length.should.equal(searchResult.length);
	}


	open() {
		super.open("/");	
	}
}

export default new SearchCity();