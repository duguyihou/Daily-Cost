import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'

const useYearSummary = (year: string) => {
  const { useQuery } = RealmContext

  const startOfYear = dayjs(`${Number(year)}`).toDate()
  const endOfYear = dayjs(`${Number(year) + 1}`).toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfYear, endOfYear)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return summary
}

export default useYearSummary
