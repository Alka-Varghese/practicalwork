describe('Order', () => {
	it('Should navigate to Order page amala here', () => {
		browser.get('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx');
            element(by.linkText('Order')).click();
            expect(title).toBe('Order')
	});	
		
});
