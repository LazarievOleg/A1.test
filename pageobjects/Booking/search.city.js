import Page from "../page";

/*global browser*/

require("chai").should();


class SearchCity extends Page {
	get searchInput  () {return browser.element("#ss");}
	get searchButton () {return browser.element(".sb-searchbox__button");}

	verifyOnPage() {
		let logoHref = browser.element("#logo_no_globe_new_logo").getAttribute("src");
		logoHref.should.include("booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png");
	}

	search(cityName) {
		this.searchInput.setValue(cityName);
		this.searchButton.click();
	}

	checkEqual (city){
		let t = $("#ss");
		let eqName = t.getValue();
		eqName.should.be.equal(`${city}`);
		
		let tt = browser.getText(".sb-date-field__display");
		tt[0].should.be.equal("Wednesday 10 October 2018");
		tt[1].should.be.equal("Thursday 11 October 2018");
	}

	equalArray (city) {
		let allAddresses = $$(".address");
		let addressesTexts = allAddresses.map(element => element.getText());
		let searchResult = addressesTexts.filter(text => text.includes(`${city}`));
		addressesTexts.length.should.equal(searchResult.length);
	}

	selectDate (stringDate){
		let selectingDate = new Date(stringDate);
		let time = selectingDate.getTime();
		browser.execute( (time) => document.querySelector(`[data-id="${time}"]`).click(), time);
	}

	open() {
		super.open("/");	
	}
}

export default new SearchCity();