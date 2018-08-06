/*global browser*/
export default class PageMobile {
	verifyOnPage() {
		let logoHref = browser.element(".-logos-booking-logo-inv").getAttribute("title");
		logoHref.should.include("Booking.com");}
        
	open(path) {
		browser.url(path);
	}       
}