var app = require('../server');
var db = app.get('db');

module.exports = {
    getAllAnimals: function(req, res) {
      db.get_all_animals(function(err, animals) {
        if (err) {
          res.status(402).json(err);
        } else {
        res.status(200).json(animals);
      }
    });
  },
  createAnimal: function(req, res) {
    db.post_an_animal([req.body.name, req.body.limbs, req.body.tail, req.body.habitat], function(err) {
      if (err) {
        res.status(402).json("Something went wrong");
      } else {
        res.status(200).json("Success!");
      }
    });
  }
};
