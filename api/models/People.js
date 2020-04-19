module.exports = (sequelize, type) => {
    return sequelize.define('people', {
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
      shg_id: {
        type: type.INTEGER,
        allowNull: true   //change it later
      },
      is_leader: {
        type: type.BOOLEAN
      },
      savings: {
        type: type.DECIMAL(10,2)
      },
      internal_balance: {
        type: type.DECIMAL(10,2)
      },
      bank_balance: {
        type: type.DECIMAL(10,2)
      },
      corpus: {
        type: type.DECIMAL(10,2)
      }
    }, {
      modelName: 'people',
      timestamps: false
    });
}
