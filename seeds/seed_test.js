const fs = require('fs');
const path = require('path');


exports.seed = async function(knex) {
  const menuData = JSON.parse(fs.readFileSync(path.join(__dirname, 'menu.json'), 'utf8'));
  
  await knex('molloyeats.menu').del();
  await knex('molloyeats.menu').insert(menuData);
};
