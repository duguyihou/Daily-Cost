import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import date from '@utils/date'

const useMonthSummary = (year: string, monthNumber: number) => {
  const { useQuery } = RealmContext
  const { startOfMonth, endOfMonth } = date.getStartAndEndOfMonth(
    year,
    monthNumber,
  )
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfMonth, endOfMonth)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return summary
}

export default useMonthSummary
