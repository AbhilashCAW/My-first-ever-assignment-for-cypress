/// <reference types="cypress" />

describe("Second Assignment", () => {
  it("Case 2", () => {
    let token, firstName, lastName, email;
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWZhMWI2ZjcxYjAwMTUxNzJjMWEiLCJpYXQiOjE2NTE0ODY2MjV9.1jSVQmcLu-2cIFgLt4s1aPDTEB0QEw7dXXq6ZeVjo9E";
    firstName = "Abhi";
    lastName = "bommakanti";
    email = "a@yopmail.com";
    cy.request({
      method: "GET",
      url: "https://thinking-tester-contact-list.herokuapp.com/users/me",
      headers: {
        Authorization: token,
      },
    }).then((response) => {      
      expect(response.body).have.property('firstName').not.to.undefined.not.to.empty
      expect(response.body).have.property('lastName').not.to.undefined.not.to.empty
      expect(response.body).have.property('email').not.to.undefined.not.to.empty
    });
  });
});
