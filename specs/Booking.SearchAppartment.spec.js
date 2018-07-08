import SearchAppartment from '../pageobjects/Booking/search.appartment'


before(() => {
  SearchAppartment.open()
  SearchAppartment.verifyOnPage()
})

describe('Search the appartment', () => {

    it('Search hotel', () =>{
      SearchAppartment.search('Hotel Pennsylvania')
      SearchAppartment.checkResult('#hotel_56423')
    });

    it ('Select hotel', () => {
      SearchAppartment.selectHotel('#hotel_56423')
      SearchAppartment.checkNewTab()
    }) 

    it.skip ('Click on Buy Button', () => {
      console.log(browser.windowHandles())
      console.log(browser.getCurrentTabId())

     browser.switchTab(browser.windowHandles().value[1]);
      console.log(browser.getCurrentTabId())
      
      SearchAppartment.buyButton.click()
      browser.getTitle()
      console.log(browser.getCurrentTabId())
      console.log(browser.windowHandle());
      SearchAppartment.pausePage(10000)

    })

 })
    


