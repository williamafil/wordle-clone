import axios, { AxiosRequestHeaders } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB, getTodaysWord } from 'helpers/db'


interface ResponseType {
  _id: {}
  word: string
  date: string
}

interface CommonHeaderProperties extends AxiosRequestHeaders {
  apikey: string;
}


let todaysWord: string = ''

/**
 * Match two words
 * @param answer - user's submitted word
 * @param wordToMatch - today's word
 * @returns - an array
 */
function matchWord(answer: string, wordToMatch: string) {

  const answerArr = answer.split('')
  const wordArr = wordToMatch.split('')
  const result = []

  for (let i = 0; i < wordArr.length; i += 1) {
    const idx = answerArr.indexOf(wordArr[i])

    if (idx > -1) {
      if (idx === i) {
        const res = {
          // check: 'correct-pos',
          checkNum: 3,
          value: wordArr[i],
        }
        result.push(res)

      } else {
        const res = {
          // check: 'wrong-pos',
          checkNum: 2,
          value: wordArr[i],
        }
        result.push(res)

      }
    } else {
      const res = {
        // check: 'wrong-letter',
        checkNum: 1,
        value: wordArr[i],
      }
      result.push(res)
    }
  }
  return result
}

/**
 * Spelling Check API
 * @param word - user's submitted word
 * @returns - an object
 */
async function wordAssociate(word: string) {
  axios.defaults.headers.common = {
    'apikey': process.env.API_KEY,
  } as CommonHeaderProperties;

  const url = 'https://api.apilayer.com/spell/spellchecker'
  const options = {
    params: { q: word },
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
      console.error('Unexpected Error: ', error)
      return error;
    }
  }
}

/**
 * 
 * @param req 
 * @param res 
 */
async function spellCheck(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const submittedWord = req.body.data
    const wordData = await wordAssociate(submittedWord)

    if (wordData.corrections.length === 0) {
      const client = await connectDB()
      const result = await getTodaysWord(client)
      todaysWord = result

      // correct
      const match = matchWord(todaysWord, submittedWord)

      let isCorrect: boolean = false;
      for (let i = 0; i < 5; i++) {
        if (match[i].checkNum !== 3) {
          isCorrect = false;
          break;
        }
        isCorrect = true
      }

      res.status(200).json({ correction: true, result: match, isCorrect })
    } else {
      // no such word
      res.status(200).json({ correction: false })
    }
  }
}

export default spellCheck