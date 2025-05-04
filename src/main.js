import {Client, Databases} from 'node-appwrite'

const PROJECT_ID = process.env.PROJECT_ID
const DATABASE_ID = process.env.DATABASE_ID
const COLLECTION_USERS_ID = process.env.COLLECTION_USERS_ID

export default async ({ req, res, log, error }) => {

  const client = new Client()

  client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

  const database = new Databases(client)

  
  if (req.method === 'GET') {
    const response = await database.listDocuments({
      DATABASE_ID,
      COLLECTION_USERS_ID
    })
    return res.json(response.documents)
  }

  if (req.method === 'POST') {
    return res.json({
      'sendData': req.body,
      'DOGENV': process.env.DOGENV,
      'CATENV': process.env.CATENV
    })
  }
};
