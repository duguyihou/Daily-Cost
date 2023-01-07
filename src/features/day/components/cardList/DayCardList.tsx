import { Bill, BillCard } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { SectionList, View } from 'react-native'

import { DayCardListProps } from './DayCardList.types'
import SectionHeader from './SectionHeader'

type DayTransaction = {
  day: string
  data: Bill[]
}
function DayCardList({ monthNumber, year }: DayCardListProps) {
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
  let result: DayTransaction[] = []
  days.forEach(day => {
    const d = data.filter(e => dayjs(e.createdAt).day() === day)
    const node = {
      day: dayjs(`${year}-${monthNumber + 1}-${day}`)
        .day(day)
        .toString(),
      data: d,
    }
    result = [...result, node]
  })
  console.log('🐵 days ------ ', days)
  console.log('🐵 a ------ ', result)
  return (
    <View>
      <SectionList
        sections={result}
        renderItem={({ item }) => (
          <BillCard title={item.title} value={item.value} />
        )}
        renderSectionHeader={({ section: { day } }) => (
          <SectionHeader date={day} />
        )}
      />
    </View>
  )
}
export default DayCardList
