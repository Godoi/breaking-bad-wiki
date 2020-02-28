context('Application Breaking Bad', () => {
    describe('Accessing the Character Page', function () {
        it('successfully loads', function () {
            cy.visit('http://localhost:4200/home/characters');
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://localhost:4200/home/characters')
            });
        });
    });
    describe('GET api characters', function () {
        it('should call the GET api characters and validate the number of items on the screen', () => {
            let quantApiCharacters;
            let quantScreenCharacters;
            cy.request('https://www.breakingbadapi.com/api/characters').as('characters')
            cy.wait(1000);
            cy.get('@characters').should((response) => {
                quantApiCharacters = response.body.length;
            });
            cy.get('.characters')
                .find('.col-md-4')
                .should(($identifier) => {
                    quantScreenCharacters = $identifier.length;
                });
            expect(quantScreenCharacters).to.equal(quantApiCharacters);
        });
    });
    describe('Validating dropdown action', function () {
        it('should contain 9 characters', () => {
            cy.get('.dropdown button').eq(0).click();
            cy.get('.dropdown-item').eq(1).click();
            cy.wait(1000);
            cy.get('.characters')
                .find('.col-md-4')
                .should(($identifier) => {
                    expect($identifier.length).to.equal(9);
                });
        });
    });
});