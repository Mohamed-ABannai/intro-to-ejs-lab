const resturaunts = [
  {
    id: 1,
    name: 'Al Baik',
    isOpen: true,
    address: 'City Centre Road 4650, Manama',
    phone: '55509876',
    menu: [
      {
        name: 'Chicken Filtet Sandwich',
        price: .750,
        rating: 5
      },
      {
        name: 'Fish Filet Sandwich',
        price: .900,
        rating: 5
      },
      {
        name: 'Chicken Nuggets',
        price: 1.8,
        rating: 4.9
      },
        ]
  },
  {
    id: 2,
    name: "Haji's Traditional Cafe",
    isOpen: false,
    address: '150 شارع الحكومة, Manama',
    phone: '06892543',
    menu: [
      {
        name: 'Chicken Machboos',
        price: 2.2,
        rating: 4.5,
      },
            {
        name: 'Balaleet',
        price: 1.8,
        rating: 5,
      },
      {
        name: 'Cheese Omlette',
        price: .7,
        rating: 5,
      },
          ]
  },
  {
    id: 3,
    name: 'Al Jabriya Turkish Restaurant',
    isOpen: true,
    address: 'Rd No 2643, Busaiteen',
    phone: '17330108',
    menu: [
      {
        name: 'Roosy Sarookh',
        price: 1.8,
        rating: 5,
      },
      {
        name: 'Cheese Pizza',
        price: 2.5,
        rating: 3.5,
      },
      {
        name: 'French Fries',
        price: 1.2,
        rating: 4.3,
      },
        ]
  }
];

module.exports = resturaunts;