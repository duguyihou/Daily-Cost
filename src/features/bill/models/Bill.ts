import { Realm } from '@realm/react'
import dayjs from 'dayjs'

export type Transaction = {
  id: string
  title: string
  value: string
  createdAt: Date
}
class Bill extends Realm.Object {
  _id!: Realm.BSON.ObjectId

  title!: string

  value!: string

  createdAt!: Date

  static generate(transaction: Transaction) {
    const { title, value } = transaction
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      value: Number(value),
      createdAt: dayjs().toDate(),
    }
  }

  static update(transaction: Transaction) {
    const { title, value, id } = transaction
    return {
      _id: new Realm.BSON.ObjectId(id),
      title,
      value: Number(value),
    }
  }

  static schema = {
    name: 'Bill',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      value: 'double',
      createdAt: 'date',
    },
  }
}

export default Bill
