var express = require('express');
var router = express.Router();
let { ALF, SHG, ALFRecord } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.post('/record/:alf_id', function(req, res, next) {
    console.log(req.body);
    let alf_id = req.params.alf_id;
    let shgs = req.body.members;
    let meeting_date = req.body.meeting_date;
    shgs.forEach((member) => {
      if(member.hasOwnProperty('new')) {
          let record = member.new;
          record.meeting_date = meeting_date;
          record.shg_id = member.id;
          record.previous_corpus = parseFloat(member.corpus);
          let savings = record.savings + record.health + record.streenidhi + record.fines + record.others;
          let internal_balance = record.internal_balance;
          let bank_balance = record.bank_balance;
          record.final_corpus = record.previous_corpus + savings;
          console.log(record);
          ALFRecord.create(record);
          member.savings = savings;
          member.internal_balance = internal_balance;
          member.bank_balance = bank_balance;
          member.corpus = record.final_corpus;
          delete member.new;
          delete member.leader_id;
          delete member.attendence;
          delete member.name;
          delete member.under_alf;
          console.log(member);
          SHG.update(member, { where: {id: member.id }});
      }
    });
    let next_meeting_date = req.body.next_meeting_date;
    ALF.update({last_meeting_date:meeting_date, next_meeting_date}, {where: { id: alf_id }});
    res.status(201);
    res.end();

});


module.exports = router;
