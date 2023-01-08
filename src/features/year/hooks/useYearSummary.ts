import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import date from '@utils/date'

const useYearSummary = (year: string) => {
  const { useQuery } = RealmContext

  const { startOfYear, endOfYear } = date.getStartAndEndOfYear(year)
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfYear, endOfYear)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return summary
}

export default useYearSummary
