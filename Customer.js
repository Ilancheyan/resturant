const {sequelize, DataTypes, Model} = require('./db')
//create model for musicians in our database
class Customer extends Model {
//add query methods here
}
//create attributes for model using init method
Customer.init({
 
    Cust_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Customer}