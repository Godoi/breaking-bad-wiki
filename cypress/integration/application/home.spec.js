context('Application Breaking Bad', () => {
    describe('Accessing The Home Page', function () {
        it('successfully loads', function () {
            cy.visit('http://localhost:4200/');
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://localhost:4200/home')
            });
        });
    });
    describe('Accessing the Characters page through the main page button', function () {
        it('successfully loads Characters page', function () {
            cy.visit('http://localhost:4200/');
            cy.get('[data-cy=btn-all-characters]').click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://localhost:4200/home/characters')
            });
        });
    });
    describe('Accessing the Characters page through the main page menu', function () {
        it('successfully loads Characters page', function () {
            cy.visit('http://localhost:4200/');
            cy.get('[data-cy=menu-characters]').click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://localhost:4200/home/characters')
            });
        });
    });
});