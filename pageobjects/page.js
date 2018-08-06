/*global browser*/

export default class Page {
	constructor() {
		this.title = "My Page";
	}

	open(path) {
		browser.url(path);
	}

	verifyOnPage() {
		let logoHref = browser.element("#logo_no_globe_new_logo").getAttribute("src");
		logoHref.should.include("booking_logo_retina/22615963add19ac6b6d715a97c8d477e8b95b7ea.png");
	}

	pausePage(milliseconds) {
		browser.pause(milliseconds);
	}

	checkNewTab() {
		let handles = browser.windowHandles().value;
		handles.length.should.equal(2);
		handles[0].should.equal(browser.getCurrentTabId());
	}

}
