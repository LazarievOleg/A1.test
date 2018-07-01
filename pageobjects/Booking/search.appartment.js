import Page from '../page';

class SearchAppartment extends Page {
	get NameApp() {return browser.element('#ss');}
	
	open(){

		super.open('/')
	}
}

export default new SearchAppartment()