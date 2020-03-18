const pages = ["http://example.com"]

const sizes = ["iphone-6", "ipad-2", [1200,800]]

describe('Visual Regression', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()

            })
        })
    })
})

describe('signle element snapshot', () => {
    it('should match single element', () => {
        cy.visit('http://example.com')
        cy.get('h1').matchImageSnapshot({
            failureTreshold: 10.0,
            failureTresholdType: 'pixels'
        })
    })
})