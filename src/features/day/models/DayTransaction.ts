import { Bill } from '@features/bill'
import { Realm } from '@realm/react'

class DayTransaction extends Realm.Object {
  _id!: Realm.BSON.ObjectId

  transactions!: Bill[]

  createdAt!: Date

  static generate(transactions: Bill[]) {
    return {
      _id: new Realm.BSON.ObjectId(),
      transactions,
      createdAt: new Date(),
    }
  }

  static schema = {
    name: 'DayTransaction',
    primaryKey: '_id',
    properties: {
      _id: 'objectedId',
      transactions: 'Bill[]',
      createdAt: 'date',
    },
  }
}

export default DayTransaction
