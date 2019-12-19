/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: false
    },
    tel:{
      type:DataTypes.CHAR(11),
      allowNull:true
    },
    wechat:{
      type:DataTypes.CHAR(20),
      allowNull:true
    },
    power:{
      type:DataTypes.INTEGER(2),
      allowNull:false
    }
  }, {
    tableName: 'user'
  });
};
