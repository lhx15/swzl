/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes,type) {
  const user = sequelize.define('user', {
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
  const cate = sequelize.define('cate', {
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
   const goods = sequelize.define('goods', {
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    cate2: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    date:{
      type:DataTypes.CHAR(13),
      allowNull:false
    },
    detail:{
      type:DataTypes.CHAR(255),
      allowNull:true
    },
    place:{
      type:DataTypes.CHAR(20),
      allowNull:true
    },
    img:{
      type:DataTypes.CHAR(50),
      allowNull:true
    },
    cate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'goods'
  });
  user.hasMany(goods,{foreignKey:'user_id'})
  goods.belongsTo(user,{foreignKey:'user_id'})
  cate.hasMany(goods,{foreignKey:'cate_id'})
  goods.belongsTo(cate,{foreignKey:'cate_id'})

  switch(type){
    case 1:return user;
    case 2:return cate;
    case 3:return goods;
  }
};
