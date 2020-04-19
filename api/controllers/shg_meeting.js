var express = require('express');
var router = express.Router();
let { SHG, People, SHGRecord } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.post('/record/:shg_id', function(req, res, next) {
  //console.log(req.body);
    let shg_id = req.params.shg_id;
    let members = req.body.members;
    let meeting_date = req.body.meeting_date;
    members.forEach((member) => {
      if(member.hasOwnProperty('new')) {
          let record = member.new;
          record.meeting_date = meeting_date;
          record.person_id = member.id;
          record.previous_corpus = parseInt(member.corpus);
          let savings = record.savings + record.health + record.slf + record.streenidhi + record.fines + record.others;
          let internal_balance = record.internal_balance;
          let bank_balance = record.bank_balance;
          record.final_corpus = record.previous_corpus + savings;
          console.log(record);
          SHGRecord.create(record);
          member.savings = savings;
          member.internal_balance = internal_balance;
          member.bank_balance = bank_balance;
          member.corpus = record.final_corpus;
          delete member.new;
          delete member.is_leader;
          delete member.attendence;
          delete member.name;
          delete member.shg_id;
          console.log(member);
          People.update(member, { where: {id: member.id }});
      }
    });
    let next_meeting_date = req.body.next_meeting_date;
    SHG.update({last_meeting_date:meeting_date, next_meeting_date}, {where: { id: shg_id }});
    res.status(201);
    res.end();

});


module.exports = router;
