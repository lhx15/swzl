/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cate', {
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(10),
      allowNull: false
    }
  }, {
    tableName: 'cate'
  });
};
