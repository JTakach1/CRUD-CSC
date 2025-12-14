# Database Migrations Project

## Overview
This is a Knex.js database migration project for managing PostgreSQL database schema changes.

## Project Structure
- `knexfile.js` - Knex configuration (uses DATABASE_URL environment variable)
- `migrations/` - Database migration files
- `index.js` - Database connection verification script

## Available Commands
- `npm run migrate` - Run all pending migrations
- `npm run migrate:rollback` - Rollback the last batch of migrations
- `npm run migrate:make <name>` - Create a new migration file
- `npm run check` - Verify database connection and migration status

## Database
Uses PostgreSQL via the DATABASE_URL environment variable provided by Replit.

### Schema
- `molloyeats` schema
  - `menu` table (id, name, description, price)

## Recent Changes
- 2025-01-14: Initial setup with Replit PostgreSQL database
