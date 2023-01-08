import dayjs from 'dayjs'

const getStartAndEndOfYear = (year: string) => {
  const startOfYear = dayjs(`${Number(year)}`).toDate()
  const endOfYear = dayjs(`${Number(year) + 1}`).toDate()
  return { startOfYear, endOfYear }
}

const getStartAndEndOfMonth = (year: string, monthNumber: number) => {
  const startOfMonth = dayjs(`${Number(year)}-${monthNumber + 1}`).toDate()
  const endOfMonth = dayjs(`${Number(year)}-${monthNumber + 2}`).toDate()
  return { startOfMonth, endOfMonth }
}

const date = {
  getStartAndEndOfYear,
  getStartAndEndOfMonth,
}

export default date
