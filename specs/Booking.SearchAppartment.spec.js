import SearchAppartment from '../pageobjects/Booking/search.appartment'

require('chai').should();

var assert = require('chai').assert

describe('Search the appartment', () => {
	
    it('Open site', () => {
        SearchAppartment.open()
        browser.element('#logo_no_globe_new_logo').should.exist
    })

    it('Search "Hotel Pennsylvania"', () =>{

       browser.element('.c-autocomplete__input .sb-searchbox__input .sb-destination__input').should.exist
       SearchAppartment.NameApp.setValue('Hotel Pennsylvania')
       browser.click('.sb-searchbox__button')
       browser.element('#hotel_1803065').should.exist
       browser.element('span.sr-hotel__name*=Hotel Pennsylvania').element("..").click();
       browser.pause(10000)
       //browser.element('button.b-button .b-button_primary .book_now_button_handler').should.exist
     
       
 })
    
})  

