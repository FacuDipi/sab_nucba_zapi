export const foodItems = [
  {
    id: 1,
    name: 'Pizza Tranca',
    img: 'img/pizza1.jpg',
    section: 'Pizzas',
    description:
      'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100,
  },
  {
    id: 2,
    name: 'Pizza Mix',
    img: 'img/pizza2.jpg',
    section: 'Pizzas',
    description:
      'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100,
  },
  {
    id: 3,
    name: 'Pizza Mix',
    img: 'img/pizza2.jpg',
    section: 'Pizzas',
    description:
      'Pizza casera a la piedra, muzzarella, jamón, morrón asado, huevo.',
    price: 100,
  },
  {
    id: 4,
    name: 'Burger Zarpada',
    img: 'img/burger1.jpg',
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100,
  },
  {
    id: 5,
    name: 'Burger en la pera',
    img: 'img/burger2.jpg',
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100,
  },
  {
    id: 6,
    name: 'Burger Zarpada',
    img: 'img/burger1.jpg',
    section: 'Burgers',
    description:
      'Hamburguesa de asado de 180g, mostaza dulce, cebolla caramelizada, cheddar, aros de cebolla, papas fritas.',
    price: 100,
  },
  {
    id: 7,
    name: 'Sambuchito 1',
    img: 'img/sanbu1.jpg',
    section: 'Sambuchitos',
    description:
      'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
    price: 100,
  },
  {
    id: 8,
    name: 'Sambuchito 2',
    img: 'img/sanbu2.jpg',
    section: 'Sambuchitos',
    description:
      'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
    price: 100,
  },
  {
    id: 9,
    name: 'Sambuchito 1',
    img: 'img/sanbu1.jpg',
    section: 'Sambuchitos',
    description:
      'Sándwich de milanesa carne o pollo lechuga, tomate, jamón, queso, huevo frito; con papas fritas.',
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
