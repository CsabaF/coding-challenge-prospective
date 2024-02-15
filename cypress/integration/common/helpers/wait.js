export const waitForAllXhrRequests = () => {
	cy.log("Step--------------waiting for all xhr requests")
	cy.window().then(
		{
			timeout: 120000,
		},
		win => new Cypress.Promise(resolve => win.requestIdleCallback(resolve)),
	)
}
