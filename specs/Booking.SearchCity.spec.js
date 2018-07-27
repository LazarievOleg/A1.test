import SearchCity from "../pageobjects/Booking/search.city";
import searchCity from "../pageobjects/Booking/search.city";

require("chai").should();

[
	{ city: "Нью-Йорк", locale: "index.ru.html", checkInDate:("среда, 10 октября 2018"), checkOutDate:("четверг, 11 октября 2018") },
	{ city: "New York", locale: "index.en-gb.html", checkInDate: "Wednesday 10 October 2018", checkOutDate:("Thursday 11 October 2018")}
].forEach(data =>  describe(`Check all search results contain ${data.city}`, () =>{


	before(() => {
		SearchCity.open(data.locale);
		SearchCity.verifyOnPage();

	});

	it(`Search the city ${data.city}`, () =>{
		
		SearchCity.search(data.city);
			
	});

	it("Select October 10-11", () =>{

		SearchCity.selectDate("Oct 10 2018 UTC");
			
	});

	it("Make screenshots of hotel images" , () =>{

		SearchCity.makeScreenshots();
		
	});

	it("Check the quantity of objects on result page", ()=>{

		SearchCity.equalArray (data.city);
	
	});

	it("Check the dates and city in destination form", () => {

		SearchCity.checkEqual(data.city);
		SearchCity.checkInDate(data.checkInDate);
		searchCity.checkOutDate(data.checkOutDate);
			
	});
})
);