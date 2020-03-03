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
            cy.get('[data-cy=list-character]').should(($identifier) => {
                quantScreenCharacters = $identifier.length;
            });
            expect(quantScreenCharacters).to.equal(quantApiCharacters);
        });
    });
    describe('Validating dropdown action', function () {
        it('should contain all characters', () => {
            let quantApiCharacters;
            cy.request('https://www.breakingbadapi.com/api/characters').as('characters')
            cy.wait(1000);
            cy.get('@characters').should((response) => {
                quantApiCharacters = response.body.length;
            });
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(0).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(quantApiCharacters);
            });
        });
        it('should contain 9 characters', () => {
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(1).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(9);
            });
        });
        it('should contain 15 characters', () => {
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(2).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(15);
            });
        });
        it('should contain 21 characters', () => {
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(3).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(21);
            });
        });
        it('should contain 27 characters', () => {
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(4).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(27);
            });
        });
        it('should contain 33 characters', () => {
            cy.get('[data-cy=dropdown-limit]').click();
            cy.get('[data-cy=dropdown-item]').eq(5).click();
            cy.wait(1000);
            cy.get('[data-cy=list-character]').should(($identifier) => {
                expect($identifier.length).to.equal(33);
            });
        });
    });
    describe('Accessing the Characters Detail page through the detail button', function () {
        it('successfully loads Characters Detail page', function () {
            let url, domain;
            cy.get('[data-cy=btn-detail]').eq(0).should(($identifier) => {
                domain = $identifier[0].baseURI.substring(0, ($identifier[0].baseURI.length - 1));
                url = `${domain}${$identifier[0].attributes[5].value.replace(',', '')}`;
            });
            cy.get('[data-cy=btn-detail]').eq(0).click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq(url);
            });
        });
    });
});