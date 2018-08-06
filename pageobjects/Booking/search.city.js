import Page from "../page";
import SearchForm from "../searchform";
/*global browser*/
/*global $$*/
/*global $*/

require("chai").should();

class SearchCity extends Page {

	search(cityName) {
		SearchForm.searchInput.setValue(cityName);
		SearchForm.searchButton.click();
	}

	checkEqual (city){
		let searchInput = $("#ss");
		let eqName = searchInput.getValue();
		eqName.should.be.equal(city);
	}

	checkInDate(checkInDate){
		let dateField = browser.getText(".sb-date-field__display");
		dateField[0].should.be.equal(checkInDate);
	}	

	checkOutDate(checkOutDate){
		let dateField = browser.getText(".sb-date-field__display");
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
			browser.saveElementScreenshot(`screenshots/${id}.png`, `#${id} img`, {remove :[".ribbon__extra"]});	
		});
	}

	open(locale="") {
		super.open(`/${locale}`);	
	}
}

export default new SearchCity();