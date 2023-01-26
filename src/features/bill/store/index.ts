import { Transaction } from '@features/bill/models/Bill'
import create from 'zustand'

type TransactionStore = {
  transaction: {
    title: string
    value: string
  }
  setTitle: (title: string) => void
  setValue: (value: string) => void
  reset: () => void
  retrive: (transaction: Transaction) => void
}

const initialTransaction = {
  id: '',
  title: '',
  value: '',
}
const useTransactionStore = create<TransactionStore>(set => ({
  transaction: initialTransaction,
  setTitle: (title: string) =>
    set(state => ({ transaction: { ...state.transaction, title } })),
  setValue: (value: string) =>
    set(state => ({ transaction: { ...state.transaction, value } })),
  reset: () =>
    set(() => ({
      transaction: initialTransaction,
    })),
  retrive: (transaction: Transaction) => set(() => ({ transaction })),
}))

export default useTransactionStore
