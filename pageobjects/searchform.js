/*global browser*/

class SearchForm {
	get searchInput () {return browser.element("#ss");}
	get searchButton () {return browser.element (".sb-searchbox__button");}
}

export default new SearchForm();
