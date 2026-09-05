import hotdogTradicional from "../assets/produtos/hotdog-tradicional.jpg";
import hotdogDuplo from "../assets/produtos/hotdog-duplo.jpg";
import hotdogJunior from "../assets/produtos/hotdog-junior.jpg";
import hotdogCalabresa from "../assets/produtos/hotdog-calabresa.jpg";
import hotdogCarnePanela from "../assets/produtos/hotdog-carne-panela-cheddar.jpg";
import hotdogCostela from "../assets/produtos/hotdog-costela-mostarda-mel.jpg";
import hotdogDivino from "../assets/produtos/hotdog-divino.jpg";
import hotdogDoritos from "../assets/produtos/hotdog-doritos.jpg";
import hotdogVegetariano from "../assets/produtos/hotdog-vegetariano.jpg";
import fritas from "../assets/produtos/fritas.jpg";
import batataDivina from "../assets/produtos/batata-divina.jpg";
import batataCheddarBacon from "../assets/produtos/batata-cheddar-bacon.jpg";
import batataChocolate from "../assets/produtos/batata-chocolate-ovomaltine.jpg";
import batataCalabresa from "../assets/produtos/batata-calabresa-acebolada.jpg";
import milkshakeDoceLeite from "../assets/produtos/milkshake-doce-de-leite.jpg";
import milkshakeChocoOreo from "../assets/produtos/milkshake-choco-oreo.jpg";
import pudinzim from "../assets/produtos/pudinzim.jpg";
import cookieNutella from "../assets/produtos/cookie-nutella.jpg";
import miniChurros from "../assets/produtos/mini-churros-mumu.jpg";
import cocaLata from "../assets/produtos/coca-lata.jpg";
import guaranaLata from "../assets/produtos/guarana-lata.jpg";
import guaranaLataZero from "../assets/produtos/guarana-lata-zero.jpg";
import spriteLata from "../assets/produtos/sprite-lata.jpg";
import sucoUva from "../assets/produtos/suco-uva.jpg";
import coca2l from "../assets/produtos/coca-2l.jpg";
import coca2lZero from "../assets/produtos/coca-2l-zero.jpg";
import aguaSemGas from "../assets/produtos/agua-sem-gas.jpg";
import aguaComGas from "../assets/produtos/agua-com-gas.jpg";
import heineken from "../assets/produtos/heineken.jpg";
import maioneseCaseira from "../assets/produtos/maionese-caseira.jpg";
import maioneseCebolinha from "../assets/produtos/maionese-cebolinha.jpg";
import potinhoCatchup from "../assets/produtos/potinho-catchup.jpg";
import potinhoMostarda from "../assets/produtos/potinho-mostarda.jpg";
import sacheHemmerHeinz from "../assets/produtos/sache-hemmer-heinz.jpg";

export const FOTOS = {
  hotdogDivino,
  batataCheddarBacon,
  milkshakeDoceLeite,
  hotdogDuplo,
};

export type MenuItem = {
  nome: string;
  preco: string;
  descricao: string;
  imagem?: string;
  destaque?: "Mais pedido" | "Edição limitada" | "Vegetariano";
};

export type MenuGroup = {
  categoria: string;
  slug: string;
  itens: MenuItem[];
};

/**
 * Dados de exemplo para troca fácil.
 * Contato ainda pendente de confirmação do cliente.
 */
export const CONTATO = {
  nome: "Divino Dogueria",
  /** PENDENTE: substituir pelo WhatsApp real da Divino Dogueria. */
  whatsapp: "5511999999999",
  telefone: "(11) 99999-9999",
  /** PENDENTE: endereço real. */
  endereco: "Rua Exemplo, 123 — Centro",
  cidade: "São Paulo — SP",
  instagram: "https://instagram.com/divinodogueria",
  horarios: [
    { dia: "Terça a quinta", hora: "18h — 23h" },
    { dia: "Sexta e sábado", hora: "18h — 00h" },
    { dia: "Domingo", hora: "18h — 23h" },
    { dia: "Segunda", hora: "Fechado" },
  ],
  pagamentos: ["Pix", "Cartão de crédito", "Cartão de débito", "Dinheiro", "Vale-refeição"],
  entrega: ["Centro", "Vila Nova", "Jardim América", "Bairro Alto"],
};

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function pedirItemLink(item: MenuItem) {
  return whatsappLink(`Olá! Quero pedir 1x ${item.nome} (${item.preco}).`);
}

export const PEDIR_GERAL = whatsappLink(
  "Olá! Vim pelo site da Divino Dogueria e quero fazer um pedido.",
);

