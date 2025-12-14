const MenuServices = require('../services/menu');

class MenuController {
  static async getMenu(req, res) {
    try {
      const { name } = req.query;
      const menu = await MenuServices.getMenu(name);
      res.json(menu);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async addItem(req, res) {
    try {
      const { name, price, description } = req.body;
      const result = await MenuServices.addItem(name, price, description);
      if (result === false) {
        return res.status(409).json({ error: 'Menu item with this name already exists.' });
      }
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async removeItem(req, res) {
    try {
      const { name } = req.body;
      const deletedRows = await MenuServices.removeItem(name);
      if (deletedRows === 0) {
        return res.status(404).json({ error: 'No menu item with that name exists.' });
      }
      res.json({ message: `${deletedRows} row(s) removed.` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateItem(req, res) {
    try {
      const { name, price, description } = req.body;
      const updatedRows = await MenuServices.updateItem(name, price, description);
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'No menu item with that name exists.' });
      }
      res.json({ message: `${updatedRows} row(s) updated.` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = MenuController;
