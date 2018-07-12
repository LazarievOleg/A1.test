import SearchCity from "../pageobjects/Booking/search.city";

require("chai").should();

describe.skip("Check all search results contain New York RU VERSION", () => {

	before(() => {
		SearchCity.open();
		SearchCity.verifyOnPage();
	});

	it("Search the city", () =>{
	
		SearchCity.search("New York");
	
	});

	it("Check if equal on RU VERSION", ()=>{

		let allAddresses = $$(".address");
		let addressesTexts = allAddresses.map(element => element.getText());
		let searchResult = addressesTexts.filter(text => text.includes("Нью-Йорк"));
		addressesTexts.length.should.equal(searchResult.length);
        
	});
});