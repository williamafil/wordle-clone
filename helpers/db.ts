import dayjs from 'dayjs'
import { MongoClient } from 'mongodb'


export async function connectDB() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qyibr.mongodb.net/WordleClone?retryWrites=true&w=majority`
  )
  return client
}

export async function getTodaysWord(client: MongoClient) {
  const date = dayjs().format('YYYY-MM-DD')
  const query = { date: date }

  const db = client.db()
  const doc = await db.collection('words').findOne(query)

  if (!doc) {
    console.error('No data found')
    return ""
  }
  return doc.word
}