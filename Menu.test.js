const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Menu} = require('./Menu')
const {Customer} = require('./Customer')
const {Dish} = require('./Dish')

describe('Menu Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    const arrayOfMenulist=[
        {entree_id: 20, entree_name: 'Steak',price : 19.99},
        {entree_id:  25,entree_name: 'Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Salad',price: 9.99}
    ]

    const arrayOfDish=[
        {Order_id: 1001, Quantity: 2,Order_date : '2021-12-01',Cust_id:101},
        {Order_id: 1002,Quantity: 1,Order_date:'2021-12-01',Cust_id:111},
        {Order_id: 1003, Quantity: 1,Order_date: '2021-12-01',Cust_id:125}
      ]

    const arrayOfCustomer=[
        {Cust_id: 20, payment_id: 2323, food_id : 22},
        {Cust_id: 30, payment_id: 2325, food_id : 25},   
         {Cust_id: 40, payment_id: 2328, food_id : 29},
    ]

    test('Menu has items', async() => {
        await Menu.bulkCreate(arrayOfMenulist)
   
        const testMenu = await Menu.findOne({
            where: {
              entree_name: 'Steak'
            }
          });
        expect(testMenu.entree_name).toBe('Steak')
    })
    test('Customer table', async() => {
        await Customer.bulkCreate(arrayOfCustomer)

        const testCustomer = await Customer.findOne({
            where: {
              Cust_id: 20
            }
          });
        expect(testCustomer.Cust_id).toBe(20)
    })
    test('Dish table', async() => {
        await Dish.bulkCreate(arrayOfDish)
 
        const testDish = await Dish.findOne({
            where: {
              Cust_id: 101
            }
          });
        expect(testDish.Cust_id).toBe(101)
    })

})
