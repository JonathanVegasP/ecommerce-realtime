'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot() {
    super.boot()
    this.addHook('berforeCreate', async model => {
      model.token = await str_random(25)
      const now = new Date()
      now.setMinutes(now.getMinutes() + 30)
      model.expires_at = now
    })
  }

  static get dates() {
    return super.dates.concat(['created_at', 'updated_at', 'expires_at'])
  }
}

module.exports = PasswordReset
