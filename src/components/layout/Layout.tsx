import { PlusButton } from '@features/bill'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import { LayoutProps } from './Layout.types'

function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      {children}
      <PlusButton />
    </View>
  )
}
export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
