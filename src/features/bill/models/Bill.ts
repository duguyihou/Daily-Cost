import { Realm } from '@realm/react'

class Bill extends Realm.Object {
  _id!: Realm.BSON.ObjectId

  title!: string

  value!: string

  createdAt!: Date

  static generate(title: string, value: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      value,
      createdAt: new Date(),
    }
  }

  static schema = {
    name: 'Bill',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      value: 'string',
      createdAt: 'date',
    },
  }
}

export default Bill
