var express = require('express');
var router = express.Router();
let { ALF, People } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
  ALF.findAll().then(areas => {
    console.log("All ALF:", JSON.stringify(areas, null, 4));
    res.json(areas);
    res.status(200);
    res.end();
  });
});

router.get('/name/:alf_id', function(req, res, next) {
    let alf_id = parseInt(req.params.alf_id);
  ALF.findAll({
      attributes: ['name'],
      where: { id:alf_id }
  }).then(name => {
    console.log("Name:", JSON.stringify(name, null, 4));
    res.json(name);
    res.status(200);
    res.end();
  });
});

router.get('/name', function(req, res, next) {
  ALF.findAll({
      attributes: ['id','name']
  }).then(name => {
    console.log("Name:", JSON.stringify(name, null, 4));
    res.json(name);
    res.status(200);
    res.end();
  });
});

router.post('/create', function(req, res, next) {
    console.log(req.body);
    let alf_details = {};
    alf_details.name = req.body.name;
    alf_details.corpus = req.body.corpus;
    let shgs = req.body.shgs;
    console.log(members);
    ALF.create(alf_details).then(alf => {
        console.log("ALF id ", alf.id);
        shgs.forEach(function(shg) {
            shg.shg_id = alf.id;
            console.log(shg);
            SHG.create(shg).then(shg => {
                console.log("SHG created ", SHG.id);
            })
        });
        res.json(alf);
        res.status(201);
        res.end()
    });
})


module.exports = router;
