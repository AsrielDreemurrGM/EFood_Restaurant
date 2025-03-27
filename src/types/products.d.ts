export type HomeProducts = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

export type ProfileProducts = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
  tipo: string;
};
