const {sequelize, DataTypes, Model} = require('./db')
class Dish extends Model {
}
Dish.init({
    Order_id: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,
    Cust_id: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})
module.exports = {Dish}