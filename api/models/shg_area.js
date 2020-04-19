module.exports = (sequelize, type) => {
    return sequelize.define('shg_details', {
      id: {
        type: type.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: type.STRING,
        allowNull: false
      },
      under_alf: {
        type: type.INTEGER,
        allowNull: true   //change it later
      },
      leader_id: {
        type: type.INTEGER
      },
      last_meeting_date: {
        type: type.DATE
      },
      next_meeting_date: {
        type: type.DATE
        },
      corpus: {
          type: type.FLOAT
      }
    }, {
      modelName: 'shg_details',
      timestamps: false
    });
}
