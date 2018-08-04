import Page from "../page";
/*global browser*/
class Checkmobile extends Page {

	verifyOnPage() {
		let logoHref = browser.element(".-logos-booking-logo-inv").getAttribute("title");
		logoHref.should.include("Booking.com");
	} 					


	open() {
		super.open("/");	
	}
}

export default new Checkmobile();