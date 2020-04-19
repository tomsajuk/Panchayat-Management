const Sequelize = require('sequelize');
const SHGModel = require('./models/shg_area');
const PeopleModel = require('./models/People');
const SHGMeetingModel = require('./models/SHG_Meeting');

/*
const sequelize = new Sequelize('shgroup', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});
*/

const sequelize = new Sequelize('mysql://tomsajuk:loAndBehold!@db4free.net:3306/shgroup');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const SHG = SHGModel(sequelize, Sequelize);
const People = PeopleModel(sequelize, Sequelize);
const SHGRecord = SHGMeetingModel(sequelize, Sequelize);

//for production
SHG.sync();
People.sync();
SHGRecord.sync();

module.exports = { SHG, People, SHGRecord }