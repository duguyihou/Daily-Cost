import create from 'zustand'

type NewTransactionStore = {
  transaction: {
    title: string
    value: string
  }
  setTitle: (title: string) => void
  setValue: (value: string) => void
  reset: () => void
}

const initialTransaction = {
  title: '',
  value: '',
}
const useNewTransactionStore = create<NewTransactionStore>(set => ({
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

export default useNewTransactionStore
