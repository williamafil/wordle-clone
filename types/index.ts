export type Letter = {

  checkNum: number;
  value: string | null;
}

export type Word = [Letter, Letter, Letter, Letter, Letter]

export interface SpellCheckProps {
  spelling: string;
  round: number;
}