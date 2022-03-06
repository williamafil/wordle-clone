import { Word } from 'types'

export function bgColor(check: string | null): string {
  if (check === "correct-pos") {
    return "bg-green-700 border-green-700 text-white"
  }
  if (check === "wrong-pos") {
    return "bg-yellow-600 border-yellow-600 text-white"
  }
  if (check === "wrong-letter") {
    return "bg-gray-500 border-gray-500 text-white"
  }
  return "bg-transparent";
}

export function borderColor(val: string | null, check: string | null): string {
  if (val && check) {
    return "border-transparent"
  }
  if (!val) {
    return "border-red-200"
  }

  return "border-gray-500"
}

export function extractWord(word: Word) {
  return word.map(obj => obj.value).join('')
}