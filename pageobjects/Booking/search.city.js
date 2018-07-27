import Page from "../page";

/*global browser*/
/*global $$*/
/*global $*/

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
		let searchInput = $("#ss");
		let eqName = searchInput.getValue();
		eqName.should.be.equal(city);
	}

	checkInDate(checkInDate){
		let dateField = browser.getText(".sb-date-field__display");
		console.log(dateField);
		dateField[0].should.be.equal(checkInDate);
	}	

	checkOutDate(checkOutDate){
		let dateField = browser.getText(".sb-date-field__display");
		console.log(dateField);
		dateField[1].should.be.equal(checkOutDate);
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

	makeScreenshots(){
		let images =$$(".sr_item_photo");
			
		images.forEach(image => {
			let id = image.getAttribute("id");
			browser.saveElementScreenshot(`screenshots/${id}.png`, `#${id} img`, {hide :[".ribbon__extra"]});	
		});
	}

	open(locale="") {
		super.open(`/${locale}`);	
	}
}

export default new SearchCity();