export const MENU: MenuGroup[] = [
  {
    categoria: "Hot Dog Gourmet",
    slug: "hot-dog-gourmet",
    itens: [
      {
        nome: "Cachorro Quente Tradicional",
        preco: "R$ 26,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, uma salsicha, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Cachorro Quente Duplo",
        preco: "R$ 29,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, duas salsichas, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Hot Dog Divino Junior",
        preco: "R$ 22,00",
        descricao:
          "Pão de hot dog (100g), molho de tomate, maionese Divino (contém leite), catchup, 1 salsicha e 3 batatas sorriso.",
      },
      {
        nome: "Hot Dog Calabresa",
        preco: "R$ 31,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, salsicha, calabresa em pedaços, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Hot Dog Carne de Panela e Cheddar",
        preco: "R$ 39,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), carne de panela desfiada, molho Divino (contém barbecue), cheddar, farofa de bacon, tempero verde, catchup e batata-palha.",
      },
      {
        nome: "Hot Dog Costela, Mostarda e Mel",
        preco: "R$ 41,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), costela desfiada com molho de mostarda e mel, queijo gratinado, fritas, catchup e tempero verde.",
      },
      {
        nome: "Hot Dog Divino",
        preco: "R$ 44,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), calabresa, bacon, carne de panela desfiada, Catupiry, vinagrete, fritas, cheddar, catchup e tempero verde.",
        destaque: "Mais pedido",
      },
      {
        nome: "Hot Dog Doritos",
        preco: "R$ 47,50",
        descricao:
          "Edição Limitada - Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), catchup, mostarda, duas salsichas, cebola roxa, bacon, calabresa, orégano e Doritos.",
        destaque: "Edição limitada",
      },
      {
        nome: "Hot Dog Vegetariano",
        preco: "R$ 42,00",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, uma Linguiça do Futuro, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue e leite), queijo gratinado e tempero verde.",
        destaque: "Vegetariano",
      },
    ],
  },
  {
    categoria: "Para acompanhar",
    slug: "para-acompanhar",
    itens: [
      { nome: "Fritas", preco: "R$ 22,00", descricao: "300 gramas de batata frita." },
      {
        nome: "Batata Divina",
        preco: "R$ 32,00",
        descricao:
          "300g de batata frita, costela desfiada, molho de catupiry com queijo mussarela e tempero verde.",
        destaque: "Mais pedido",
      },
      {
        nome: "Batata Cheddar e Bacon",
        preco: "R$ 32,00",
        descricao: "300g de batata frita, com molho de cheddar cremoso e cubinhos de bacon por cima.",
      },
      {
        nome: "Batata com Chocolate c/ Ovomaltine ou Bacon Cubinhos",
        preco: "R$ 28,00",
        descricao: "300g de batata frita já salgada, chocolate ao leite derretido por cima.",
      },
      {
        nome: "Batata com Calabresa Acebolada",
        preco: "R$ 32,00",
        descricao:
          "300g de batata frita, calabresa em pedaços com cebola, metade molho de cheddar e metade molho catupiry com mussarela.",
      },
    ],
  },
  {
    categoria: "Combos",
    slug: "combos",
    itens: [
      {
        nome: "1 Hot Dog Duplo + 1 Fritas + Bebida",
        preco: "R$ 49,00",
        descricao: "1 Hot Dog Tradicional Duplo + 1 Fritas + 1 Lata de Guaraná.",
      },
      {
        nome: "2 Hot Dog Tradicional + 1 Fritas + Bebida",
        preco: "R$ 79,00",
        descricao: "2 Hot Dog Tradicional + 1 Fritas + 2 Coca-Cola lata.",
      },
      {
        nome: "4 Hot Dog Tradicional + 1 Bebida",
        preco: "R$ 112,00",
        descricao: "4 Hot Dog Tradicional + 1 Coca-Cola 2l.",
      },
    ],
  },
  {
    categoria: "MilkShakes",
    slug: "milkshakes",
    itens: [
      {
        nome: "Milk Shake Doce de Leite",
        preco: "R$ 32,00",
        descricao: "MilkShake Doce de Leite MUMU com farofa de paçoca no copo de 350ml.",
      },
      {
        nome: "Milk Shake Choco com Oreo",
        preco: "R$ 32,00",
        descricao: "MilkShake Chocolate ao leite com pedaços de Oreo no copo de 350ml.",
      },
    ],
  },
  {
    categoria: "Docinho",
    slug: "docinho",
    itens: [
      { nome: "Pudinzim", preco: "R$ 15,99", descricao: "Pudim cremoso de 120g." },
      { nome: "Cookie Nutella", preco: "R$ 13,99", descricao: "Cookie recheado com Nutella." },
      {
        nome: "Mini Churros com MUMU",
        preco: "R$ 22,00",
        descricao: "10 mini churros fritos com acompanhamento de doce de leite MUMU.",
      },
    ],
  },
  {
    categoria: "Bebidas",
    slug: "bebidas",
    itens: [
      { nome: "Coca Cola lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Coca Cola Zero lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Guaraná lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Guaraná lata Zero", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Sprite lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      {
        nome: "Suco Uva Integral Bordô ou Branco",
        preco: "R$ 15,00",
        descricao: "Suco Cavichion Garrafinha 300ml - Sem Conservantes",
      },
      { nome: "Coca Cola 2l", preco: "R$ 15,00", descricao: "2 litros" },
      { nome: "Coca Cola 2l Zero", preco: "R$ 15,00", descricao: "2 litros" },
      { nome: "Água sem Gás", preco: "R$ 6,00", descricao: "500ml" },
      { nome: "Água com Gás", preco: "R$ 6,00", descricao: "500ml" },
      { nome: "Heineken Long Neck 330ml", preco: "R$ 12,00", descricao: "Para maiores de 18 anos." },
    ],
  },
];
