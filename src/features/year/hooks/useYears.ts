import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'

const useYears = () => {
  const { useQuery } = RealmContext
  const years = [
    ...new Set(useQuery(Bill).map(bill => dayjs(bill.createdAt).year())),
  ]
  return years
}

export default useYears
