module.exports = (sequelize, type) => {
    return sequelize.define('alf_details', {
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
      under_tlf: {
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
        savings: {
          type: type.DECIMAL(10,2)
        },
        internal_balance: {
          type: type.DECIMAL(10,2)
      },
      corpus: {
          type: type.DECIMAL(10,2)
      }
    }, {
      modelName: 'alf_details',
      timestamps: false
    });
}
