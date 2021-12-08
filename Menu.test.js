const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Menu} = require('./Menu')
const {MenuItem} = require('./Menuitem')
const {Customer} = require('./Customer')
const {Dish} = require('./Dish')

describe('Menu Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    const arrayOfMenuItem=[
        {entree_id: 20, entree_name: 'Steak',price : 19.99},
        {entree_id:  25,entree_name: 'Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Salad',price: 9.99}
    ]

    const arrayOfMenu=[
      {menu_title: 'Breakfast', menu_type: 'non-veg'},
      {menu_title: 'Lunch', menu_type: 'vegitarian'}

  ]

    const arrayOfDish=[
        {Quantity: 2,Order_date : '2021-12-01'},
        {Quantity: 1,Order_date:'2021-12-01'},
        {Quantity: 3,Order_date: '2021-12-01'}
      ]

    const arrayOfCustomer=[
        {Cust_id: 20, payment_id: 2323, food_id : 22},
        {Cust_id: 30, payment_id: 2325, food_id : 25},   
         {Cust_id: 40, payment_id: 2328, food_id : 29},
    ]

    test('Menu Items have a name', async() => {
        await MenuItem.bulkCreate(arrayOfMenuItem)
   
        const testMenuItem = await MenuItem.findOne({
            where: {
              entree_name: 'Steak',
              entree_id: 20
            }
          });
        expect(testMenuItem.entree_name).toBe('Steak')
        expect(testMenuItem.entree_id).toBe(20)
    })

    test('Menu Types Breakfast', async() => {
      await Menu.bulkCreate(arrayOfMenu)
 
      const testMenu = await Menu.findOne({
          where: {
            menu_title: 'Breakfast',
            menu_type: 'non-veg'
          }
        });
      expect(testMenu.menu_title).toBe('Breakfast')
      expect(testMenu.menu_type).toBe('non-veg')
  })

  test('Menu Types Lunch', async() => {
    await Menu.bulkCreate(arrayOfMenu)

    const testMenu = await Menu.findOne({
        where: {
          menu_title: 'Lunch',
          menu_type: 'vegitarian'
        }
      });
    expect(testMenu.menu_title).toBe('Lunch')
    expect(testMenu.menu_type).toBe('vegitarian')
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
              Quantity: 2
            }
          });
        expect(testDish.Quantity).toBe(2)
    })

})
