import Pot1 from '../assets/Pot1.webp'
import Pot1_2 from '../assets/Pot1_2.jpg'
import Pot2 from '../assets/Pot2.webp'
import Pot2_2 from '../assets/Pot2_2.webp'
import Pot3 from '../assets/Pot3.webp'
import Pot3_2 from '../assets/Pot3_2.jpg'

export const collections = [
  {
    id: 'vaze',
    name: 'Vaze',
    description: 'Elegantne ročno izdelane vaze, ki vsakemu prostoru vdihnejo življenje.',
    image: Pot1,
    items: [
      {
        id: 1,
        name: 'Keramična vaza',
        price: '45\u20ac',
        images: [Pot1, Pot1_2],
      },
    ],
  },
  {
    id: 'sklede',
    name: 'Sklede',
    description: 'Lepo oblikovane sklede za vsakodnevno uporabo in razstavo.',
    image: Pot2,
    items: [
      {
        id: 2,
        name: 'Kameninska skleda',
        price: '30\u20ac',
        images: [Pot2, Pot2_2],
      },
    ],
  },
  {
    id: 'skodelice',
    name: 'Skodelice',
    description: 'Ročno izdelane skodelice, ustvarjene s skrbjo za vaš vsakdanji ritual.',
    image: Pot3,
    items: [
      {
        id: 3,
        name: 'Ročno izdelana skodelica',
        price: '25\u20ac',
        images: [Pot3, Pot3_2],
        care: 'very nice',
      },
    ],
  },
];
