class BasePage {
    static loadHomePage (){
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number){
        cy.wait(number)
    }
}

class HomePage  extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }
}


describe('Abstraction with Classes', () => {
    before(function() {
        //runs beafore describe 
        HomePage.loadHomePage()

    })

    after(function() {
        HomePage.loadHomePage()
    })

    beforeEach(function(){
        //runs before it block

    })

    afterEach(function(){

    })

    it.skip('Should scroll up and down 1', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
    })

    it('Should scroll up and down 2', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
    })
})