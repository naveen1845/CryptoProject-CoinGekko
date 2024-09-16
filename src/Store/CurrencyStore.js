import { create } from "zustand"

const CurrencyStore = create((set) => ({
    currency : 'inr',
    setCurrency : (newCurrrency) => set((state) => ({
        ...state,
        currency : newCurrrency
    }))
}))

export default CurrencyStore;