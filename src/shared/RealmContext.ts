import Bill from '@features/bill/models/Bill'
import { createRealmContext } from '@realm/react'

const config = {
  schema: [Bill],

  deleteRealmIfMigrationNeeded: true,
}

const RealmContext = createRealmContext(config)
export default RealmContext
