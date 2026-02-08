import Pot1 from '../assets/Pot1.webp'
import Pot1_2 from '../assets/Pot1_2.jpg'
import Pot2 from '../assets/Pot2.webp'
import Pot2_2 from '../assets/Pot2_2.webp'
import Pot3 from '../assets/Pot3.webp'
import Pot3_2 from '../assets/Pot3_2.jpg'
import Stone1 from '../assets/collections/MicaStudio_sopek_IMG_8879_3.JPG'

export const collections = [
  {
    id: 'stone',
    name: 'STONE',
    description: 'Navdihnjena s kamninami, kolekcija STONE združuje moč narave in prefinjeno obliko ročnega dela. Izdelki so oblikovani iz valjane šamotirane gline, katere zrna ustvarjajo subtilno teksturo, ki spominja na kamnine. Žgani pri 1245 °C, dosežejo robustnost in obstojnost, a hkrati ohranjajo prijetno toplino dotika. V njih se zrcali eleganca kamnin – hladna na pogled, a topla v svoji pripovedi.',
    image: Stone1,
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
