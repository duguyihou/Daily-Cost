import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'

const useMonths = (year: string) => {
  const { useQuery } = RealmContext
  const startOfYear = dayjs(`${Number(year)}`).toDate()
  const endOfYear = dayjs(`${Number(year) + 1}`).toDate()
  const months = [
    ...new Set(
      useQuery(Bill)
        .filtered('createdAt BETWEEN {$0, $1}', startOfYear, endOfYear)
        .map(bill => dayjs(bill.createdAt).month()),
    ),
  ]
  return months
}

export default useMonths
