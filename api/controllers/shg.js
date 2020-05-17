var express = require('express');
var router = express.Router();
let { SHG, People } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.get('/', function(req, res, next) {
  SHG.findAll().then(areas => {
    console.log("All users:", JSON.stringify(areas, null, 4));
    res.json(areas);
    res.status(200);
    res.end();
  });
})

router.get('/name/:shg_id', function(req, res, next) {
    let shg_id = parseInt(req.params.shg_id);
  SHG.findAll({
      attributes: ['name'],
      where: { id:shg_id }
  }).then(name => {
    console.log("Name:", JSON.stringify(name, null, 4));
    res.json(name);
    res.status(200);
    res.end();
  });
});

router.post('/create', function(req, res, next) {
    console.log(req.body);
    let shg_details = {};
    shg_details.name = req.body.name;
    shg_details.under_alf = req.body.alf_id
    shg_details.corpus = req.body.corpus;
    let members = req.body.users;
    console.log(members);
    SHG.create(shg_details).then(shg => {
        console.log("Shg id ", shg.id);
        members.forEach(function(member) {
            member.shg_id = shg.id;
            console.log(member);
            People.create(member).then(person => {
                console.log("Person created ", person.id);
            })
        });
        res.json(shg);
        res.status(201);
        res.end()
    });
});

router.get('/alf/:alf_id', function(req, res, next) {
    console.log(req.params.alf_id);
    let alf_id = parseInt(req.params.alf_id);
    console.log(alf_id);
  SHG.findAll({
      where: { under_alf: alf_id }
  }).then(shgs => {
    console.log("All SHGs:", JSON.stringify(shgs, null, 4));
    res.json(shgs);
    res.status(200);
    res.end();
  });
});


module.exports = router;
