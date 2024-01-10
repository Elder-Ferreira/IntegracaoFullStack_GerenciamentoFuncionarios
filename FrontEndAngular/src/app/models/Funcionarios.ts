export interface Funcionario{
  id?: number;
  nome: string;
  sobrenome: string;
  ativo: boolean;
  turno: string;
  dataDeCriacao?: string;
  dataDeAlteração?: string;
}
