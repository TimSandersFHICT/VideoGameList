describe('My Login Test', function() {
  it('Visits homepage, logs in & out', function() {
    cy.visit('http://localhost:4200/')

    cy.contains('Inloggen').click()

    cy.get('.form-control').eq(0).type('tfj.sanders@gmail.com').should('have.value', 'tfj.sanders@gmail.com')

    cy.get('.form-control').eq(1).type('password').should('have.value', 'password')

    cy.get('.btn.btn-primary.btn-block').click()

    cy.contains('Account').click()

    cy.contains('Log out').click()
  })
})
