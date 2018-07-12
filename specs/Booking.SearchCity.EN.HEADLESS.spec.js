import SearchCity from "../pageobjects/Booking/search.city";

/*global browser*/

require("chai").should();

describe("Check all search results contain New York EN HEADLESS VERSION", () => {

	before(() => {
		SearchCity.open();
		SearchCity.verifyOnPage();

	});

	it("Search the city", () =>{
		browser.pause(1000);// Добавлена пауза, поскольку без нее wdio кликает на другой элемент. Видимо, не успевает отреспонсить елементы под указанное разрешение.
		SearchCity.search("New York");
		browser.pause(1000)
		//browser.click(`[data-id="1531872000000"]`);
		
		SearchCity.selectDate("Oct 10 2018 UTC");

	});

	

	// it("Check if equal on EN VERSION", ()=>{

	// 	SearchCity.equalArray();
        
	// });
});