import create from 'zustand'

interface TransactionStore {
  transaction: {
    id: Realm.BSON.ObjectId
    title: string
    value: string
    createdAt: Date
  }
  setTitle: (title: string) => void
  setValue: (value: string) => void
  reset: () => void
}

type Transaction = TransactionStore['transaction']
const useTransactionStore = (initialTransaction: Transaction) =>
  create<TransactionStore>(set => ({
    transaction: initialTransaction,
    setTitle: (title: string) =>
      set(state => ({ transaction: { ...state.transaction, title } })),
    setValue: (value: string) =>
      set(state => ({ transaction: { ...state.transaction, value } })),
    reset: () =>
      set(() => ({
        transaction: initialTransaction,
      })),
  }))

export default useTransactionStore
