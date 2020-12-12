export const foodItems = [
  {
    name: 'Pizza Tranca',
    img: 'img/pizza1.jpg',
    section: 'Pizzas',
    price: 100,
  },
  {
    name: 'Pizza Mix',
    img: 'img/pizza2.jpg',
    section: 'Pizzas',
    price: 100,
  },
  {
    name: 'Burger Zarpada',
    img: 'img/burger1.jpg',
    section: 'Burgers',
    price: 100,
  },
  {
    name: 'Burger en la pera',
    img: 'img/burger2.jpg',
    section: 'Burgers',
    price: 100,
  },
  {
    name: 'Sambuchito 1',
    img: 'img/sanbu1.jpg',
    section: 'Sambuchitos',
    price: 100,
  },
  {
    name: 'Sambuchito 2',
    img: 'img/sanbu2.jpg',
    section: 'Sambuchitos',
    price: 100,
  },
];

export const arraySections = [
  {
    section: 'Pizzas',
    imgTag: 'img/tag_pizza.jpeg',
  },

  {
    section: 'Burgers',
    imgTag: 'img/tag_burger.jpeg',
  },

  {
    section: 'Sambuchitos',
    imgTag: 'img/tag_sambu.jpeg',
  },
];

export const Foods = foodItems.reduce((acc, food) => {
  if (!acc[food.section]) {
    // !acc['Pizza']
    acc[food.section] = [];
  }
  acc[food.section] = [...acc[food.section], food];
  return acc;
}, {});

// {
//     Pizzas:[  {
//         name: 'Pizza Tranca',
//         img: 'img/pizza1.jpg',
//         section: 'Pizzas',
//         price: 100,
//       },
//       {
//         name: 'Pizza Mix',
//         img: 'img/pizza2.jpg',
//         section: 'Pizzas',
//         price: 100,
//       }],
//       Burgers:[  {
//         name: 'Burger Zarpada',
//         img: 'img/burger1.jpg',
//         section: 'Burgers',
//         price: 100,
//       },
//       {
//         name: 'Burger en la pera',
//         img: 'img/burger2.jpg',
//         section: 'Burgers',
//         price: 100,
//       }],
//       Sambuchitos:[ {
//         name: 'Sambuchito 1',
//         img: 'img/sanbu1.jpg',
//         section: 'Sambuchitos',
//         price: 100,
//       },
//       {
//         name: 'Sambuchito 2',
//         img: 'img/sanbu2.jpg',
//         section: 'Sambuchitos',
//         price: 100,
//       },]

// }
