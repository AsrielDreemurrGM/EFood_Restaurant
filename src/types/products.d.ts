declare type HomeProducts = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio?: ProfileProducts[];
};

declare type ProfileProducts = {
  foto: string;
  preco: number;
  id: number;
  restaurantId: number;
  nome: string;
  descricao: string;
  porcao: string;
  tipo: string;
};
