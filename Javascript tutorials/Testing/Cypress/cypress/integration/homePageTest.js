describe('Test home page', () => {
    it('Visits homepage successfully', () => {
      // given
      let url = 'http://127.0.0.1:5500/cypress/app'
      // when / then
      cy.visit(url)
    })
    it('Homepage contains the greeting message', () => {
      // given
      let url = 'http://127.0.0.1:5500/cypress/app'
      // when
      cy.visit(url)
      // then
      cy.contains('Hello world!')
    })
    it('Enters the name and presses the button, receiving the hello message', () => {
      // given
      let url = 'http://127.0.0.1:5500/cypress/app'
      // when
      cy.visit(url)
      cy.get('#name_input').type('Andriau')
      cy.get('button').click() 

      // then
      cy.contains('Labas Andriau!')
      
    })
  })
