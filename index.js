const knex = require('knex');
const config = require('./knexfile');

async function main() {
  const db = knex(config.development);
  
  console.log('Checking database connection...');
  
  try {
    await db.raw('SELECT 1');
    console.log('Database connection successful!');
    
    const migrations = await db('knex_migrations').select('*');
    console.log('\nApplied migrations:');
    migrations.forEach(m => {
      console.log(`  - ${m.name} (batch ${m.batch})`);
    });
    
    const menuCount = await db('molloyeats.menu').count('* as count').first();
    console.log(`\nMenu items in database: ${menuCount.count}`);
    
    console.log('\nDatabase setup complete and verified!');
  } catch (err) {
    console.error('Database error:', err.message);
    process.exit(1);
  } finally {
    await db.destroy();
  }
}

main();
