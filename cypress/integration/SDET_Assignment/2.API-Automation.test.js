/// <reference types="cypress" />

describe("Second Assignment", () => {
  let generatedtoken = undefined
  it("Token generation", () => {
    cy.request({
      method: "POST",
      url: "https://thinking-tester-contact-list.herokuapp.com/users",
      body: {
        firstName: "caw",
        lastName: "studios",
        email: "ghghghghgh01234@gmail.com",
        password: "myPassword",
      },
    }).then((response) => {
      JSON.stringify(response)
      generatedtoken = response.body.token
      console.log(generatedtoken)
    });
  });
  it("Case 1", () => {
    let firstName, lastName, email;
     firstName = "caw";
  lastName = "studios";
  email = "ghghghghgh01234@gmail.com";
    cy.request({
      method: "GET",
      url: "https://thinking-tester-contact-list.herokuapp.com/users/me",
      headers: {
        Authorization: generatedtoken,
      },
    }).then((response) => {
      expect(response.body).have.property("firstName").to.equal(firstName);
      expect(response.body).have.property("lastName").to.equal(lastName);
      expect(response.body).have.property("email").to.equal(email);
    });
  });
  it("Case 2", () => {
    let firstName, lastName, email;
    firstName = "caw";
    lastName = "studios";
    email = "ghghghghgh01234@gmail.com";
    cy.request({
      method: "GET",
      url: "https://thinking-tester-contact-list.herokuapp.com/users/me",
      headers: {
        Authorization: generatedtoken,
      },
    }).then((response) => {      
      expect(response.body).have.property('firstName').not.to.undefined.not.to.empty
      expect(response.body).have.property('lastName').not.to.undefined.not.to.empty
      expect(response.body).have.property('email').not.to.undefined.not.to.empty
    });
  });
  it("Case 3", () => {
    let firstName, lastName, email;
    firstName = "caw";
    lastName = "studios";
    email = "ghghghghgh01234@gmail.com";
    cy.request({
      method: "GET",
      url: "https://thinking-tester-contact-list.herokuapp.com/users/me",
      headers: {
        Authorization: generatedtoken,
      },
    }).then((response) => {
      expect(response.body).have.property("firstName").to.equal(firstName);
      expect(response.body).have.property("lastName").to.equal(lastName);
      expect(response.body).have.property("email").to.equal(email);
    });
  });
  // it("Case 4", () => {
  //   let firstName, lastName, email;
  //   firstName = "caw";
  //   lastName = "studios";
  //   email = "ghghghghgh0123@gmail.com";
  //   cy.request({
  //     method: "GET",
  //     url: "https://thinking-tester-contact-.herokuapp.com/contactsf71b0015172c1f",
  //     headers: {
  //       Authorization: generatedtoken,
  //     },
  //   }).then((response) => {      
  //     expect(respone.status).equal(200)
  //     expect(response.body).have.property("firstName").to.equal(firstName);
  //     expect(response.body).have.property("lastName").to.equal(lastName);
  //     expect(response.body).have.property("email").to.equal(email);   
  //   });
  // });
});




