const Joi = require('joi');
const MenuController = require('../controllers/menu');

module.exports = (app) => {
  app.get('/menu', async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().optional()
    });

    const { error } = schema.validate(req.query);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    await MenuController.getMenu(req, res);
  });

  app.post('/menu/add', async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().optional()
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    await MenuController.addItem(req, res);
  });

  app.delete('/menu/remove', async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    await MenuController.removeItem(req, res);
  });

  app.put('/menu/update', async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().optional()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    await MenuController.updateItem(req, res);
  });
};