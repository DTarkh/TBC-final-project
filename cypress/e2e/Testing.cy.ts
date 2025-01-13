// გამოიყენეთ cypress და დაწერეთ end 2 end ტესტები შემდეგი ფუნქციონალებისთვის:
// რეგისტრაცია (გათიშეთ მეილით ვერიფიკაცია, სხვანაირად არ გამოვა)
// დალოგინება
// დალოგაუთება
// ახალი პროდუქტის დამატება
// პროდუქტის წაშლა
// პროდუქტის შეძენა
// პროდუქტის შეძენის შემდეგ შესყიდვების სიაში დამატება.

// describe('Auth', () => {
  

//   it('Register', () => {
//     const randomEmail = ⁠ user${Date.now()}@test.com ⁠;
//     const password = 'password123';

    
//     cy.visit('/en/sign-in')
//     cy.get('a').contains('Sign Up').click()
//     cy.url().should("include", "en/sign-up")
//     cy.get('input[name="email"]').type(randomEmail)
//     cy.get('input[name="password"]').type(password)
//     cy.get('button').contains('Submit').click()
//     cy.wait(2000);
//     cy.url().should("include", "en/sign-in")
//   })

//   it('Logs in', () => {
//     cy.visit('/en/sign-in')
//     cy.get('input[name="email"]').type('datotarkh@gmail.com')
//     cy.get('input[name="password"]').type('dato1234')
//     cy.get('button').contains('Submit').click()
//     cy.wait(2000);
//     cy.url().should("include", "en/home")
//   })

//   it('Logs out', () => {
//     cy.visit('/en/sign-in')
//     cy.get('input[name="email"]').type('datotarkh@gmail.com')
//     cy.get('input[name="password"]').type('dato1234')
//     cy.get('button').contains('Submit').click()
//     cy.get('[name="profile"]', { timeout: 20000 }).click();
//     cy.contains('li', 'Logout').click();

//     cy.url().should("include", "en/sign-in")
//   })

// })

describe('Product Actions', () => {
  // it('Add Product to cart', () => {
    
  //   cy.visit('/en/sign-in')
  //     cy.get('input[name="email"]').type('datotarkh@gmail.com')
  //     cy.get('input[name="password"]').type('dato1234')
  //     cy.get('button').contains('Submit').click()

  //     cy.wait(2000);
  //     cy.url().should("include", "en/home")
  //     cy.visit('/en/store')
  
  //     cy.get('button').contains('Add to Cart').first() .trigger('mouseover').wait(500).click()
    
  //     cy.get('[name="cart"]', { timeout: 20000 }).click();
  //     cy.get('button').contains('View Cart').click()
  //   })


    // it('Delete Product From cart', () => {
    
    //   cy.visit('/en/sign-in')
    //     cy.get('input[name="email"]').type('datotarkh@gmail.com')
    //     cy.get('input[name="password"]').type('dato1234')
    //     cy.get('button').contains('Submit').click()
    //     cy.wait(2000);
    //     cy.url().should("include", "en/home")
    //     cy.visit('/en/store')
    //     cy.get('button').contains('Add to Cart').first() .trigger('mouseover').wait(500).click()
    //     cy.get('[name="cart"]').click();
    //     cy.get('button').contains('View Cart').click()
    //     cy.get('button').contains('Delete').click()
    //   })

    it('Buy Product From cart', () => {
    
      cy.visit('/en/sign-in')
        cy.get('input[name="email"]').type('datotarkh@gmail.com')
        cy.get('input[name="password"]').type('dato1234')
        cy.get('button').contains('Submit').click()
        cy.wait(4000);
        cy.url().should("include", "en/home")
        cy.visit('/en/store')
        cy.get('button').contains('Add to Cart').first() .trigger('mouseover').wait(500).click()
        cy.get('[name="cart"]').click();
        cy.get('button').contains('View Cart').click()
        cy.get('button').contains('Checkout').click()
        cy.wait(2000);
        // cy.url().should("include", "stripe")
      })
  
  })