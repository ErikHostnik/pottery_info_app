import Pot1 from '../assets/Pot1.webp'
import Pot1_2 from '../assets/Pot1_2.jpg'
import Pot2 from '../assets/Pot2.webp'
import Pot2_2 from '../assets/Pot2_2.webp'
import Pot3 from '../assets/Pot3.webp'
import Pot3_2 from '../assets/Pot3_2.jpg'
import Stone1 from '../assets/collections/MicaStudio_sopek_IMG_8879_3.JPG'
import Nature1 from '../assets/collections/MicaStudio107_IMG_7726.JPG'

export const collections = [
  {
    id: 'stone',
    name: 'STONE',
    description: 'Navdihnjena s kamninami, kolekcija STONE zdru\u017Euje mo\u010D narave in prefinjeno obliko ro\u010Dnega dela. Izdelki so oblikovani iz valjane \u0161amotirane gline, katere zrna ustvarjajo subtilno teksturo, ki spominja na kamnine. \u017Dgani pri 1245 \u00B0C, dose\u017Eejo robustnost in obstojnost, a hkrati ohranjajo prijetno toplino dotika. V njih se zrcali eleganca kamnin \u2013 hladna na pogled, a topla v svoji pripovedi.',
    image: Stone1,
    items: [
      {
        id: 1,
        name: 'Kerami\u010Dna vaza',
        price: '45\u20ac',
        images: [Pot1, Pot1_2],
      },
    ],
  },
  {
    id: 'nature',
    name: 'NATURE',
    description: 'Kolekcija NATURE je poklon naravi \u2013 predvsem gozdu, kjer se rojevajo mir, toplina in umirjenost. Izdelki, \u017Egani pri 1245 \u00B0C, v sebi nosijo duh naravnega ravnovesja in povezanosti z ritmom gozda. Na izdelkih se pojavlja motiv praproti, ki ponazarja ne\u017Eno mo\u010D rasti, in hrasta, ki izra\u017Ea trdnost in modrost narave. Kolekcija vabi k trenutku ti\u0161ine \u2013 k stiku z naravnim, preprostim in ve\u010Dnim.',
    image: Nature1,
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
    description: 'Ro\u010Dno izdelane skodelice, ustvarjene s skrbjo za va\u0161 vsakdanji ritual.',
    image: Pot3,
    items: [
      {
        id: 3,
        name: 'Ro\u010Dno izdelana skodelica',
        price: '25\u20ac',
        images: [Pot3, Pot3_2],
        care: 'very nice',
      },
    ],
  },
];
