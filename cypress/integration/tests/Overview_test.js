describe('My Login Test', function() {
  it('Goes to the overview page and select the first game', function() {
    cy.visit('http://localhost:4200/')

    cy.contains('Games').click()

    cy.get('a.btn.btn-primary').eq(0).click()

    cy.wait(1000)

    cy.url().should('include', '/game/1')

    cy.get('a.btn.btn-primary').click()

    cy.contains('Home').click()

  })
})
