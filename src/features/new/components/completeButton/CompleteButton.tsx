import { Button, ButtonSize } from '@components/elements'
import { Bill } from '@features/bill'
import useNewTransactionStore from '@features/new/store'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps } from '@routes/Routes.types'
import RealmContext from '@shared/RealmContext'
import React, { useCallback } from 'react'

function CompleteButton() {
  const { transaction, reset } = useNewTransactionStore()
  const navigation = useNavigation<HomeStackNavigationProps>()

  const { useRealm } = RealmContext
  const realm = useRealm()

  const handlePlus = useCallback(() => {
    if (transaction.value.trim() === '') return
    realm.write(() => {
      realm.create('Bill', Bill.generate(transaction))
    })
    reset()
    navigation.goBack()
  }, [navigation, realm, reset, transaction])

  return <Button icon={faCheck} size={ButtonSize.XL} onPress={handlePlus} />
}
export default CompleteButton
