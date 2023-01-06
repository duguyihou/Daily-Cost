import { Bill } from '@features/bill'
import { Realm } from '@realm/react'
import { Configuration } from 'realm'

jest.mock('@features/year', () => ({
  YearCardList: 'YearCardList',
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ push: jest.fn() }),
}))

describe('Home', () => {
  const config: Configuration = {
    schema: [Bill],
  }
  let realm: Realm
  beforeEach(async () => {
    realm = await Realm.open(config)
  })
  afterEach(() => {
    if (!realm.isClosed) realm.close()
    if (config) Realm.deleteFile(config)
  })
  test('Close a Realm', async () => {
    expect(realm.isClosed).toBe(false)
    realm.close()
    expect(realm.isClosed).toBe(true)
  })
})
