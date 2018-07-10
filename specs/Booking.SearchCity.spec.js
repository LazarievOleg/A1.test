import SearchCity from "../pageobjects/Booking/search.city";

require("chai").should();

before(() => {
	SearchCity.open();
	SearchCity.verifyOnPage();
});


describe("Check all search results contain New York", () => {

	it("Search the city", () =>{
		SearchCity.search("New York");
	
	});

	it("Check if equal ", ()=>{

		let allAddresses = $$(".address");
		let addressesTexts = allAddresses.map(element => element.getText());
		let searchResult = addressesTexts.filter(text => text.includes("Нью-Йорк"));
		addressesTexts.length.should.equal(searchResult.length);
        
	});
});