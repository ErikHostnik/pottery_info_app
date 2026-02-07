import Pot1 from '../assets/Pot1.webp'
import Pot1_2 from '../assets/Pot1_2.jpg'
import Pot2 from '../assets/Pot2.webp'
import Pot2_2 from '../assets/Pot2_2.webp'
import Pot3 from '../assets/Pot3.webp'
import Pot3_2 from '../assets/Pot3_2.jpg'

export const collections = [
  {
    id: 'vases',
    name: 'Vases',
    description: 'Elegant handcrafted vases to bring life to any space.',
    image: Pot1,
    items: [
      {
        id: 1,
        name: 'Ceramic Vase',
        price: '45\u20ac',
        images: [Pot1, Pot1_2],
      },
    ],
  },
  {
    id: 'bowls',
    name: 'Bowls',
    description: 'Beautifully shaped bowls for everyday use and display.',
    image: Pot2,
    items: [
      {
        id: 2,
        name: 'Stoneware Bowl',
        price: '30\u20ac',
        images: [Pot2, Pot2_2],
      },
    ],
  },
  {
    id: 'mugs',
    name: 'Mugs',
    description: 'Handmade mugs crafted with care for your daily ritual.',
    image: Pot3,
    items: [
      {
        id: 3,
        name: 'Handmade Mug',
        price: '25\u20ac',
        images: [Pot3, Pot3_2],
        care: 'very nice',
      },
    ],
  },
];
