context('Application Breaking Bad', () => {
  describe('Accessing the character details page', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:4200/home/characters-detail/1');
      cy.location().should(loc => {
        expect(loc.href).to.eq(
          'http://localhost:4200/home/characters-detail/1'
        );
      });
    });
  });
  describe('Validating character details', function() {
    let theCharacter = {};
    beforeEach(function() {
      cy.request('https://www.breakingbadapi.com/api/characters/1').as(
        'character'
      );
      cy.get('@character').should(response => {
        theCharacter = response.body[0];
      });
    });
    it('should contain character Name on screen', function() {
      cy.get('[data-cy=name]').should($identifier => {
        expect($identifier[0].innerText).to.equal(theCharacter.name);
      });
    });
    it('should contain character Nickname on screen', function() {
      cy.get('[data-cy=nickname]').should($identifier => {
        expect($identifier[0].innerText).to.equal(theCharacter.nickname);
      });
    });
    it('should contain character Birthday on screen', function() {
      cy.get('[data-cy=birthday]').should($identifier => {
        expect($identifier[0].innerText).to.equal(theCharacter.birthday);
      });
    });
    it('should contain character Status on screen', function() {
      cy.get('[data-cy=status]').should($identifier => {
        expect($identifier[0].innerText).to.equal(theCharacter.status);
      });
    });
    it('should contain character Thumb on screen', function() {
      cy.get('[data-cy=thumb]').should($identifier => {
        expect($identifier[0].src).to.equal(theCharacter.img);
      });
    });
  });
  describe('Accessing the Characters page through the menu', function() {
    it('successfully loads Characters page', function() {
      cy.get('[data-cy=menu-characters]').click();
      cy.location().should(loc => {
        expect(loc.href).to.eq('http://localhost:4200/home/characters');
      });
    });
  });
});
