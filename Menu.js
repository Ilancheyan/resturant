const {sequelize, DataTypes, Model} = require('./db')
//create model for musicians in our database
class Menu extends Model {
//add query methods here
}
//create attributes for model using init method
Menu.init({
  //  name: DataTypes.STRING,
    
  menu_title: DataTypes.STRING,  
  menu_type: DataTypes.STRING,  
    
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Menu}