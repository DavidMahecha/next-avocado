import DB from '@database'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function allAvos(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const db = new DB()
  const avos = await db.getAll()

  response.status(200).json({
    length: avos.length,
    data: avos,
  })
}
