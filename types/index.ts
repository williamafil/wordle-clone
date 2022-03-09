// { check: null | string; value: null | string }[][]
export type Letter = {
  check: string | null;
  checkNum: number;
  value: string | null;
}
export type Word = [Letter, Letter, Letter, Letter, Letter]

// export type RecordLetter = {
//   check: string | null;
//   value: string;
// }
// export type RecordWord = [RecordLetter, RecordLetter, RecordLetter, RecordLetter, RecordLetter]