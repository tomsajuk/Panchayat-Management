module.exports = (sequelize, type) => {
    return sequelize.define('shg_meeting_record', {
      meeting_date: {
        type: type.DATE,
        allowNull: false,
        primaryKey: true
      },
      person_id: {
        type: type.INTEGER,
        allowNull: false
      },
      previous_corpus: {
        type: type.DECIMAL(10,2)
      },
      savings: {
        type: type.DECIMAL(10,2)
      },
      health: {
        type: type.DECIMAL(10,2)
      },
      slf: {
        type: type.DECIMAL(10,2)
      },
      streenidhi: {
        type: type.DECIMAL(10,2)
      },
      fines: {
        type: type.DECIMAL(10,2)
      },
      others: {
        type: type.DECIMAL(10,2)
      },
      internal_capital: {
        type: type.DECIMAL(10,2)
      },
      internal_interest: {
        type: type.DECIMAL(10,2)
      },
      internal_balance: {
        type: type.DECIMAL(10,2)
      },
      internal_overdue: {
        type: type.DECIMAL(10,2)
      },
      bank_emi: {
        type: type.DECIMAL(10,2)
      },
      bank_balance: {
        type: type.DECIMAL(10,2)
      },
      bank_overdue: {
        type: type.DECIMAL(10,2)
      },
      internal_loan_amount: {
        type: type.DECIMAL(10,2)
      },
      final_corpus: {
        type: type.DECIMAL(10,2)
      }
    }, {
      modelName: 'shg_meeting_record',
      timestamps: false
    });
}
