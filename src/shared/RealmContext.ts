import { Bill } from '@features/bill/models/Bill'
// import { DayTransaction } from '@features/day/models/DayTransaction'
import { createRealmContext } from '@realm/react'

const config = {
  // schema: [Bill, DayTransaction],
  schema: [Bill],

  deleteRealmIfMigrationNeeded: true,
}

const RealmContext = createRealmContext(config)
export default RealmContext
