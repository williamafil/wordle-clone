import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

interface OptionsType {
  method: string;
  url: string;
  params: {
    q: string;
  };
  headers: {
    apikey: string | undefined;
  };
}

const todaysWord = 'prove'

function matchWord(answer: string, wordToMatch: string) {

  const answerArr = answer.split('')
  const wordArr = wordToMatch.split('')
  const result = []

  for (let i = 0; i < wordArr.length; i += 1) {
    const idx = answerArr.indexOf(wordArr[i])

    if (idx > -1) {
      if (idx === i) {
        const res = {
          check: 'correct-pos',
          value: wordArr[i],
        }
        result.push(res)

      } else {
        const res = {
          check: 'wrong-pos',
          value: wordArr[i],
        }
        result.push(res)

      }
    } else {
      const res = {
        check: 'wrong-letter',
        value: wordArr[i],
      }
      result.push(res)
    }
  }
  return result
}

async function wordAssociate(word: string) {
  const url = 'https://api.apilayer.com/spell/spellchecker'
  const options = {
    params: { q: word },
    headers: {
      'apikey': process.env.API_KEY,
    }
  };

  try {
    const { data } = await axios.get(url, options);
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // handleAxiosError(error);
      console.error('Axios Error: ', error)
    } else {
      // handleUnexpectedError(error);
      console.error('Unexpect Error: ', error)
    }
  }
}


async function spellCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    const submittedWord = req.body.data
    const wordData = await wordAssociate(submittedWord)
    if (wordData.corrections.length === 0) {
      // correct
      const result = matchWord(todaysWord, submittedWord)
      res.status(200).json({ correction: true, result })
    } else {
      // no such word
      res.status(200).json({ correction: false })
    }
  }
}

export default spellCheck