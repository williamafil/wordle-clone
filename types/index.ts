// { check: null | string; value: null | string }[][]
export type Letter = {
  check: string | null;
  value: string | null;
}

export type Word = [Letter, Letter, Letter, Letter, Letter]
