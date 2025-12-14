const Menu = require('../models/menu');

class MenuServices {
  async getMenu(name = '') {
    // If name is empty, return all menu items
    if (!name) {
      return await Menu.query().select('name', 'price', 'description');
    }
    // Otherwise, filter by name or description containing the substring (case-insensitive)
    return await Menu.query()
      .select('name', 'price', 'description')
      .whereRaw('LOWER(name) LIKE ?', [`%${name.toLowerCase()}%`])
      .orWhereRaw('LOWER(description) LIKE ?', [`%${name.toLowerCase()}%`]);
  }

  async addItem(name, price, description) {
    const existing = await Menu.query()
      .whereRaw('LOWER(name) = ?', [name.toLowerCase()])
      .first();
    if (!existing) {
      return await Menu.query().insert({ name, price, description });
    }
    return false;
  }

  async removeItem(name) {
    const deletedRows = await Menu.query()
      .delete()
      .whereRaw('LOWER(name) = ?', [name.toLowerCase()]);
    return deletedRows;
  }

  async updateItem(name, price, description) {
    // Find and update (case-insensitive)
    const updatedRows = await Menu.query()
      .patch({ name, price, description })
      .whereRaw('LOWER(name) = ?', [name.toLowerCase()]);
    return updatedRows;
  }
}

module.exports = new MenuServices();
