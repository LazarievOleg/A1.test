import SearchCity from "../pageobjects/Booking/search.city";

require("chai").should();

["Нью-Йорк", "New York"].forEach(
	city => describe(`Check all search results contain ${city}`, () => {

		before(() => {
			SearchCity.open();
			SearchCity.verifyOnPage();

		});

		it(`Search the city ${city}`, () =>{
		
			SearchCity.search(city);
			
		});

		it("Select October 10-11", () =>{

			SearchCity.selectDate("Oct 10 2018 UTC");

		});

		it ("Check the equality of objects on result page", ()=>{

			SearchCity.equalArray (`${city}`);
		
		});

		it("Check the dates and city in destination form", () => {

			SearchCity.checkEqual(`${city}`);

		});
	})
);