import DB from '@database'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getAvo(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const db = new DB()

  const id = request.query.id
  const avo = await db.getById(id as string)

  response.status(200).json(avo)
}
