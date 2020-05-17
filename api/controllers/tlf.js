var express = require('express');
var router = express.Router();
let { TLF, ALF, SHG, People } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
  TLF.findAll().then(areas => {
    console.log("All TLF:", JSON.stringify(areas, null, 4));
    res.json(areas);
    res.status(200);
    res.end();
  });
});

router.get('/name/:tlf_id', function(req, res, next) {
    let tlf_id = parseInt(req.params.tlf_id);
  TLF.findAll({
      attributes: ['name'],
      where: { id:tlf_id }
  }).then(name => {
    console.log("Name:", JSON.stringify(name, null, 4));
    res.json(name);
    res.status(200);
    res.end();
  });
});

router.get('/name', function(req, res, next) {
  TLF.findAll({
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
    let tlf_details = {};
    tlf_details.name = req.body.name;
    tlf_details.corpus = req.body.corpus;
    let alfs = req.body.members;
    console.log(alfs);
    TLF.create(tlf_details).then(tlf => {
        console.log("TLF id ", tlf.id);
        alfs.forEach(function(alf) {
            alf.under_tlf = tlf.id;
            console.log(alf);
            ALF.create(alf).then(alf => {
                console.log("ALF created ", alf.id);
            })
        });
        res.json(tlf);
        res.status(201);
        res.end()
    });
})


module.exports = router;
