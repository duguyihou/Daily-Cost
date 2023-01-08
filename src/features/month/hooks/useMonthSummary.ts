import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'

const useMonthSummary = (year: string, monthNumber: number) => {
  const { useQuery } = RealmContext

  const startOfMonth = dayjs(`${Number(year)}-${monthNumber + 1}`).toDate()
  const endOfMonth = dayjs(`${Number(year)}-${monthNumber + 2}`).toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfMonth, endOfMonth)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return summary
}

export default useMonthSummary
