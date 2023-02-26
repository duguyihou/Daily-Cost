import RealmContext from '@shared/RealmContext'

import { Bill } from '../models'

const useBillQuery = (id: string) => {
  const { useObject } = RealmContext
  const bill = useObject(Bill, new Realm.BSON.ObjectId(id))
  return bill
}

export default useBillQuery
