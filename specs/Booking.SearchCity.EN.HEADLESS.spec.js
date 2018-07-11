import SearchCity from "../pageobjects/Booking/search.city";

/*global browser*/

require("chai").should();

before(() => {
	SearchCity.open();
	SearchCity.verifyOnPage();
});


describe("Check all search results contain New York EN HEADLESS VERSION", () => {

	
	it("Search the city", () =>{
		browser.pause(1000);// Добавлена пауза, поскольку без нее wdio кликает на другой элемент. Видимо, не успевает отреспонсить елементы под указанное разрешение.
		SearchCity.search("New York");
	
	});

	it("Check if equal on EN VERSION", ()=>{

		SearchCity.equalArray();
        
	});
});