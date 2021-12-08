const {sequelize, DataTypes, Model} = require('./db')
class Dish extends Model {
}
Dish.init({

    Quantity: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,

}, {
    sequelize,
    timestamps: false
})
module.exports = {Dish}