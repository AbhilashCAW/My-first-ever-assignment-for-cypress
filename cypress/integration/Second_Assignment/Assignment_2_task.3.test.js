/// <reference types="cypress" />

describe("Second Assignment", () => {
  it("Case 3", () => {
    let token, firstName, lastName, email;
    token =
      "hyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWZhMWI2ZjcxYjAwMTUxNzJjMWEiLCJpYXQiOjE2NTE0ODY2MjV9.1jSVQmcLu-2cIFgLt4s1aPDTEB0QEw7dXXq6ZeVjo9E";
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
      expect(response.body).have.property("firstName").to.equal(firstName);
      expect(response.body).have.property("lastName").to.equal(lastName);
      expect(response.body).have.property("email").to.equal(email);
    });
  });
});
