'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage_Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_Event.init({
    stage_events_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: {
          tableName: 'stages'
        },
        key: 'stage_id'
      },
      allowNull: false
    },
    event_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: {
          tableName: 'events'
        },
        key: 'event_id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage_Event',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_Event;
};