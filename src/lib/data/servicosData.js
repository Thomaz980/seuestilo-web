import SComfort from "$img/calcados/comfort.jpg";
import SCouro from "$img/calcados/couro.jpg";
import SMule from "$img/calcados/mule.jpg";
import SMule2 from "$img/calcados/mule2.jpg";
import CJens from "$img/calcas/jeansAzul.png";
import CJens2 from "$img/calcas/jeansEscuro.png";
import CTexturizada1 from "$img/camisas/texturizadas1.jpg";
import Polo1 from "$img/camisas/polo1.jpg";
import Cuecas from "$img/cuecas/cuecas1.jpg";
import Cuecas2 from "$img/cuecas/boss.jpg";

// ------ BERMUDAS ALFAITARIA ----- // 
import B01 from "$img/bermudas/photo-output 2.jpg"; 
import B02 from "$img/bermudas/ba-preta.png"; 
import B03 from "$img/bermudas/ba-bege.png"; 
import B04 from "$img/bermudas/ba-marrom.png"; 
import B05 from "$img/bermudas/ba-cinza.png"; 
import B06 from "$img/bermudas/ba-azul.png"; 

// ------ BERMUDAS LINHO----- // 
import B07 from "$img/bermudas/FullSizeRender.jpg";

// ------ BERMUDAS MAURICINHO ----- // 
import MauricinhoSarja1 from "$img/bermudas/mSarga1.jpg";
import MauricinhoSarja2 from "$img/bermudas/mSarga2.jpeg";

