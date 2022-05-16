/// <reference types="cypress" />

describe("Second Assignment", () => {
it('case 5',()=>{        
    cy.request({
        method : 'DEL',
        url : 'https://thinking-tester-contact-list.herokuapp.com/contacts/626fbaa6b6f71b0015172c1f',
        headers : {
            Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWZhMWI2ZjcxYjAwMTUxNzJjMWEiLCJpYXQiOjE2NTE0ODY2MjV9.1jSVQmcLu-2cIFgLt4s1aPDTEB0QEw7dXXq6ZeVjo9E',
        }       
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).to.contains('Contact deleted')        
        cy.request({
        method : 'GET',
        url : 'https://thinking-tester-contact-list.herokuapp.com/contacts/626fbaa6b6f71b0015172c1f',  
             headers : {
            Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYWZhMWI2ZjcxYjAwMTUxNzJjMWEiLCJpYXQiOjE2NTE0ODY2MjV9.1jSVQmcLu-2cIFgLt4s1aPDTEB0QEw7dXXq6ZeVjo9E',
        }       
    }).then((response)=>{
        expect(response.status).to.equal(404)
    }) 
    })
    })
    })