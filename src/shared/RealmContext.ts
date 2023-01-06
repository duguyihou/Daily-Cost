import Bill from '@features/bill/models/Bill'
import { DayTransaction } from '@features/day'
import { createRealmContext } from '@realm/react'

const config = {
  schema: [Bill, DayTransaction],

  deleteRealmIfMigrationNeeded: true,
}

const RealmContext = createRealmContext(config)
export default RealmContext
