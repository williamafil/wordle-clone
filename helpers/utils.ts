import { Word } from 'types'

export function extractWord(word: Word) {
  return word.map(obj => obj.value).join('')
}