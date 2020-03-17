describe('Browser Actions', ()=>{
    it('Should Load Correct URL', ()=>{
        cy.visit('http://example.com/',{timeout: 10000})
    })

    it('Should check correct url', ()=>{
        cy.url().should('include', 'example.com')
    })

    it('Should cwait for 3 seconds', ()=>{
        cy.wait(3000)
    })

    it('Should check correct element on the page', ()=>{
        cy.get('h1').should('be.visible')
    })

})