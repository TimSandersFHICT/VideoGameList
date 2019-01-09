describe('Favorite Test', function() {
  it('Logs in and favorites a game', function() {
    cy.visit('http://localhost:4200/')

    cy.contains('Inloggen').click()

    cy.get('.form-control').eq(0).type('tfj.sanders@gmail.com').should('have.value', 'tfj.sanders@gmail.com')

    cy.get('.form-control').eq(1).type('password').should('have.value', 'password')

    cy.get('.btn.btn-primary.btn-block').click()

    cy.contains('Games').click()

    cy.wait(500)

    cy.get('a.btn.btn-primary').eq(0).click()

    cy.wait(500)

    cy.get('input#exampleRadios1.form-check-input').should('be.checked')

    cy.get('input#exampleRadios2.form-check-input').check().should('be.checked')

    cy.contains('Account').click()

    cy.contains('Log out').click()

    cy.get('input#exampleRadios1.form-check-input').should('not.exist')

    cy.get('input#exampleRadios2.form-check-input').should('not.exist')
  })
})
