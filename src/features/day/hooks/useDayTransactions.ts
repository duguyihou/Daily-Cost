import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'

type DayTransaction = {
  day: string
  data: Bill[]
}

const useDayTransactions = (year: string, monthNumber: number) => {
  const { useQuery } = RealmContext
  const startOfMonth = dayjs(`${year}-${monthNumber + 1}`).toDate()
  const endOfMonth = dayjs(`${year}-${monthNumber + 2}`).toDate()
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
    const node = {
      day: dayjs(new Date(Number(year), monthNumber + 1, day))
        .day(day)
        .toString(),
      data: dayTranactions,
    }

    tranactions = [...tranactions, node]
  })
  return tranactions
}

export default useDayTransactions
