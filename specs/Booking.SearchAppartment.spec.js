import SearchAppartment from '../pageobjects/Booking/search.appartment'

require('chai').should();

var assert = require('chai').assert

describe('Rent the appartment', () => {

    it('Open site', () => {
        SearchAppartment.open()
        browser.element('#logo_no_globe_new_logo').should.exist
    })

   it('Search "Arlo NoMad"', () =>{
       browser.element('.c-autocomplete__input .sb-searchbox__input .sb-destination__input').should.exist
       SearchAppartment.NameApp.setValue('Arlo NoMad')
       browser.click('.sb-searchbox__button')
       browser.element('#hotel_1803065').should.exist

 })
    
})  

