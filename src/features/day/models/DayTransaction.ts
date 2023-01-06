import { Bill } from '@features/bill/models/Bill'
import { Realm } from '@realm/react'

export class DayTransaction extends Realm.Object {
  _id!: Realm.BSON.ObjectId

  transactions!: Bill[]

  static generate(transactions: Bill[]) {
    return {
      _id: new Realm.BSON.ObjectId(),
      transactions,
    }
  }

  static schema = {
    name: 'DayTransactions',
    primaryKey: '_id',
    properties: {
      _id: 'objectedId',
      transactions: 'Bill[]',
    },
  }
}
