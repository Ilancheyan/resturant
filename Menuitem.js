const {sequelize, DataTypes, Model} = require('./db')
//create model for musicians in our database
class MenuItem extends Model {
//add query methods here
}
//create attributes for model using init method
MenuItem.init({
  //  name: DataTypes.STRING,
    entree_id: DataTypes.INTEGER,
    entree_name: DataTypes.STRING,
    price: DataTypes.FLOAT
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {MenuItem}