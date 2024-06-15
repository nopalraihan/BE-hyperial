/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcryptjs');
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'user1', password: bcrypt.hashSync('password1', 8), role: 'user' },
    { id: 2, username: 'admin1', password: bcrypt.hashSync('password2', 8), role: 'admin' },
    { id: 3, username: 'superadmin1', password: bcrypt.hashSync('password3', 8), role: 'superadmin' }
  ]);
};
