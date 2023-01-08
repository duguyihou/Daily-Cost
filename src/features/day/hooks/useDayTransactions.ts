import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import date from '@utils/date'
import dayjs from 'dayjs'

type DayTransaction = {
  day: Date
  data: Bill[]
}

const useDayTransactions = (year: string, monthNumber: number) => {
  const { useQuery } = RealmContext
  const { startOfMonth, endOfMonth } = date.getStartAndEndOfMonth(
    year,
    monthNumber,
  )

  const data = useQuery(Bill).filtered(
    'createdAt BETWEEN {$0, $1}',
    startOfMonth,
    endOfMonth,
  )

  const days = [
    ...new Set(
      useQuery(Bill)
        .filtered('createdAt BETWEEN {$0, $1}', startOfMonth, endOfMonth)
        .map(bill => dayjs(bill.createdAt).day()),
    ),
  ]
  let tranactions: DayTransaction[] = []
  days.forEach(day => {
    const dayTranactions = data.filter(e => dayjs(e.createdAt).day() === day)
    const tranaction = {
      day: dayjs(new Date(Number(year), monthNumber + 1, day)).toDate(),
      data: dayTranactions,
    }

    tranactions = [...tranactions, tranaction]
  })
  return tranactions
}

export default useDayTransactions
