import { Realm } from '@realm/react'

export type Card = {
  title: string
  value: string
  id: Realm.BSON.ObjectId
  createdAt: Date
}
