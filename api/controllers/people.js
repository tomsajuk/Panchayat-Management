var express = require('express');
var router = express.Router();
let { People } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.get('/shg/:shg_id', function(req, res, next) {
    console.log(req.params.shg_id);
    let shg_id = parseInt(req.params.shg_id);
    console.log(shg_id);
  People.findAll({
      where: { shg_id: shg_id }
  }).then(persons => {
    console.log("All persons:", JSON.stringify(persons, null, 4));
    res.json(persons);
    res.status(200);
    res.end();
  });
});


module.exports = router;
