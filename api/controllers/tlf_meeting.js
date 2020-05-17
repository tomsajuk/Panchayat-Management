var express = require('express');
var router = express.Router();
let { TLF, ALF, SHG, TLFRecord } = require('../sequelize');
const bodyParser = require('body-parser');

var app = express();

router.post('/record/:tlf_id', function(req, res, next) {
    console.log(req.body);
    let tlf_id = req.params.tlf_id;
    let alfs = req.body.members;
    let meeting_date = req.body.meeting_date;
    alfs.forEach((member) => {
      if(member.hasOwnProperty('new')) {
          let record = member.new;
          record.meeting_date = meeting_date;
          record.alf_id = member.id;
          record.previous_corpus = parseFloat(member.corpus);
          let savings = record.savings + record.health + record.fines + record.others;
          let internal_balance = record.internal_balance;
          record.final_corpus = record.previous_corpus + savings;
          console.log(record);
          TLFRecord.create(record);
          member.savings = savings;
          member.internal_balance = internal_balance;
          member.corpus = record.final_corpus;
          delete member.new;
          delete member.leader_id;
          delete member.attendence;
          delete member.name;
          delete member.under_tlf;
          console.log(member);
          ALF.update(member, { where: {id: member.id }});
      }
    });
    let next_meeting_date = req.body.next_meeting_date;
    TLF.update({last_meeting_date:meeting_date, next_meeting_date}, {where: { id: tlf_id }});
    res.status(201);
    res.end();

});


module.exports = router;
