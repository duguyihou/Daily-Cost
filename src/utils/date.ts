import dayjs from 'dayjs'

const getMonth = (
  dateTime?: string | number | Date | dayjs.Dayjs | null | undefined,
) => dayjs(dateTime).format('MMMM YYYY')

export const date = {
  getMonth,
}