export const servicos = [
  {
    id: 1,
    image: B01,
    text: "Bermudas em Alfaiataria",
    type: "Bermudas",
    descricao: "A bermuda de alfaiataria é a escolha perfeita para quem busca unir conforto, elegância e versatilidade.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["F2EDEA", "3A3436", "E0C4B6", "948067", "85858D", "3E445C"],
      "Img": [B01, B02, B03, B04, B05, B06],
    },
    valor: "R$ __,__",
  },
  {
    id: 2,
    image: B07,
    text: "Bermudas Linho",
    type: "Bermudas",
    descricao: "Descubra o equilíbrio perfeito entre frescor e sofisticação com nossa bermuda de linho. Confeccionada em tecido natural, leve e respirável, ela é ideal para os dias quentes em que o conforto é essencial, sem abrir mão do estilo.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["A45E4A"],
      "Img": [B07],
    },
    valor: "R$ __,__",
  },
  {
    id: 3,
    image: Polo1,
    text: "Camisas Polo",
    type: "Camisas",
    descricao: "A camisa polo é um clássico que nunca sai de moda. Com seu design atemporal e versátil, ela é perfeita para diversas ocasiões, desde um passeio casual até um evento mais formal.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["245630"],
      "Img": [Polo1],
    },
    valor: "R$ __,__",
  },
  {
    id: 4,
    image: CTexturizada1,
    text: "Camisas Texturizadas",
    type: "Camisas",
    descricao: "A camisa texturizada é a escolha ideal para quem busca um toque de sofisticação e um visual único. Com padrões e acabamentos que conferem personalidade à peça, ela traz um ar contemporâneo e estiloso.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["CADA99"],
      "Img": [CTexturizada1],
    },
    valor: "R$ __,__",
  },
  {
    id: 5,
    image: SCouro,
    text: "Couro Nobre",
    type: "Calçados",
    descricao: "Feitos para quem aprecia o verdadeiro significado do requinte, os Calçados em Couro Nobre unem sofisticação, resistência e conforto em uma peça atemporal. ",
    options: {
      "Tamanho": ["38", "39", "40", "41", "42", "43"],
      "Cor": ["B17C6E"],
      "Img": [SCouro],
    },
    valor: "R$ __,__",
  },
  {
    id: 6,
    image: CJens2,
    text: "Jeans Escuro",
    type: "Calças",
    descricao: "As calças jeans são essenciais no guarda-roupa de quem valoriza estilo, conforto e versatilidade. Com cortes que valorizam o corpo, lavagem moderna e tecido resistente, elas se adaptam a todas as ocasiões",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["080F2E"],
      "Img": [CJens2],
    },
    valor: "R$ __,__",
  }, 
  {
    id: 7,
    image: MauricinhoSarja1,
    text: "Mauricinho Sarja ",
    type: "Bermudas",
    descricao: "A Bermuda Mauricinho em Sarja é a escolha ideal para quem curte um visual alinhado, moderno e cheio de atitude. Com modelagem slim, cintura ajustada e acabamento premium, ela entrega o equilíbrio perfeito entre o casual e o sofisticado",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["121112"],
      "Img": [MauricinhoSarja1],
    },
    valor: "R$ __,__",
  },
  {
    id: 8,
    image: MauricinhoSarja2,
    text: "Mauricinho Sarja",
    type: "Bermudas",
    descricao: "A Bermuda Mauricinho em Sarja é a escolha ideal para quem curte um visual alinhado, moderno e cheio de atitude. Com modelagem slim, cintura ajustada e acabamento premium, ela entrega o equilíbrio perfeito entre o casual e o sofisticado",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["1F1C1F"],
      "Img": [MauricinhoSarja2],
    },
    valor: "R$ __,__",
  },
  {
    id: 9,
    image: SMule,
    text: "Mule",
    type: "Calçados",
    descricao: "O calçado mule é a escolha perfeita para quem busca praticidade sem abrir mão do estilo. ",
    options: {
      "Tamanho": ["38", "39", "40", "41", "42", "43"],
      "Cor": ["353943"],
      "Img": [SMule],
    },
    valor: "R$ __,__",
  },
  {
    id: 10,
    image: SMule2,
    text: "Mule",
    type: "Calçados",
    descricao: "O calçado mule é a escolha perfeita para quem busca praticidade sem abrir mão do estilo. ",
    options: {
      "Tamanho": ["38", "39", "40", "41", "42", "43"],
      "Cor": ["B8C3D5"],
      "Img": [SMule2],
    },
    valor: "R$ __,__",
  },
  {
    id: 11,
    image: SComfort,
    text: "Comfort",
    type: "Calçados",
    descricao: "Conforto de verdade, design moderno e qualidade que acompanha você o dia todo. Os Calçados Comfort foram pensados para quem valoriza leveza nos pés sem abrir mão do estilo.",
    options: {
      "Tamanho": ["38", "39", "40", "41", "42", "43"],
      "Cor": ["F4F7FE"],
      "Img": [SComfort],
    },
    valor: "R$ __,__",
  },
  {
    id: 12,
    image: CJens,
    text: "Jeans Claro",
    type: "Calças",
    descricao: "As calças jeans são essenciais no guarda-roupa de quem valoriza estilo, conforto e versatilidade. Com cortes que valorizam o corpo, lavagem moderna e tecido resistente, elas se adaptam a todas as ocasiões",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["071222"],
      "Img": [CJens],
    },
    valor: "R$ __,__",
  }, 
  {
    id: 13,
    image: Cuecas,
    text: "Lacoste",
    type: "Cuecas",
    descricao: "As cuecas Lacoste representam o que há de melhor em conforto, elegância e autenticidade. Confeccionadas com tecidos de alta qualidade e toque ultramacio, elas oferecem ajuste perfeito ao corpo, respirabilidade e liberdade de movimento durante todo o dia.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["363348", "DE2A35", "7E7A7B", "0B0B0B", "E0DBD8"],
      "Img": [Cuecas, Cuecas, Cuecas, Cuecas, Cuecas],
    },
    valor: "R$ __,__",
  },
  {
    id: 14,
    image: Cuecas2,
    text: "Hugo Boss",
    type: "Cuecas",
    descricao: "As cuecas Hugo Boss são a definição de elegância, conforto e desempenho para o homem moderno. Com design minimalista e sofisticado, oferecem ajuste preciso, toque suave e suporte ideal para o dia inteiro, sem comprometer o estilo.",
    options: {
      "Tamanho": ["P", "M", "G", "GG"],
      "Cor": ["071222", "111520", "0046BC", "8496AC", "0C1A35"],
      "Img": [Cuecas2, Cuecas2, Cuecas2, Cuecas2, Cuecas2],
    },
    valor: "R$ __,__",
  },
];


