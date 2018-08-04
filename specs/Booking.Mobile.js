import Checkmobile from "../pageobjects/Booking/check.mobile";

require("chai").should();

describe("Check mobile version open", () => {

	it("Verify mobile logo ", () => {
		Checkmobile.open();
		
		Checkmobile.verifyOnPage();
		
	});
});