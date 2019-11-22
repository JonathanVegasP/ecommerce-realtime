'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/User', fake => {
  return {
    name: fake.first(),
    surname: fake.last(),
    email: fake.email({ domain: 'example.com' }),
    password: 'secret'
  }
})

Factory.blueprint('App/Models/Category', fake => {
  return {
    title: fake.country({ full: true }),
    description: fake.sentence()
  }
})

Factory.blueprint('App/Models/User', fake => {
  return {
    name: fake.animal(),
    description: fake.sentence(),
    price: fake.floating({ min: 0, max: 1000, fixed: 2 })
  }
})
