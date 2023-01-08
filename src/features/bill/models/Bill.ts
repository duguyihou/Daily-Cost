import { Realm } from '@realm/react'
import dayjs from 'dayjs'

type Transaction = {
  title: string
  value: string
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
